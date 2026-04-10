import React from "react";
import { Link } from "react-router-dom";
import appwriteServices from "../appwrite/config";

function PostCard({ $id, featureimage, title }) {
  return (
    
    <Link to={`/post/${$id}`} className="group block h-full">
      <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl">
        <div className="overflow-hidden">
          <div className="mb-0 w-full">
            <img
              src={`${appwriteServices.getFilePreview(featureimage)}`}
              alt={title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="p-5">
          <span className="mb-3 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            Featured Post
          </span>

          <h1 className="line-clamp-2 text-xl font-bold leading-7 text-white transition duration-300 group-hover:text-blue-400">
            {title}
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
