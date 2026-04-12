import React from "react";
import { Link } from "react-router-dom";
import appwriteServices from "../appwrite/config";

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.$id}`} className="group block h-full">
      <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl">
        {/* 🔥 Image */}
        <div className="overflow-hidden">
          <img
            src={`${appwriteServices.getFileView(post.featureimage)}`}
            alt={post.title}
            className={`h-56 w-full object-cover transition duration-500 group-hover:scale-105 ${
              post.status !== "active" ? "opacity-60" : ""
            }`}
          />
        </div>

        {/* 🔥 Content */}
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            {/* Featured */}
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
              Featured Post
            </span>

            {/* Status Badge */}
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold border backdrop-blur-md
      ${
        post.status === "active"
          ? "bg-green-500/20 text-green-500 border-green-400/20"
          : "bg-red-500/20 text-red-500 border-red-400/20"
      }`}
            >
              {post.status === "active" ? "Active" : "Inactive"}
            </span>
          </div>

          <h1
            className={`line-clamp-2 text-xl font-bold leading-7 transition duration-300 group-hover:text-blue-400 ${
              post.status === "active" ? "text-white" : "text-slate-400"
            }`}
          >
            {post.title}
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Read this post to explore more insights, ideas, and useful
            knowledge.
          </p>

          <div className="mt-5 flex items-center text-sm font-medium text-blue-400">
            Read More
            <span className="ml-2 transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;
