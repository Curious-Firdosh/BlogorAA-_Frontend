import axios from "axios"
import { BACKEND_URL } from "../config"
import toast from "react-hot-toast"
import type { CreateBlogInput } from "@firodoshkhan/zodinput";




export const savePost = async(formdata:CreateBlogInput) =>{

       try {

             const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog/createblog` ,
                 formdata ,
                 {withCredentials :true}
            );
            if(response) {
                toast.success("Blog Created SuccessFully");
                console.log(response.data);
                return response.data.createdPost
            }
       }
       catch(e) {
          console.log("Error While Creating Post" , e);
          toast.error("Post Could'nt Created ")
          
       }
        
    }