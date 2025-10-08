import { useState } from "react"
import Appbar from "../Components/Appbar"
import { savePost } from "../Api/createPost"
import { useNavigate } from "react-router-dom"





const CreateBlog = () => {

    const navigate = useNavigate()

    const [form , setForm] = useState({
        title : "" ,
        content : "",
   
    
    })


  const changeHandler = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  )   =>  {

    const {name , value} = e.target;
    setForm((prev) => ({
        ...prev,
        [name] :value

    }))
  };


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    console.log(form);

    const response = await savePost(form);

    if(response){
        navigate(`/blog/${response.id}`)
    }

    setForm({
        title :"",
        content :"",

    });
  }



  return (
    <div>
        <Appbar/>
        
        <div>
 
                    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-gray-100 flex items-center justify-center p-6">
                        <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8">
                            
                            {/* Heading */}
                            <div className="mb-6 text-center">
                            <h1 className="text-3xl font-bold text-gray-800">Write a Blog Post</h1>
                            <p className="text-gray-500 mt-1">Craft your thoughts and share with the world</p>
                            </div>

                            {/* Form Area */}
                            <form 
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                            
                                    {/* Title Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Blog Title
                                        </label>
                                        <input
                                        type="text"
                                        value={form.title}
                                        name={"title"}
                                        required
                                        onChange={changeHandler}
                                        placeholder="Enter your blog title..."
                                        className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-3 outline-none text-gray-800 transition"
                                        />
                                    </div>

                                {/* Content Textarea */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Blog Content
                                    </label>
                                    <textarea
                                    value={form.content}
                                    name={"content"}
                                    placeholder="Write your blog content here..."
                                    rows={8}
                                    required
                                    onChange={changeHandler}
                                    className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-lg p-3 outline-none text-gray-800 resize-none transition"
                                    />
                                </div>

                                {/* Buttons */}
                                    <div className="flex justify-end space-x-4 pt-4">
                                        <button
                                        type="button"
                                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-[1.03]"
                                        >
                                        Update
                                        </button>
                                        <button
                                        type="button"
                                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-[1.03]"
                                        >
                                        Delete
                                        </button>

                                         <button       
                                            type="submit"
                                            
                                            className="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-[1.03]"
                                        >
                                        Save and Publish
                                        </button>
                                    </div>
                             </form>
                     </div>
                </div>
            

        </div>
    </div>
  )
}

export default CreateBlog
