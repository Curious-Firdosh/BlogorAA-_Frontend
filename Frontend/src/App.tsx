import { Routes ,Route} from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Blog from "./Pages/Blog"
import AllBlogs from "./Pages/AllBlogs"
import CreateBlog from "./Pages/CreateBlog"


function App() {
 

  return (
    <>
        <Routes>
              <Route path="/" element = {<Signup/>}></Route>
              <Route path= {'/signup'} element = {<Signup/>}></Route>
              <Route path= {'/login'} element = {<Login/>}></Route>
              <Route path= {'/blog/:id'} element = {<Blog/>}></Route>
              <Route path= {'/allblogs'} element = {<AllBlogs/>}></Route>
              <Route path= {'/createblog'} element = {<CreateBlog/>}></Route>
        </Routes>
    </>
  )
}

export default App
