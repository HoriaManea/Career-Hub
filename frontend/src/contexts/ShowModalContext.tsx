import { createContext, useState, type ReactNode } from "react";

interface Modal {
  showJob: boolean;
  jobId: number | undefined;
}

interface ModalContextType extends Modal {
  handleShowModal: () => void;
  handleJobNavigation: (id: number | undefined) => number | undefined;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

export function ShowModalProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [showJob, setShowJob] = useState<boolean>(false);
  const [jobId, setJobId] = useState<number | undefined>(undefined);

  function handleShowModal(): void {
    setShowJob((prev) => !prev);
  }

  function handleJobNavigation(id: number | undefined): number | undefined {
    setJobId(id);
    return id;
  }

  return (
    <ModalContext.Provider
      value={{
        showJob,
        jobId,
        handleShowModal,
        handleJobNavigation,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
