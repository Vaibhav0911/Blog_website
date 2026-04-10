import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import authServices from "../appwrite/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Logo, Button } from "./index.js";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const login = async (data) => {
    setErr("");
    try {
      const session = await authServices.login(data);
      if (session) {
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
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-24 transition duration-300 hover:scale-105">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Welcome Back 👋
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Sign in to continue exploring insightful blogs, practical tutorials,
            and fresh ideas curated for passionate learners.
          </p>
        </div>

        {/* Signup Link */}
        <p className="mb-6 text-center text-sm text-slate-300">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-400 transition duration-300 hover:text-blue-300 hover:underline"
          >
            Create Account
          </Link>
        </p>

        {/* Error */}
        {err && (
          <p className="mb-5 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
            {err}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(login)}>
          <div className="space-y-5">
            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
            />

            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />

            <Button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
