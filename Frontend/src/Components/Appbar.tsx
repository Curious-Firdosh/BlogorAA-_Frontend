import { PiDotsThreeBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const Appbar = () => {


    const Location = useLocation();

    const isPathName = location.pathname === "/createblog"

    return (
        <>
            <div className="border-b-2 border-slate-400 flex justify-between pt-5">
                
                <div>
                   <Link to={'/allblogs'}>
                         <h1 
                            className="text-3xl font-extrabold text-gray-800 ">DEV_Blogs
                        </h1>
                   </Link>
                </div>

                <div className="flex justify-center items-center gap-x-10 p-3 mr-3">

                   <Link to={'/createblog'}>
                         <button className="bg-green-600 p-2 rounded-lg ">
                            {isPathName ? "Publish" : "New"}
                         </button>
                  </Link>
                    <PiDotsThreeBold />
                    <img 
                        className="w-10"
                        src="https://api.dicebear.com/9.x/lorelei/svg"
                    />


                </div>



            </div>
        </>
    )
};


export default Appbar;