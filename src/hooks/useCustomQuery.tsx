import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";

type JobFilters = {
  jobType?: string;
  experieceLevel?: string;
  location?: string;
  categories?: string;
};

type UseCustomQueryProps = {
  queryKey: string;
  jobId?: string | undefined;
  page?: number;
  pageSize?: number;
  filters?: JobFilters;
};

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  salary: string;
  postedAt: string;
  description: string;
  tags: string[];
  shortCompanyName: string;
  experience: string;
}

type UseCustomQueryReturns = {
  data: Job[] | null;
  error: Error | null;
  isLoading: boolean;
  totalPages: number;
};

export default function useCustomQuery({
  queryKey,
  jobId,
  page = 1,
  pageSize = 5,
  filters,
}: UseCustomQueryProps): UseCustomQueryReturns {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKey, jobId, page, pageSize, filters],

    queryFn: async () => {
      if (jobId) {
        const { data, error } = await supabase
          .from("Jobs")
          .select("*")
          .eq("id", jobId)
          .single();

        if (error) throw error;

        return data;
      }

      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      let query = supabase.from("Jobs").select("*", { count: "exact" });

      if (filters?.jobType) {
        query = query.eq("type", filters.jobType);
      }

      if (filters?.experieceLevel) {
        query = query.eq("experience", filters.experieceLevel);
      }

      if (filters?.location) {
        query = query.eq("location", filters.location);
      }

      if (filters?.categories) {
        query = query.eq("category", filters.categories);
      }

      const { data, error, count } = await query.range(from, to);

      if (error) {
        throw error;
      }

      return { data, count };
    },
  });

  return {
    data: data?.data ?? null,
    error,
    isLoading,
    totalPages: Math.ceil((data?.count ?? 0) / pageSize),
  };
}
