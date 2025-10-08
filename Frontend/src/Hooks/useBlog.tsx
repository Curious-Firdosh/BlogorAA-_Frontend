import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface BlogData {

    title: string,
    content: string,
    id :number,
        Author: {
            username: string,
           
        }
}
export const useBlog = ({id }: {id : string}) => {
  
    const [blog , setBlog] = useState<BlogData | null>(null);
    const [loading , setLoading] = useState(true)

    useEffect(() => {

        if (!id) return;
        const singleBlog = async () => {
            try {

                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/single/${id}` , {withCredentials :true})
                if(response){
                    setBlog(response.data.data)
                    setLoading(false);
                    toast.success("Blog Fetched SuccessFully")
                }
            }   
            catch(e) {
                console.log("Errro While Featchig THe Single Post" ,e);
                toast.error("Unable ToFeatch Post");
                setLoading(false)
            }
        }

        singleBlog()
    },[id])

   return {blog , loading}
}


