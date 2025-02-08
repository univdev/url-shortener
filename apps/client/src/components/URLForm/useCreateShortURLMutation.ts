import { axiosInstance } from "@/helpers/Axios/axios";
import { useMutation } from "@tanstack/react-query";

export const useCreateShortURLMutation = () => {
  return useMutation({
    mutationFn: (url: string) => axiosInstance.post("/uri", { url }),
  });
};
