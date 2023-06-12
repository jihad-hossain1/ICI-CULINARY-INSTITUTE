import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { saveUser } from "../../api/auth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const { setLoading, createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();
  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  const password = watch("password");
  useEffect(() => {
    trigger("cpassword");
  }, [password, trigger]);

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
          };
          fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                saveUser(result.user);
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your Account has been created",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          // console.log("user profile info updated");

          navigate(from, { replace: true });
        })
        .catch((errors) => {
          console.log(errors.message);
          setError(errors.message);
        });
    });
  };

  const handleGoogle = () => {
    console.log("clck");
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(`${error}`);
      });
  };
  return (
    <>
      <Container>
        <h2 className="text-4xl font-extralight text-center text-gray-600 py-4">
          {" "}
          Register Here
        </h2>

        <div className="w-3/4 lg:max-w-xl mx-auto mt-10">
          {error && <span>{error}</span>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
              />
              {errors.name && <span>Name is required</span>}
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                User Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
              />
              {errors.email && <span>Email is required</span>}
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                name="password"
                type={toggle1 ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 18,
                  pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])/,
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
                placeholder=" "
              />
              <button
                onClick={() => {
                  setToggle1(!toggle1);
                }}
                className="border px-2 py-1"
              >
                Show password
              </button>
              {errors.password?.type === "required" && (
                <span>Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 text-sm">
                  password must be 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600 text-sm">
                  password must be have one upper case one lower case one number
                  one special characters
                </p>
              )}
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                name="cpassword"
                type={toggle2 ? "text" : "password"}
                {...register("cpassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
              />
              <button
                onClick={() => {
                  setToggle2(!toggle2);
                }}
                className="border px-2 py-1"
              >
                Show password
              </button>
              {errors.cpassword?.message.type === "required" && (
                <span>Confirm your password</span>
              )}

              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm Password
              </label>
            </div>
            <div className="mb-6">
              <label
                for="User Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Photo Url
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.photoURL && <span>Please confirm your Photo Url</span>}
            </div>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                type="submit"
                className="block py-2.5 px-0 w-full text-md hover:text-lg hover:font-semibold text-gray-900 bg-transparent border-0 hover:border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer cursor-pointer"
                placeholder=" "
                value="Register"
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-green-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
