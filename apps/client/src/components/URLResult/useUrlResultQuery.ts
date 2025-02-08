import { axiosInstance } from "@/helpers/Axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useUrlResultQuery = (shortKey?: string) => {
  return useQuery({
    queryKey: ["url", shortKey],
    staleTime: 1000 * 60 * 5,
    queryFn: () => axiosInstance.get(`/uri/full-url`, { params: { shortKey } }),
    enabled: !!shortKey,
  });
};
