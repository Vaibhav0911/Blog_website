import {useState, useEffect} from 'react'
import {Container, PostCard} from "../components/index"
import appwriteServices from "../appwrite/config"

function AllPost() {
  
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    appwriteServices.getPosts([]).then((posts) => {
       if(posts){
        setPosts(posts);
       }
    })
  }, [])

  if(posts.length == 0)         return null;

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
            {posts.map((post) => {
               <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
               </div>
            })}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
