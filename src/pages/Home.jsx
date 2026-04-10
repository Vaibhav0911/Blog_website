import { useState, useEffect } from "react";
import appwriteServices from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteServices.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // if (posts.length === 0) {
   return (
  <section className="relative w-full min-h-[85vh] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 sm:py-20 lg:py-24">
    {/* Background glow */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"></div>
    </div>

    <Container>
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md">
            Explore modern blogs, tutorials, and developer insights
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {status
              ? "Welcome Back to Your Learning Hub 🚀"
              : "Discover Insights, Tutorials & Inspiring Stories"}
          </h1>

          {/* Sub Heading */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
            {status
              ? "Explore the latest blogs, expert tutorials, and trending articles crafted to enhance your knowledge, sharpen your skills, and keep you inspired."
              : "Join a growing blogging platform designed for curious learners, passionate readers, and developers who love meaningful content and practical knowledge."}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
              Explore Blogs
            </button>

            {!status && (
              <button className="rounded-xl border border-slate-500/60 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-slate-900">
                Login Now
              </button>
            )}
          </div>
        </div>

        {/* Stats / Features */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <h2 className="text-3xl font-bold text-blue-400">500+</h2>
            <p className="mt-3 text-sm font-medium tracking-wide text-slate-300 sm:text-base">
              Articles Published
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <h2 className="text-3xl font-bold text-blue-400">10K+</h2>
            <p className="mt-3 text-sm font-medium tracking-wide text-slate-300 sm:text-base">
              Active Readers
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10">
            <h2 className="text-3xl font-bold text-blue-400">100+</h2>
            <p className="mt-3 text-sm font-medium tracking-wide text-slate-300 sm:text-base">
              Expert Tutorials
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

}

export default Home;
