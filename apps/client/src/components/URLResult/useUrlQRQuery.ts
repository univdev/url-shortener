import { axiosInstance } from "@/helpers/Axios/axios";
import { useQuery } from "@tanstack/react-query";

export const useUrlQRQuery = (shortKey?: string) => {
  return useQuery({
    queryKey: ["url", "qr", shortKey],
    staleTime: 1000 * 60 * 5,
    queryFn: () => axiosInstance.get(`/uri/qr`, { params: { shortKey } }),
    enabled: !!shortKey,
  });
};
