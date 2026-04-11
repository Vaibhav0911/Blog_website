import { PostForm, Container } from "../components/index";
import { useDispatch } from "react-redux";
import { setPost} from "../store/postSlice";

function AddPost() {
  
  const dispatch = useDispatch();
  dispatch(setPost(null));

  return (
    <div className="">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
