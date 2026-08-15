import React from "react";

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
          Find & Hire
          <br />
          Experts for any Job
        </h1>

        <p className="mt-6 text-center text-sm text-[var(--text-light)]">
          Jobs & Job Search. Find jobs in global. Executive jobs & work.
        </p>

        <form
          action=""
          className="mt-9 flex w-full max-w-[700px] items-center rounded-md border border-neutral-700 bg-white p-2"
        >
          <div className="flex flex-1 flex-col px-4 py-2">
            <label
              className="mb-1 text-left text-[9px] text-neutral-400"
              htmlFor="category"
            >
              Job Categories
            </label>

            <select
              className="w-full cursor-pointer appearance-none bg-transparent text-left text-xs font-medium text-neutral-700 outline-none"
              id="category"
            >
              <option>Designer</option>
              <option>Developer</option>
              <option>Marketing</option>
              <option>Business</option>
            </select>
          </div>

          <div className="h-10 w-px bg-neutral-200" />

          <div className="flex flex-1 flex-col px-4 py-2">
            <label
              className="mb-1 text-left text-[9px] text-neutral-400"
              htmlFor="keywords"
            >
              Keywords or Title
            </label>

            <input
              className="w-full bg-transparent text-xs text-neutral-700 outline-none placeholder:text-neutral-500"
              id="keywords"
              type="text"
              placeholder="Design, branding"
            />
          </div>

          <button
            className="h-10 rounded-md bg-[var(--light-green)] px-7 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.25)] active:translate-y-0 active:opacity-70"
            type="submit"
          >
            Search
          </button>
        </form>

        <p className="mt-3 text-center text-[10px] text-neutral-400">
          <span className="font-semibold text-neutral-700">Popular:</span>{" "}
          Designer, Art, Business, Video Editing
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
