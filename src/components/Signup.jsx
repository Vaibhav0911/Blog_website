import { useState } from "react";
import { useDispatch } from "react-redux";
import authServices from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { Logo, Button, Input } from "./index";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    setErr("");
    try {
      const userData = await authServices.createAccount(data);
      if (userData) {
        const userData = await authServices.getCurrentUser();
        if (userData)
          dispatch(
            authLogin({
              userData: {
                $id: userData.$id,
                name: userData.name,
                email: userData.email,
              },
            }),
          );
        navigate("/");
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 py-12">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto w-full max-w-lg rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        {/* Logo */}
        <div className="mb-5 flex justify-center">
          <span className="inline-block w-full max-w-[100px] transition duration-300 hover:scale-105">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Create Your Account
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Join the platform to publish, explore, and enjoy insightful blogs,
            tutorials, and stories from passionate creators.
          </p>
        </div>

        {/* Login Link */}
        <p className="mt-5 text-center text-sm text-slate-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-400 transition duration-300 hover:text-blue-300 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {/* Error */}
        {err && (
          <p className="mt-6 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
            {err}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(signup)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("fullname", {
                required: true,
              })}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a strong password"
              {...register("password", {
                required: true,
              })}
            />

            <Button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
