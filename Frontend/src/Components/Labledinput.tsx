import type { ChangeEvent } from "react";


interface Labledinputtype  {
    placeholder : string ;
    label : string ;
    onChange : (e : ChangeEvent<HTMLInputElement>) => void;
}



const Labledinput = ({placeholder , label , onChange } :Labledinputtype) => {
  return (
    <div>
         {/* Form */}
              <div className="flex flex-col  w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

                  <div className="mb-6">
                      <label  className="block mb-2 text-sm font-medium text-gray-90 ">{label}</label>
                      <input 
                          type="text" id="default-input"
                          className="bg-gray-50 border border-gray-300 px-3 py-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={placeholder}
                          onChange={onChange}
                      />
                 </div>

                
                </div>

    </div>
  )
}

export default Labledinput
