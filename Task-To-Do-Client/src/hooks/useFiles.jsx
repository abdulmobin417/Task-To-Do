import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFiles = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: taskFile = [] } = useQuery({
    queryKey: ["files"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/files`);
      return res.data;
    },
  });

  return { taskFile, refetch };
};

export default useFiles;