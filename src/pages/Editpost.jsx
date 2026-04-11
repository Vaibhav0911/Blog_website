import { useNavigate, useParams } from "react-router-dom";
import { PostForm, Container } from "../components/index";
import { useEffect, useState } from "react";
import appwriteServices from "../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../store/postSlice";

function Editpost() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();
  const { posts, selectedPost } = useSelector((state) => state.posts);

  useEffect(() => {
    const existingPost = posts.find((p) => p.$id === slug);

    if (!slug || !existingPost || slug !== existingPost.$id) {
      navigate("/");
      console.log("hello");
      return;
    }

    dispatch(setPost(existingPost));
    
  }, [navigate, slug, selectedPost, dispatch, posts]);

  return selectedPost ? (
    <div className="">
      <Container>
        <PostForm />
      </Container>
    </div>
  ) : null;
}

export default Editpost;
