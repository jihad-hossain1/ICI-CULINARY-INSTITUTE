import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error}`);
      });
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        saveUser(result.user);
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error}`);
      });
  };
  return (
    <>
      <Container>
        <h2 className="text-4xl font-extralight text-center text-gray-600 py-4">
          {" "}
          LogIn Here
        </h2>
        <div className="w-3/4 lg:max-w-xl mx-auto mt-10">
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                name="password"
                type="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group ">
              <input
                type="submit"
                className="block py-2.5 px-0 w-full text-md hover:text-lg hover:font-semibold text-gray-900 bg-transparent border hover:border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer cursor-pointer"
                placeholder=" "
                value="LogIn"
              />
            </div>
          </form>
          <div
            onClick={handleGoogle}
            className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
          >
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            You have no account?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-green-500 text-gray-600"
            >
              Register
            </Link>
            .
          </p>
        </div>
      </Container>
    </>
  );
};

export default Login;
