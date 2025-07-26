import React from "react";
import { Link } from "react-router-dom";

function BlogCard({blog}) {
  return (
    <>
      <div key={blog.id}>
        <div className="h-[258px] rounded-xl overflow-hidden mb-6.6 3xl:h-[360px] 3xl:mb-10">
          <img
            src={blog.img}
            alt="blog img"
            className="h-full w-full object-cover block"
          />
        </div>
        <div className="flex items-center gap-2.5 mb-3 3xl:mb-4 3xl:gap-4">
          <h4 className="text-sm font-bold font-roboto l-150 text-gray-40 3xl:text-base">
            {blog.sector}
          </h4>
          <h5 className="text-sm font-medium text-gray-80 font-roboto l-150 3xl:text-base">
            {blog.date}
          </h5>
        </div>
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold font-releway leading-5.3 text-gray-40 3xl:text-2xl">
            {blog.title}
          </h3>
          <p className="text-sm font-roboto l-150 text-gray-60 mb-4 3xl:text-base">
            {blog.content}
          </p>
        </div>
        <Link
          to={`/blogDetails/${blog.id}`}
          className="text-sm font-bold font-roboto l-150 text-primary underline 3xl:text-lg"
        >
          Read More...
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
