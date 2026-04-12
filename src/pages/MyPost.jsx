import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, PostCard } from "../components";

export default function MyPost() {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const { userData } = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const myPosts = posts.filter((post) => post.userId === userData.$id);

  useEffect(() => {
    if (loading) {
      navigate("/");
      return;
    }
  }, [loading, navigate]);

  if (loading) return <h1>Loading..</h1>;
  if (error) return <h1>{error}</h1>;

  return (
  <section className="w-full py-10 sm:py-12 lg:py-14">
    <Container>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          My Posts
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
          Manage and revisit all the posts you’ve created. Edit, update, or
          explore your content anytime.
        </p>
      </div>

      {myPosts.length === 0 ? (
        // ✅ Empty State UI (VERY IMPORTANT for UX)
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-xl font-semibold text-white">
            No posts yet 📭
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Start creating your first post and share your ideas with the world.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {myPosts.map((post) => (
            <div key={post.$id} className="h-full">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      )}
    </Container>
  </section>
);
}
