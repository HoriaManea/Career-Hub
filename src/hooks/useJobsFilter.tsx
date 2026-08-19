import { useState } from "react";

function useJobsFilter() {
  const [jobType, setJobType] = useState<string | undefined>();
  const [experieceLevel, setExperienceLevel] = useState<string | undefined>();
  const [location, setLocation] = useState<string | undefined>();
  const [categories, setCategories] = useState<string | undefined>();

  const [sortBy, setSortBy] = useState();

  function handleClearFilter() {
    setJobType("");
    setExperienceLevel("");
    setLocation("");
    setCategories("");
  }

  return {
    experieceLevel,
    jobType,
    location,
    categories,
    setExperienceLevel,
    setJobType,
    setLocation,
    handleClearFilter,
    setCategories,
  };
}

export default useJobsFilter;
