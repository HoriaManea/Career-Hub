import { useTranslation } from "../i18n";
import { Link } from "react-router";

import profileImage1 from "../assets/profile1.jpg";
import profileImage2 from "../assets/profile2.jpg";
import profileImage3 from "../assets/profile3.jpg";
import profileImage4 from "../assets/profile4.jpg";
import profileImage5 from "../assets/profile5.jpg";
import profileImage6 from "../assets/profile6.jpg";
import profileImage7 from "../assets/profile7.jpg";
import profileImage8 from "../assets/profile8.jpg";
import profileImage9 from "../assets/profile9.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-[58rem] w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute left-[8%] top-[18%] h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage3}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute left-[15%] top-[42%] h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage4}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute left-[5%] top-[48%] h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage1}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute left-[20%] top-[21%] h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage2}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute left-[22%] top-[55%] h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage5}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute left-[16%] top-[62%] h-3 w-3 rounded-full bg-[var(--light-green)] opacity-40" />

      <div className="absolute left-[19%] top-[34%] flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
        <span className="text-xs text-yellow-500">◆</span>
      </div>

      <div className="absolute left-[11%] top-[32%] h-2 w-2 rounded-full bg-pink-200" />

      <div className="absolute left-[24%] top-[27%] h-3 w-3 rounded-full bg-emerald-100" />

      <div className="absolute right-[15%] top-[18%] h-13 w-13 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage6}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute right-[35%] top-[18%] h-13 w-13 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage7}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute right-[8%] top-[40%] h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage8}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute right-[20%] top-[48%] h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage9}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute right-[5%] top-[55%] h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-md">
        <img
          src={profileImage4}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute right-[17%] top-[30%] flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
        <span className="text-xs text-emerald-500">◆</span>
      </div>

      <div className="absolute right-[10%] top-[23%] h-3 w-3 rounded-full bg-yellow-200" />

      <div className="absolute right-[14%] top-[62%] h-2 w-2 rounded-full bg-pink-200" />

      <div className="absolute right-[25%] top-[27%] h-3 w-3 rounded-full bg-[var(--light-green)] opacity-40" />

      <div className="absolute right-[6%] top-[32%] h-2 w-2 rounded-full bg-purple-200" />

      <section className="relative z-10 flex w-full flex-col items-center">
        <h1 className="text-center text-6xl font-medium leading-[1.05] tracking-[-2px] text-black">
          {t.home.title.first}
          <br />
          {t.home.title.second}
        </h1>

        <p className="mt-6 text-center text-sm text-[var(--text-light)]">
          {t.home.subtitle}
        </p>

        <div className="mt-9 flex w-full max-w-[700px] flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--light-green)]/10">
              <svg
                className="h-4 w-4 text-[var(--light-green)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold text-neutral-700">
                Job Categories
              </span>
              <span className="text-[11px] text-neutral-400">
                Search by keyword or title
              </span>
            </div>
          </div>

          <div className="hidden h-8 w-px shrink-0 bg-neutral-200 sm:block" />

          <div className="flex flex-1 flex-wrap items-center gap-2">
            <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
              Designer
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
              Developer
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
              Marketing
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
              Business
            </span>
          </div>

          <Link
            className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--light-green)] px-7 text-xs font-medium !text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.35)] active:translate-y-0 active:opacity-70"
            to={"/jobs"}
          >
            Search
          </Link>
        </div>

        <p className="mt-3 text-center text-[10px] text-neutral-400">
          <span className="font-semibold text-neutral-700">
            {t.home.popular}
          </span>
          {t.home.popularItems}
        </p>
      </section>

      <div className="absolute bottom-[8rem] flex w-full max-w-[700px] items-center justify-between px-4 text-neutral-300">
        <span className="text-xl font-medium opacity-70">Google</span>

        <span className="text-lg font-semibold opacity-60">ShipBob</span>

        <span className="text-xl font-medium italic opacity-60">dribbble</span>

        <span className="text-xl font-semibold opacity-60">slack</span>

        <span className="text-xl font-medium italic opacity-60">Vine</span>

        <span className="text-xl font-medium opacity-60">airbnb</span>
      </div>
    </div>
  );
}
