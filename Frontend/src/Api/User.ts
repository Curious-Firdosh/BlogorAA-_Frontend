import {type LoginInput, type SignupInput } from "@firodoshkhan/zodinput"
import { BACKEND_URL } from "../config"
import axios from "axios";

import toast from "react-hot-toast";


type userAction  = 
 | {type : "login" ;  data: LoginInput}
 | {type : "signup" ;  data: SignupInput};



export const User = async ({type , data} : userAction) => {

    try{

        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "createaccount" : "login"}` , data , {withCredentials :true});
        const userdetails = response.data;
        console.log(response.data); 
        
        if (response.status !== 200) {
            toast.error(userdetails.message || "User Not Found");
            return null;
        };


        if (userdetails.token) {
            localStorage.setItem("token", JSON.stringify(userdetails));
            toast.success("Login successful");
            return userdetails; // return for navigation
        }
            
    }
    catch(e){
        console.log(`Error While ${type} PLzz Try Again ` , e);
        toast.error(`${type} Error `)
    }
}