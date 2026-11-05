import { useState } from "react";

function useJobsFilter() {
  const [jobType, setJobType] = useState<string | undefined>();
  const [experieceLevel, setExperienceLevel] = useState<string | undefined>();
  const [location, setLocation] = useState<string | undefined>();
  const [categories, setCategories] = useState<string | undefined>();
  const [searchJob, setSearchJob] = useState<string | undefined>();

  function handleClearFilter() {
    setJobType("");
    setExperienceLevel("");
    setLocation("");
    setCategories("");
    setSearchJob("");
  }

  return {
    experieceLevel,
    jobType,
    location,
    categories,
    searchJob,
    setExperienceLevel,
    setJobType,
    setLocation,
    handleClearFilter,
    setCategories,
    setSearchJob,
  };
}

export default useJobsFilter;
