import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isAdminLoading } = useQuery({
        queryKey: ["instructor", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log("is instructor response", res);
            return res.data.instructor;
        },
    });
    return [isInstructor, isAdminLoading];
};
export default useInstructor;
;