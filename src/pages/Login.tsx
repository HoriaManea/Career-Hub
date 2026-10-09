export default function Login() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-col border-2 text-[#0a0a0a] rounded-3xl gap-32 p-40 bg-[#E3E5E6] ">
        <h3 className="text-3xl">Create an account</h3>
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="name-input">Fullname</label>
            <input id="name-input" className="border" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email-input">Email</label>
            <input id="email-input" className="border" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input id="password" className="border" />
          </div>
        </form>
        <div className="flex flex-col">
          <button>Submit</button>
          <div className="flex flex-row justify-around">
            <button>Apple</button>
            <button>Google</button>
          </div>
        </div>
      </div>
      <div>login image</div>
    </div>
  );
}
