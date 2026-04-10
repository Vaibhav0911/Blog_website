import { useCallback, useEffect } from "react";
import { Button, Select, RTE, Input } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteServices from "../../appwrite/config.js";

export default function PostForm({ post }) {
  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.title || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    const file = data.image[0]
      ? await appwriteServices.uploadFile(data.image[0])
      : null;

    if (post) {
      if (file) {
        await appwriteServices.deleteFile(post.featureimage);
      }

      const dbpost = await appwriteServices.updatePost(post.$id, {
        ...data,
        featureimage: file ? file.$id : undefined,
      });

      if (dbpost) navigate(`/post/${dbpost.$id}`);
    } else {
      if (file) {
        data.featureimage = file.$id;
        const dbpost = await appwriteServices.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbpost) navigate(`/post/${dbpost.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d]+/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [slugTransform, watch, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="grid grid-cols-1 gap-8 lg:grid-cols-12"
    >
      {/* Left Section */}
      <div className="lg:col-span-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {post ? "Edit Your Post" : "Create a New Post"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Craft engaging content, organize your ideas clearly, and publish a
              professional blog post with ease.
            </p>
          </div>

          <div className="space-y-5">
            <Input
              label="Title"
              placeholder="Enter your post title"
              className="mb-4"
              {...register("title", { required: true })}
            />

            <Input
              label="Slug"
              placeholder="Enter post slug"
              className="mb-4"
              {...register("slug", { required: true })}
              onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), {
                  shouldValidate: true,
                });
              }}
            />

            <RTE
              label="Content"
              name="content"
              control={control}
              defaultValue={getValues("content")}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:col-span-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-8">
          <h3 className="mb-5 text-xl font-semibold text-white">
            Post Settings
          </h3>

          <div className="space-y-5">
            <Input
              label="Featured Image"
              type="file"
              className="mb-4"
              accept="image/png, image/jpg, image/jpeg, image/gif"
              {...register("image", { required: !post })}
            />

            {post && (
              <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-2">
                <img
                  src={appwriteServices.getFilePreview(post.featureimage)}
                  alt={post.title}
                  className="h-56 w-full rounded-xl object-cover"
                />
              </div>
            )}

            <Select
              options={["active", "inactive"]}
              label="Status"
              className="mb-4"
              {...register("status", { required: true })}
            />

            <Button
              type="submit"
              bgColor={post ? "bg-green-500" : undefined}
              className={`w-full rounded-xl py-3 text-white font-semibold shadow-lg transition duration-300 hover:-translate-y-0.5 ${
                post
                  ? "hover:bg-green-600"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-900/30"
              }`}
            >
              {post ? "Update Post" : "Publish Post"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
