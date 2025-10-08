import { Link } from "react-router-dom"


const AuthHeader = ({type} : {type : "signup" | "login"}) => {
  return (
     <div className="text-center mb-6">  
                    
                    <h1 className="font-extrabold text-3xl lg:text-4xl lg:leading-10">
                        {type === "signup" ? "Create An Account " : "Welcome To BlogorAA"}
                    </h1>
                    
                    <p className="text-sm font-semibold  sm:text-base mt-2 ">
                        
                        { type === "signup" ? "Already have an account" : "Dont Have Any Account ?? "}
                    
                        <Link to = {type === "signup" ? "/login" : "/signup" } className="text-blue-600 hover:underline ml-2 ">
                            {type === "signup" ? "Login" : "Create Account"}
                        </Link>
                    </p>

                </div>
  )
}

export default AuthHeader
