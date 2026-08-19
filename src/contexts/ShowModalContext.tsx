import { createContext, useState, type ReactNode } from "react";

interface Modal {
  showJob: boolean;
  jobId: string | undefined;
}

interface ModalContextType extends Modal {
  handleShowModal: () => void;
  handleJobNavigation: (id: string | undefined) => string | undefined;
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
  const [jobId, setJobId] = useState<string | undefined>(undefined);

  function handleShowModal(): void {
    setShowJob((prev) => !prev);
    console.log(false);
  }

  function handleJobNavigation(id: string | undefined): string | undefined {
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
