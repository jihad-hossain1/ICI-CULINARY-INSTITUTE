import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useEnrollClass = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: payment = [] } = useQuery({
    queryKey: ["payment", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/payments/enroll?email=${user?.email}`);
      console.log("res from axios", res);

      return res.data;
    },
  });

  return [payment, refetch];
};

export default useEnrollClass;
