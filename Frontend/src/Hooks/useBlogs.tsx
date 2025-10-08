import axios from "axios";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";



export interface blogData {
     title: string,
    content: string,
      id :number,
        Author: {
            username: string,
           
        }
}



export const useBlogs = () => {

    const [blogs , setBlogs] = useState<blogData[]>([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        
        const fetchBlogs = async () => {
            setLoading(true)
            try {
                    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/allblogs` ,
                        {withCredentials : true}
                    );
                    const data = response.data.allblogs
                    setBlogs(data)
                    toast.success("Feed Refreshed")
                    setLoading(false)
                    console.log(data);
                    
                }   
            catch(e){
                console.log(`Error While Featching all Posts PLzz Try Again ` , e);
                toast.error(`Blogs CanNot Featched `);
                setLoading(false)
            }
        };
        
        fetchBlogs()
    },[]);


    return {blogs ,loading}
}