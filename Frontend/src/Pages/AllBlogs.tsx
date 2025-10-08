
import { Link } from "react-router-dom";
import Appbar from "../Components/Appbar";
import BlogCard from "../Components/BlogCard";

import { useBlogs } from "../Hooks/useBlogs";
import { Spinner } from "../Components/Spinner";



const AllBlogs = () => {

    const {blogs ,loading} = useBlogs()


    return (
        <>

          <div>

              <div>
                  <Appbar/>
              </div>

              <div>

                {
                    loading
                        ? // show 5 skeleton cards while loading
                            Array.from({ length: 5 }).map((_, i) => <Spinner key={i} />)
                        : blogs.map((blog) => (
                            <Link key={blog.id} to={`/blog/${blog.id}`}>
                                <BlogCard
                                autherName={blog.Author.username}
                                title={blog.title}
                                content={blog.content}
                                publishedDate="12.4.2044"
                                />
                            </Link>
                        ))
                }

                   
              </div>

          </div>

        </>
    );
}

export default AllBlogs