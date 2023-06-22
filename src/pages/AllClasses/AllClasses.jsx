import { useQuery } from "@tanstack/react-query";
import ClassCard from "./ClassCard";

const AllClasses = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/approvedClasses`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.json();
    },
  });

  return (
    <div>
      <div className="hero h-[400px] bg-[url('https://i.ibb.co/tqpd8TX/cover-instructor.png')]">
        <div className=" bg-black bg-opacity-50"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold bg-black bg-opacity-40 rounded-md px-4 py-2 text-neutral-50 shadow-lg">
              All Classes
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h4>Total Classes: {classes.length}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 py-16">
          {classes.map((item) => (
            <ClassCard key={item._id} item={item}></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
