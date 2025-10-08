
import { Qoute } from "../Components/Qoute"
import Auth from "../Components/Auth"



const Signup = () => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">

      {/* Left: Auth Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 bg-slate-100">

        <Auth type="signup" />
      </div>

      {/* Right: Quote (hidden on small screens) */}
      <div className="hidden md:flex w-1/2 justify-center items-center bg-slate-200 p-6">
        <Qoute />
      </div>

    </div>
  )
}


export default Signup
