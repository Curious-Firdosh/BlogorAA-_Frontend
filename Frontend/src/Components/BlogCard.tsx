import { useState } from "react";


export interface CardProps {
  autherName: string;
  title: string;
  content: string;
  publishedDate: string;

}

const BlogCard = ({ autherName, title, content, publishedDate}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div 
      className="flex justify-center items-center mt-6 px-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full max-w-5xl p-5 border-b-2 border-blue-950 rounded-2xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
        
    
        {/* Left Side (Info) */}
        <div className="flex-1 w-full">
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-3">
            <img
              className="w-10 h-10 rounded-full"
              src="https://api.dicebear.com/9.x/lorelei/svg"
              alt="Author avatar"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
              <span className="font-bold text-base sm:text-lg">{autherName}</span>
              <span className="text-gray-500 italic text-sm">{publishedDate}</span>
            </div>
          </div>

          {/* Blog Title */}
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-gray-900">
            {title}
          </h1>

          {/* Blog Content + Read More */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {isExpanded
              ? content
              : content.length > maxLength
              ? content.slice(0, maxLength) + "..."
              : content}
            {content.length > maxLength && (
              <button
                onClick={toggleReadMore}
                className="ml-2 text-blue-500 font-semibold hover:underline"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full sm:w-48 lg:w-60 flex-shrink-0 self-center">
          <img
            className="w-full h-40 sm:h-36 lg:h-44 object-cover rounded-xl"
            src="https://images.pexels.com/photos/33940631/pexels-photo-33940631.jpeg"
            alt="Blog"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
