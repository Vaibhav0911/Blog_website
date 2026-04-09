import { useCallback, useEffect } from "react";
import { Button, Select, RTE, Input } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteServices  from "../../appwrite/config.js";

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
    } 
    else {
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
    if(value && typeof value === "string"){
        return value
               .trim()
               .toLowerCase()
               .replace(/[^a-zA-Z\d]+/g, "-") 
    }
    return "";     
  }, [])

  useEffect(() => {
    const subscription = watch((value, {name}) => {
        if(name === "title"){
            setValue("slug", slugTransform(value.title), {shouldValidate: true});
        }
    });

    return () => subscription.unsubscribe();
  }, [slugTransform, watch, setValue]);



  return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteServices.getFilePreview(post.featureimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  );
}
