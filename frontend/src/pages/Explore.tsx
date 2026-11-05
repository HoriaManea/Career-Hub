import { Link } from "react-router";

import profileImage1 from "../assets/profile1.jpg";
import profileImage2 from "../assets/profile2.jpg";
import profileImage3 from "../assets/profile3.jpg";
import profileImage6 from "../assets/profile6.jpg";
import profileImage8 from "../assets/profile8.jpg";
import profileImage9 from "../assets/profile9.jpg";

export default function Explore() {
  return (
    <div className="w-full py-16">
      <section className="relative flex w-full flex-col items-center overflow-hidden pb-10">
        <div className="absolute left-[8%] top-[10%] hidden h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
          <img
            src={profileImage3}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute left-[16%] top-[52%] hidden h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
          <img
            src={profileImage1}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute left-[4%] top-[60%] hidden h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
          <img
            src={profileImage2}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute left-[20%] top-[20%] hidden h-8 w-8 items-center justify-center rounded-full bg-yellow-100 md:flex">
          <span className="text-xs text-yellow-500">◆</span>
        </div>
        <div className="absolute left-[12%] top-[36%] h-2 w-2 rounded-full bg-pink-200" />

        <div className="absolute right-[10%] top-[12%] hidden h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
          <img
            src={profileImage6}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute right-[5%] top-[48%] hidden h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
          <img
            src={profileImage8}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute right-[18%] top-[58%] hidden h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-md md:block">
          <img
            src={profileImage9}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute right-[20%] top-[24%] hidden h-8 w-8 items-center justify-center rounded-full bg-emerald-50 md:flex">
          <span className="text-xs text-emerald-500">◆</span>
        </div>
        <div className="absolute right-[13%] top-[38%] h-3 w-3 rounded-full bg-[var(--light-green)] opacity-40" />

        <h1 className="relative z-10 text-center text-5xl font-medium leading-[1.05] tracking-[-1.5px] text-black">
          Explore opportunities
        </h1>

        <p className="relative z-10 mt-4 max-w-md text-center text-sm text-[var(--text-light)]">
          Discover companies, trending roles and categories picked for you.
        </p>

        <form
          action=""
          className="relative z-10 mt-8 flex w-full max-w-[700px] items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-2 pl-5 shadow-sm"
        >
          <svg
            className="h-4 w-4 shrink-0 text-neutral-400"
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
          <input
            type="text"
            placeholder="Search companies, roles or skills"
            className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
          />
          <button
            type="button"
            className="flex h-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--light-green)] px-7 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.35)] active:translate-y-0 active:opacity-70"
          >
            Explore
          </button>
        </form>

        <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
            React
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
            Figma
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
            Remote
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
            SEO
          </span>
          <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-600">
            Node.js
          </span>
        </div>
      </section>

      <section className="mx-auto mt-14 w-full max-w-[1100px]">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.5px] text-black">
              Browse by category
            </h2>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              Find roles that match your skills.
            </p>
          </div>
          <Link
            to="/jobs"
            className="text-[11px] font-medium !text-[var(--light-green)] hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group flex cursor-pointer items-center gap-4 rounded-md border border-neutral-200 bg-white p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-black">Design</h3>
              <p className="mt-1 text-xs text-[var(--text-light)]">
                124 open positions
              </p>
            </div>
            <span className="text-neutral-300 transition-colors group-hover:text-[var(--light-green)]">
              ›
            </span>
          </div>

          <div className="group flex cursor-pointer items-center gap-4 rounded-md border border-neutral-200 bg-white p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-black">Development</h3>
              <p className="mt-1 text-xs text-[var(--text-light)]">
                318 open positions
              </p>
            </div>
            <span className="text-neutral-300 transition-colors group-hover:text-[var(--light-green)]">
              ›
            </span>
          </div>

          <div className="group flex cursor-pointer items-center gap-4 rounded-md border border-neutral-200 bg-white p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11l18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-black">Marketing</h3>
              <p className="mt-1 text-xs text-[var(--text-light)]">
                96 open positions
              </p>
            </div>
            <span className="text-neutral-300 transition-colors group-hover:text-[var(--light-green)]">
              ›
            </span>
          </div>

          <div className="group flex cursor-pointer items-center gap-4 rounded-md border border-neutral-200 bg-white p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-black">Business</h3>
              <p className="mt-1 text-xs text-[var(--text-light)]">
                72 open positions
              </p>
            </div>
            <span className="text-neutral-300 transition-colors group-hover:text-[var(--light-green)]">
              ›
            </span>
          </div>

          <div className="group flex cursor-pointer items-center gap-4 rounded-md border border-neutral-200 bg-white p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-black">Sales</h3>
              <p className="mt-1 text-xs text-[var(--text-light)]">
                58 open positions
              </p>
            </div>
            <span className="text-neutral-300 transition-colors group-hover:text-[var(--light-green)]">
              ›
            </span>
          </div>

          <div className="group flex cursor-pointer items-center gap-4 rounded-md border border-neutral-200 bg-white p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-black">
                Customer Support
              </h3>
              <p className="mt-1 text-xs text-[var(--text-light)]">
                41 open positions
              </p>
            </div>
            <span className="text-neutral-300 transition-colors group-hover:text-[var(--light-green)]">
              ›
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px]">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.5px] text-black">
              Featured companies
            </h2>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              Teams that are actively hiring this week.
            </p>
          </div>
          <button
            type="button"
            className="cursor-pointer text-[11px] font-medium text-[var(--light-green)] hover:underline"
          >
            See all companies
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="flex flex-col rounded-md border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-600">
                GO
              </div>
              <span className="rounded-full bg-[rgba(1,190,94,0.08)] px-2.5 py-1 text-[10px] font-medium text-[var(--light-green)]">
                12 open roles
              </span>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-black">Google</h3>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              Mountain View · Hybrid
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[var(--text-light)]">
              Building products that help billions of people search, learn and
              create every day.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Engineering
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Design
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                AI
              </span>
            </div>
            <button
              type="button"
              className="mt-6 rounded-full border-2 border-solid border-neutral-200 px-6 py-2 text-xs font-medium text-[var(--text-light)] transition-all duration-200 ease-out hover:-translate-y-[1px] hover:border-[var(--light-green)] hover:text-[var(--light-green)] active:translate-y-0 active:opacity-70"
            >
              View company
            </button>
          </div>

          <div className="flex flex-col rounded-md border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-sm font-semibold text-yellow-600">
                SL
              </div>
              <span className="rounded-full bg-[rgba(1,190,94,0.08)] px-2.5 py-1 text-[10px] font-medium text-[var(--light-green)]">
                8 open roles
              </span>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-black">Slack</h3>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              San Francisco · Remote
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[var(--text-light)]">
              Where work happens. Helping teams collaborate and move faster
              together.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Product
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Marketing
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Sales
              </span>
            </div>
            <button
              type="button"
              className="mt-6 rounded-full border-2 border-solid border-neutral-200 px-6 py-2 text-xs font-medium text-[var(--text-light)] transition-all duration-200 ease-out hover:-translate-y-[1px] hover:border-[var(--light-green)] hover:text-[var(--light-green)] active:translate-y-0 active:opacity-70"
            >
              View company
            </button>
          </div>

          <div className="flex flex-col rounded-md border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-sm font-semibold text-pink-500">
                AB
              </div>
              <span className="rounded-full bg-[rgba(1,190,94,0.08)] px-2.5 py-1 text-[10px] font-medium text-[var(--light-green)]">
                5 open roles
              </span>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-black">Airbnb</h3>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              Global · Remote
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[var(--text-light)]">
              Creating a world where anyone can belong anywhere, one stay at a
              time.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Design
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Data
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Business
              </span>
            </div>
            <button
              type="button"
              className="mt-6 rounded-full border-2 border-solid border-neutral-200 px-6 py-2 text-xs font-medium text-[var(--text-light)] transition-all duration-200 ease-out hover:-translate-y-[1px] hover:border-[var(--light-green)] hover:text-[var(--light-green)] active:translate-y-0 active:opacity-70"
            >
              View company
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 flex w-full max-w-[1100px] items-start gap-10">
        <div className="flex flex-1 flex-col">
          <div className="mb-2 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-medium tracking-[-0.5px] text-black">
                Trending roles
              </h2>
              <p className="mt-1 text-xs text-[var(--text-light)]">
                The most viewed openings in the last 7 days.
              </p>
            </div>
            <Link
              to="/jobs"
              className="text-[11px] font-medium !text-[var(--light-green)] hover:underline"
            >
              View all jobs
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div className="group flex cursor-pointer items-start gap-4 rounded-md border border-neutral-200 p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-600">
                DR
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      Senior Product Designer
                    </h3>
                    <p className="mt-1 text-xs text-[var(--text-light)]">
                      Dribbble · Remote
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Save job"
                    className="text-neutral-300 transition-colors hover:text-[var(--light-green)]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 3a1 1 0 0 0-1 1v17l7-4 7 4V4a1 1 0 0 0-1-1H6Z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Full-time
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Designer
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Senior
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-700">
                    $6,000 – $8,500 / month
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Posted: 2 days ago
                  </span>
                </div>
              </div>
            </div>

            <div className="group flex cursor-pointer items-start gap-4 rounded-md border border-neutral-200 p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-600">
                SB
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      Frontend Developer
                    </h3>
                    <p className="mt-1 text-xs text-[var(--text-light)]">
                      ShipBob · Hybrid
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Save job"
                    className="text-neutral-300 transition-colors hover:text-[var(--light-green)]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 3a1 1 0 0 0-1 1v17l7-4 7 4V4a1 1 0 0 0-1-1H6Z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Full-time
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Developer
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Middle
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-700">
                    $4,500 – $6,000 / month
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Posted: 1 day ago
                  </span>
                </div>
              </div>
            </div>

            <div className="group flex cursor-pointer items-start gap-4 rounded-md border border-neutral-200 p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-600">
                VI
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-black">
                      Growth Marketing Manager
                    </h3>
                    <p className="mt-1 text-xs text-[var(--text-light)]">
                      Vine · On-site
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Save job"
                    className="text-neutral-300 transition-colors hover:text-[var(--light-green)]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 3a1 1 0 0 0-1 1v17l7-4 7 4V4a1 1 0 0 0-1-1H6Z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Contract
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Marketing
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                    Lead
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-700">
                    $5,000 – $7,000 / month
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Posted: 4 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="hidden w-[260px] shrink-0 flex-col gap-5 lg:flex">
          <div className="rounded-md border border-neutral-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-black">
              Popular locations
            </h3>
            <div className="mt-4 flex flex-col divide-y divide-neutral-100">
              <div className="flex cursor-pointer items-center justify-between py-2.5">
                <span className="text-xs text-neutral-600">Remote</span>
                <span className="text-[11px] text-neutral-400">412 jobs</span>
              </div>
              <div className="flex cursor-pointer items-center justify-between py-2.5">
                <span className="text-xs text-neutral-600">București</span>
                <span className="text-[11px] text-neutral-400">186 jobs</span>
              </div>
              <div className="flex cursor-pointer items-center justify-between py-2.5">
                <span className="text-xs text-neutral-600">Cluj-Napoca</span>
                <span className="text-[11px] text-neutral-400">134 jobs</span>
              </div>
              <div className="flex cursor-pointer items-center justify-between py-2.5">
                <span className="text-xs text-neutral-600">Brașov</span>
                <span className="text-[11px] text-neutral-400">67 jobs</span>
              </div>
              <div className="flex cursor-pointer items-center justify-between py-2.5">
                <span className="text-xs text-neutral-600">Iași</span>
                <span className="text-[11px] text-neutral-400">52 jobs</span>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-black">
              Trending skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                TypeScript
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                React
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Figma
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                UX Research
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Python
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                Google Ads
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                SQL
              </span>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px]">
        <div className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-neutral-200 bg-white px-6 py-12 text-center shadow-sm">
          <div className="absolute left-[6%] top-[20%] h-3 w-3 rounded-full bg-[var(--light-green)] opacity-40" />
          <div className="absolute left-[12%] bottom-[18%] h-2 w-2 rounded-full bg-pink-200" />
          <div className="absolute right-[8%] top-[24%] h-3 w-3 rounded-full bg-yellow-200" />
          <div className="absolute right-[14%] bottom-[20%] h-2 w-2 rounded-full bg-purple-200" />

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--light-green)]/10">
            <svg
              className="h-5 w-5 text-[var(--light-green)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <h2 className="mt-5 text-3xl font-medium tracking-[-1px] text-black">
            Never miss a new role
          </h2>
          <p className="mt-3 max-w-md text-sm text-[var(--text-light)]">
            Create a job alert and get notified when companies post roles that
            match your profile.
          </p>
          <div className="mt-7 flex w-full max-w-[460px] items-center gap-2 rounded-full border border-neutral-200 bg-white p-1.5 pl-5">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
            />
            <button
              type="button"
              className="flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[var(--light-green)] px-6 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.35)] active:translate-y-0 active:opacity-70"
            >
              Create alert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
