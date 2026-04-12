import { PostForm, Container } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { setPost, isLoading} from "../store/postSlice";
import { useEffect, useState } from "react";

function AddPost() {
  
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPost(null));
    dispatch(isLoading(false));
    setLoader(false);
  }, [dispatch])
  
  if(loader)        return <h1>Loading..</h1>

  return (
    <div className="">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
