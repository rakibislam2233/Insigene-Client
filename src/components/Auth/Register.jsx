
import { useForm } from "react-hook-form";
import { useContext} from "react";
import { Toaster, toast } from "react-hot-toast";
import { UserContext } from "../AuthProvider/AuthProvider";
import {updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const { createNewUser} = useContext(UserContext);
  const naviget = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {name, email, password } = data;
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user,{
            displayName:name
        }).then(() => {
         
          })
        naviget('/')
        reset()
      })
      .catch((err) => {
        (err.message);
        toast.error(err.message);
      });
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center  p-5">
        <div className="w-full max-w-[500px] p-6 rounded-2xl sm:p-10 bg-gray-100 text-gray-900">
          <h2 className="text-2xl font-bold text-center py-2">
      Admin Register
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                 Full Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.name && (
                  <span className="text-rose-500">Please enter your name</span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <span className="text-rose-500">Please enter your email</span>
                )}
              </div>
              <div className="relative">
                <label htmlFor="password" className="block mb-2 text-sm">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  {...register("password", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.password && (
                  <span className="text-rose-500">
                    Please enter your password
                  </span>
                )}
              </div>
            </div>
            <div className="py-3">
              <button
                type="submit"
                className="bg-color w-full rounded-md py-3 text-white"
              >
               Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Register;
