import { useNavigate, useParams } from "react-router-dom";
import { PostForm, Container } from "../components/index";
import { useEffect, useState } from "react";
import appwriteServices from "../appwrite/config";

function Editpost() {
  const slug = useParams();
  const [post, setPost] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteServices.getPost(slug).then((post) => {
        if (post) setPost(post);
      });
    } else {
      navigate("/")
    }
  }, []);

  return post ? (
    <div className="">
        <Container>
            <PostForm  post={post} />
        </Container>
    </div>
  ) : null
}

export default Editpost;
