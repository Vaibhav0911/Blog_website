import { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import appwriteServices from "../appwrite/config";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteServices.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length == 0) return null;

  return (
    <section className="w-full py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Explore All Posts
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Discover insightful articles, practical tutorials, and fresh ideas
            from across the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <div key={post.$id} className="h-full">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AllPost;
