from datetime import datetime, timezone
from pathlib import Path

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pwdlib import PasswordHash
from pydantic import BaseModel, ConfigDict, Field
from sqlalchemy import Boolean, DateTime, String, or_, select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column

from database import SessionLocal, engine


class Base(DeclarativeBase):
    pass


class UserDB(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    username: Mapped[str | None] = mapped_column(String(50), unique=True, nullable=True)
    hashed_password: Mapped[str] = mapped_column(String(255))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

Base.metadata.create_all(bind=engine)

class UserCreate(BaseModel):
    email: str = Field(min_length=3, max_length=255)
    username: str | None = Field(default=None, min_length=3, max_length=50)
    password: str = Field(min_length=8, max_length=128)


class UserOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    email: str
    username: str | None
    is_active: bool
    created_at: datetime

FRONTEND_DIR = Path(__file__).parent / "frontend"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

password_hash = PasswordHash.recommended()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/register-user", status_code=status.HTTP_201_CREATED, response_model=UserOut)
def register_user(user_in: UserCreate, db: Session = Depends(get_db)):
    email = user_in.email.strip().lower()
    username = user_in.username.strip() if user_in.username else None

    conditions = [UserDB.email == email]
    if username:
        conditions.append(UserDB.username == username)

    if db.scalars(select(UserDB).where(or_(*conditions))).first():
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email-ul sau username-ul este deja folosit.",
        )

    user = UserDB(
        email=email,
        username=username,
        hashed_password=password_hash.hash(user_in.password),
    )

    db.add(user)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email-ul sau username-ul este deja folosit.",
        )
    db.refresh(user)

    return user  


@app.get("/users", status_code=status.HTTP_200_OK, response_model=list[UserOut])
def show_users(db: Session = Depends(get_db)):
    return db.scalars(select(UserDB)).all()