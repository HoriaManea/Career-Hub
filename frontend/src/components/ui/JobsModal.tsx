import { useEffect, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { useTranslation } from "../../i18n";

import { Bookmark } from "lucide-react";

type Job = {
  category?: string;
  company?: string;
  description?: string;
  experience?: string;
  id?: number;
  location?: string;
  postedAt?: string;
  salary?: string;
  shortCompanyName?: string;
  tags?: string[];
  title?: string;
  type?: string;
};

export default function JobsModal({
  id,
  category,
  description,
  experience,
  location,
  postedAt,
  salary,
  shortCompanyName,
  tags,
  title,
  type,
}: Job) {
  const [bookedJobs, setBookedJobs] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem("bookedJobs") ?? "[]"),
  );

  const { t } = useTranslation();

  const { handleShowModal } = useModal();

  const isLoading = false;

  function handleBookmarkJob(e: React.MouseEvent<SVGSVGElement>, id?: number) {
    e.stopPropagation();
    if (id === undefined) return;

    setBookedJobs((prev) => [...prev, id]);
  }

  useEffect(() => {
    localStorage.setItem("bookedJobs", JSON.stringify(bookedJobs));
  }, [bookedJobs]);

  console.log(id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {isLoading ? (
        <div className="relative flex w-full max-w-2xl max-h-[85vh] flex-col overflow-hidden rounded-lg bg-white shadow-2xl">
          <h1>Loading</h1>
        </div>
      ) : (
        <div
          onClick={handleShowModal}
          className="relative flex w-full max-w-2xl max-h-[85vh] flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
        >
          <div className="flex items-start gap-4 border-b border-neutral-100 p-6 pr-14">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg font-semibold text-emerald-600">
              {shortCompanyName}
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold leading-tight text-black">
                {title}
              </h2>
              <p className="mt-1 text-sm text-[var(--text-light)]">
                {location}
              </p>

              <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-400">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {location}
              </div>
            </div>

            <button
              type="button"
              aria-label="Save job"
              className="mt-1 text-neutral-300 transition-colors hover:text-[var(--light-green)]"
            >
              <Bookmark onClick={(e) => handleBookmarkJob(e, id)} />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 px-6 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                {type}
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                {category}
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                {experience}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-neutral-700">
                {salary}
              </span>
              <span className="text-[11px] text-neutral-400">{postedAt}</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-black">
                Despre job
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-light)]">
                {description}
              </p>
            </section>

            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-black">Cerințe</h3>
              <ul className="space-y-1.5 text-xs text-[var(--text-light)]">
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                  Experiență relevanta ca {experience} {category}
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                  Experiență avansată cu {tags}
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                  Portofoliu solid de proiecte shipped
                </li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 text-sm font-semibold text-black">
                Beneficii
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-neutral-200 px-2.5 py-1.5 text-[11px] text-neutral-600">
                  Asigurare medicală privată
                </span>
                <span className="rounded-md border border-neutral-200 px-2.5 py-1.5 text-[11px] text-neutral-600">
                  Program flexibil
                </span>
                <span className="rounded-md border border-neutral-200 px-2.5 py-1.5 text-[11px] text-neutral-600">
                  Buget de învățare
                </span>
                <span className="rounded-md border border-neutral-200 px-2.5 py-1.5 text-[11px] text-neutral-600">
                  100% remote
                </span>
              </div>
            </section>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-neutral-100 px-6 py-4">
            <button
              type="button"
              className="rounded-md border border-neutral-200 px-5 py-2.5 text-xs font-medium text-neutral-600 transition-colors hover:border-neutral-300"
            >
              {t.jobs.applyForm.saveButton}
            </button>
            <button
              type="button"
              className="rounded-md bg-[var(--light-green)] px-7 py-2.5 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.25)] active:translate-y-0 active:opacity-70"
            >
              {t.jobs.applyForm.applyButton}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
