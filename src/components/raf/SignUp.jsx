import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { saveUser } from "../../api/auth";

const SignUp = () => {
  const [confirm, setConfirm] = useState("");
  const { setLoading, createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const image = form.image.files[0];

    if (password !== confirm) {
      return setConfirm("password not match");
    }
    // TODO: Validation--- password must six character with special character
    const formData = new FormData();
    formData.append("image", image);

    const photoUploaderUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB
    }`;
    fetch(photoUploaderUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url);
        const photoUrl = data.data.display_url;
        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, photoUrl)
              .then(() => {
                toast.success("Successfully Account Created");
                saveUser(result.user);
                navigate(from, { replace: true });
              })
              .catch((error) => {
                setLoading(false);
                console.log(error.message);
                toast.error(`${error}`);
              });
          })
          .catch((error) => {
            setLoading(false);
            console.log(error.message);
            toast.error(`${error}`);
          });
      });
  };
  return (
    <div>
      <Container>
        <h2 className="text-4xl font-extralight text-center text-gray-600 py-4">
          {" "}
          Register Here
        </h2>
        <div className="w-3/4 lg:max-w-xl mx-auto mt-10">
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                type="text"
                name="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                User Name
              </label>
            </div>
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
                name="confirm"
                type="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer "
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm Password
              </label>
              {confirm && <p className="text-sm">password not match</p>}
            </div>
            <div className="relative z-0 w-full mb-6 group ">
              <input
                name="image"
                type="file"
                className="block mb-2 text-sm "
                accept="image/*"
                required
              />
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
    </div>
  );
};

export default SignUp;
