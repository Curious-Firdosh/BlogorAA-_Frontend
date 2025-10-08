

export const Spinner = () => {
  return (
    <div className="flex justify-between items-start p-4 border rounded-lg shadow animate-pulse bg-white w-full max-w-2xl mx-auto mb-4">
      <div className="flex-1 space-y-2">
        {/* author */}
        <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
        {/* title */}
        <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
        {/* content snippet */}
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
      </div>
      {/* image */}
      <div className="h-24 w-24 bg-gray-300 rounded-lg ml-4"></div>
    </div>
  )
};




