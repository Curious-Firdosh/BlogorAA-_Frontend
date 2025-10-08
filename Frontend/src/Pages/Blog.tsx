import { useParams } from "react-router-dom";
import { useBlog } from "../Hooks/useBlog"

import Appbar from "../Components/Appbar";
import { Spinner } from "../Components/Spinner";


interface Blog {
   title : string ,
   content :string ,
   publishedDate : string
   Author : {
     username :string
   }
}




const Blog = () => {


const {id} = useParams<{id:string}>()

  
const {blog , loading}= useBlog({id : id ?? ""});

  if(loading) return <div ><Spinner/></div>
  
  if(!blog) 
    return (
        <div className="flex justify-center min-h-screen items-center">
          <h1 className="text-5xl font-semibold text-slate-700">
              Blog Not Found
          </h1>
        </div>
   );


  return (
    <div>
        <Appbar/>
        <div className="p-4 max-w-3xl mx-auto">
  <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
  <p className="text-gray-700 mb-4">{blog.content}</p>
  <span className="text-sm text-gray-500">
    Author: {blog.Author.username}
  </span>
</div>
    </div>
  )
}

export default Blog
