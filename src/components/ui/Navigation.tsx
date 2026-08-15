import React from "react";

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-between  pt-5">
      <h1 className=" cursor-pointer text-2xl font-bold tracking-tight text-[var(--text-light)]">
        Career<span className="text-[var(--light-green)]">-Hub</span>
      </h1>
      <ul className="flex flex-row gap-6 items-center">
        <li className="text-[var(--text-light)] cursor-pointer">Home</li>
        <li className="text-[var(--text-light)] cursor-pointer">Jobs</li>
        <li className="text-[var(--text-light)] cursor-pointer">Explore</li>
        <li className="text-[var(--text-light)] cursor-pointer">Category</li>
        <li className="text-[var(--text-light)] cursor-pointer">Pages</li>
      </ul>
      <div className="flex gap-6">
        <button className="hover:-translate-y-[2px] active:opacity-70 hover:shadow-[0_6px_20px_rgba(0,255,140,0.25)] transition-all duration-200 ease-out rounded-full cursor-pointer text-[var(--text-light)] border-solid border-2 pr-6 pl-6 pt-1 pb-1">
          Login
        </button>
        <button className="hover:-translate-y-[2px] active:opacity-70 hover:shadow-[0_6px_20px_rgba(0,255,140,0.25)] transition-all duration-200 ease-out rounded-full cursor-pointer border-[var(--light-green)] text-white text-[var(--text-light)] bg-[var(--light-green)] border-solid border-2 pr-6 pl-6 pt-1 pb-1">
          Login
        </button>
      </div>
    </nav>
  );
}
