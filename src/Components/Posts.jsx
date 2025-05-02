import { useLoaderData} from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts=useLoaderData()
    
    return (
        <div>
           <div className="grid grid-cols-5 gap-4">
           {
            posts.map(post=><Post key={post.id} post={post}></Post>)
           }
           </div>
        </div>
    );
};

export default Posts;