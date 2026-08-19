import { useModal } from "../../hooks/useModal";
import { useTranslation } from "../../i18n";
import useCustomQuery from "../../hooks/useCustomQuery";

export default function JobsModal() {
  const { t } = useTranslation();

  const { handleShowModal, jobId } = useModal();

  const { data, isLoading } = useCustomQuery({
    queryKey: "jobs",
    jobId,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {isLoading ? (
        <div className="relative flex w-full max-w-2xl max-h-[85vh] flex-col overflow-hidden rounded-lg bg-white shadow-2xl">
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="relative flex w-full max-w-2xl max-h-[85vh] flex-col overflow-hidden rounded-lg bg-white shadow-2xl">
          <button
            onClick={handleShowModal}
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
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
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-start gap-4 border-b border-neutral-100 p-6 pr-14">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-lg font-semibold text-emerald-600">
              {data?.shortCompanyName}
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold leading-tight text-black">
                {data?.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--text-light)]">
                {data?.location}
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
                {data?.location}
              </div>
            </div>

            <button
              type="button"
              aria-label="Save job"
              className="mt-1 text-neutral-300 transition-colors hover:text-[var(--light-green)]"
            >
              <svg
                width="18"
                height="18"
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

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 px-6 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                {data?.type}
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                {data?.category}
              </span>
              <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
                {data?.experience}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-neutral-700">
                {data?.salary}
              </span>
              <span className="text-[11px] text-neutral-400">
                {data?.postedAt}
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-5">
            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-black">
                Despre job
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-light)]">
                {data?.description}
              </p>
            </section>

            <section className="mb-6">
              <h3 className="mb-2 text-sm font-semibold text-black">Cerințe</h3>
              <ul className="space-y-1.5 text-xs text-[var(--text-light)]">
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                  Experiență relevanta ca {data?.experience} {data?.category}
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                  Experiență avansată cu {data?.tags[0]}
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
