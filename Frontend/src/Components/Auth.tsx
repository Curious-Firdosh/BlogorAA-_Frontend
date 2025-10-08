
import Labledinput from "./Labledinput"

import type {SignupInput} from "@firodoshkhan/zodinput";
import { useState } from "react";
import AuthHeader from "./AuthHeader";
import { User } from "../Api/User";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Auth = ({type} : {type : "signup" | "login"}) => {

    const navigate = useNavigate()

    const [postInputs , setPostinput] = useState<SignupInput>({
        username : "",
        email : "",
        password : ""
    });


    const submitHandler = async() => {
        const result = await User({
            type,
            data : postInputs,
        });
    
        if(result){
             // ✅ navigate AFTER successful API call
            toast.success(`${type === "signup" ? "Account created" : "Login successful"}!`);
            navigate("/allblogs");
        }else{
            toast.error("Email or Password Not Matched")
        }
    };


  
    return (
    
        <div className="flex flex-col gap-3 pb-10 justify-center items-center w-full min-h-screen ">

                {/* Title */}
                <AuthHeader type={type}/>


                <div className="lg:w-2/4 md:w-2/4 ">
                        {
                            type === "signup" 
                            ? (
                                <Labledinput
                                    placeholder={"Enter Your Username"}
                                    label={"Username"}
                                    onChange={(e) => 
                                        setPostinput((info) => ({
                                            ...info,
                                            username : e.target.value
                                        }))
                                    }   
                                />
                            ):(null)
                        }

                        <Labledinput
                            placeholder={"Enter Your Email"}
                            label={"Email"}
                            onChange={(e) => 
                                setPostinput((info) => ({
                                    ...info,
                                    email : e.target.value
                                }))
                            }   
                        />

                        <Labledinput
                            placeholder={"Create Password"}
                            label={"Password"}
                            onChange={(e) => 
                                setPostinput((info) => ({
                                    ...info,
                                    password : e.target.value
                                }))
                            }   
                        />
                </div>


                
                <button 
                    type="button"
                    className="text-white bg-gray-800 lg:w-2/4  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={submitHandler}
                >
                    {type === "signup" ? "Create Account" : "Login"}
                </button>
          
 

            </div>


  )
}

export default Auth
