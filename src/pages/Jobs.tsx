import { useModal } from "../hooks/useModal";
import JobsModal from "../components/ui/JobsModal";
import useCustomQuery from "../hooks/useCustomQuery";
import { useState } from "react";
import useJobsFilter from "../hooks/useJobsFilter";

export default function Jobs() {
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("page");

    if (savedPage) {
      return Number(savedPage);
    }

    localStorage.setItem("page", "1");

    return 1;
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { showJob, handleShowModal, handleJobNavigation } = useModal();

  const {
    experieceLevel,
    jobType,
    location,
    categories,
    setJobType,
    setExperienceLevel,
    setLocation,
    handleClearFilter,
    setCategories,
  } = useJobsFilter();

  const { data, totalPages } = useCustomQuery({
    queryKey: "jobs",
    page,
    filters: {
      jobType,
      experieceLevel,
      location,
      categories,
    },
  });

  const bookmarkIcon = (
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
  );

  function handleIncreasePage() {
    setPage((prev) => {
      const nextPage = prev + 1;

      localStorage.setItem("page", String(nextPage));

      return nextPage;
    });
  }

  function handleDecreasePage() {
    setPage((prev) => {
      const prevPage = prev - 1;

      localStorage.setItem("page", String(prevPage));

      return prevPage;
    });
  }

  const differencePage = totalPages - page;
  const startPage = totalPages - differencePage;

  console.log(data);

  return (
    <div className="w-full py-16 relative">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center">
        <span className="mb-3 text-xs font-medium text-[var(--light-green)]">
          {} open positions
        </span>

        <h1 className="text-center text-5xl font-medium leading-[1.05] tracking-[-1.5px] text-black">
          Find your next role
        </h1>

        <p className="mt-4 max-w-md text-center text-sm text-[var(--text-light)]">
          Browse curated openings from teams that are hiring right now.
        </p>

        <form
          action=""
          className="mt-8 flex w-full max-w-[760px] items-center rounded-md border border-neutral-700 bg-white p-2"
        >
          <div className="flex flex-1 flex-col px-4 py-2">
            <label
              className="mb-1 text-left text-[9px] text-neutral-400"
              htmlFor="keywords"
            >
              Keywords or title
            </label>
            <input
              id="keywords"
              type="text"
              placeholder="e.g. Product Designer"
              className="w-full bg-transparent text-xs text-neutral-700 outline-none placeholder:text-neutral-500"
            />
          </div>

          <div className="h-10 w-px bg-neutral-200" />

          <div className="flex flex-1 flex-col px-4 py-2">
            <label
              className="mb-1 text-left text-[9px] text-neutral-400"
              htmlFor="location"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="City or remote"
              className="w-full bg-transparent text-xs text-neutral-700 outline-none placeholder:text-neutral-500"
            />
          </div>

          <div className="h-10 w-px bg-neutral-200" />

          <div className="flex flex-1 flex-col px-4 py-2">
            <label
              className="mb-1 text-left text-[9px] text-neutral-400"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              className="w-full cursor-pointer appearance-none bg-transparent text-left text-xs font-medium text-neutral-700 outline-none"
            >
              <option>All categories</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
              <option>Business</option>
            </select>
          </div>

          <button
            className="h-10 rounded-md bg-[var(--light-green)] px-7 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.25)] active:translate-y-0 active:opacity-70"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-[1100px] items-start gap-10">
        <aside className="hidden w-[220px] shrink-0 lg:block">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-black">Filters</h2>
            <button
              onClick={handleClearFilter}
              type="button"
              className="cursor-pointer text-[11px] font-medium text-[var(--light-green)] hover:underline"
            >
              Clear all
            </button>
          </div>
          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold text-neutral-700">
              Categories
            </h3>
            <div className="flex flex-col gap-2.5">
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Designer"
                  checked={categories === "Designer"}
                  onChange={(e) => setCategories(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Design
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Developer"
                  checked={categories === "Developer"}
                  onChange={(e) => setCategories(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Development
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Marketing"
                  checked={categories === "Marketing"}
                  onChange={(e) => setCategories(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Marketing
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Business"
                  checked={categories === "Business"}
                  onChange={(e) => setCategories(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Business
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Sales"
                  checked={categories === "Sales"}
                  onChange={(e) => setCategories(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Sales
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold text-neutral-700">
              Job type
            </h3>
            <div className="flex flex-col gap-2.5">
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Full-time"
                  checked={jobType === "Full-time"}
                  onChange={(e) => setJobType(e.target.value)}
                  type="checkbox"
                  defaultChecked
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Full-time
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Part-time"
                  checked={jobType === "Part-time"}
                  onChange={(e) => setJobType(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Part-time
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Contract"
                  checked={jobType === "Contract"}
                  onChange={(e) => setJobType(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Contract
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Internship"
                  checked={jobType === "Internship"}
                  onChange={(e) => setJobType(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Internship
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold text-neutral-700">
              Experience level
            </h3>
            <div className="flex flex-col gap-2.5">
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Junior"
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  type="checkbox"
                  checked={experieceLevel === "Junior"}
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Junior
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Middle"
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  type="checkbox"
                  checked={experieceLevel === "Middle"}
                  defaultChecked
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Middle
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Senior"
                  checked={experieceLevel === "Senior"}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Senior
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Lead"
                  checked={experieceLevel === "Lead"}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Lead
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-xs font-semibold text-neutral-700">
              Location
            </h3>
            <div className="flex flex-col gap-2.5">
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Remote"
                  checked={location === "Remote"}
                  onChange={(e) => setLocation(e.target.value)}
                  type="checkbox"
                  defaultChecked
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Remote
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="On-site"
                  checked={location === "On-site"}
                  onChange={(e) => setLocation(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                On-site
              </label>
              <label className="flex items-center gap-2 text-xs text-neutral-500">
                <input
                  value="Hybrid"
                  checked={location === "Hybrid"}
                  onChange={(e) => setLocation(e.target.value)}
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-neutral-300 accent-[var(--light-green)]"
                />
                Hybrid
              </label>
            </div>
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs text-neutral-400">
              Showing <span className="font-medium text-neutral-700">1–8</span>
              of
              <span className="font-medium text-neutral-700">
                {data?.length}
              </span>
              jobs
            </p>

            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400">Sort by</span>
              <select className="cursor-pointer appearance-none rounded-md border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-600 outline-none">
                <option>Most recent</option>
                <option>Highest salary</option>
                <option>Company A–Z</option>
              </select>
            </div>
          </div>

          {data &&
            data.map((el) => (
              <div
                onClick={() => {
                  handleShowModal();
                  handleJobNavigation(el.id);
                }}
                key={el.id}
                className="flex flex-col gap-8 mt-8"
              >
                <div className="group flex items-start gap-4 rounded-md border border-neutral-200 p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-600">
                    {el.shortCompanyName}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-black">
                          {el.title}
                        </h3>
                        <p className="mt-1 text-xs text-[var(--text-light)]">
                          {el.location}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label="Save job"
                        className="text-neutral-300 transition-colors hover:text-[var(--light-green)]"
                      >
                        {bookmarkIcon}
                      </button>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                        {el.type}
                      </span>

                      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                        {el.category}
                      </span>

                      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                        {el.experience}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-neutral-700">
                        {el.salary}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        Posted: {el.postedAt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <div className="mt-10 flex items-center justify-center gap-2">
            {data && totalPages >= 2 && startPage !== 1 && (
              <button
                onClick={handleDecreasePage}
                disabled={page === 1}
                type="button"
                className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-300"
              >
                ‹
              </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                onClick={() => {
                  const nextPage = i + 1;

                  setPage(nextPage);
                  setCurrentPage(i + 1);
                  localStorage.setItem("page", String(nextPage));
                }}
                key={i}
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--light-green)] text-xs font-medium text-white"
                style={{
                  backgroundColor: currentPage === i + 1 ? "#2ced8d" : "",
                }}
              >
                {i + 1}
              </button>
            ))}
            {data && totalPages >= 2 && differencePage !== 0 && (
              <button
                onClick={handleIncreasePage}
                type="button"
                className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 hover:border-neutral-300"
              >
                ›
              </button>
            )}
          </div>
        </div>
      </div>

      {showJob && <JobsModal />}
    </div>
  );
}
