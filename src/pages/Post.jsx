import { useEffect, useState } from "react";
import { Button, Container, PostCard } from "../components/index";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteServices from "../appwrite/config";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

function Post() {
  const slug = useParams();
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteServices.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, []);

  const deletePost = () => {
    appwriteServices.deletePost(slug).then((status) => {
      if (status) {
        appwriteServices.deleteFile(post.featureimage);
        navigate("/");
      }
    });
  };

  return post ? (
    <section className="py-10 sm:py-12 lg:py-14">
      <Container>
        <article className="mx-auto max-w-5xl">
          {/* Featured Image */}
          <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
            <img
              src={appwriteServices.getFileView(post.featureimage)}
              alt={post.title}
              className="max-h-[500px] w-full rounded-2xl object-cover"
            />

            {isAuthor && (
              <div className="absolute right-5 top-5 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur-md">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-green-500"
                    className="px-5 py-2 text-white"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-500"
                  onClick={deletePost}
                  className="px-5 py-2 text-white"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          {/* Title */}
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              Blog Article
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>

          {/* Content */}
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-xl backdrop-blur-sm sm:px-8 lg:px-10">
            <div className="browser-css prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-li:text-slate-300">
              {parse(post.content)}
            </div>
          </div>
        </article>
      </Container>
    </section>
  ) : null;
}

export default Post;
