import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useNormalUser = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isNormalUser, isLoading: isUserLoading } = useQuery({
        queryKey: ["instructor", 'admin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/normalUser/${user?.email}`);
            console.log("is normalUser response", res);
            return res.data.normalUser;
        },
    });
    return [isNormalUser, isUserLoading];
};
export default useNormalUser;