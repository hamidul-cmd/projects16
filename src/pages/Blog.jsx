import React from "react";
import { blog } from "../Data/blog";
import BlogCard from "../components/BlogCard";

function Blog() {
  return (
    <>
      {/* Page Hero Section */}
      <section className="hero text-center px-6 pt-10 pb-12.5">
        <h4 className="text-sm font-bold font-releway l-150 text-gray-60 mb-3 ll2:text-base 3xl:text-lg">
          OUR BLOGS
        </h4>
        <h1 className="text-2xl font-bold font-releway text-gray-40 mb-5 ll2:text-3xl 3xl:text-5xl 3xl:leading-16">
          Find our all blogs from here
        </h1>
        <p className="text-sm font-roboto text-gray-60 ll2:text-base max-w-[550px] m-auto 3xl:text-lg 3xl:max-w-[750px] l-150">
          our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along
        </p>
      </section>

      {/* Blog Grid Section */}
      <section className="grid grid-cols-1 ll:grid-cols-2 ll2:grid-cols-3 gap-10 ll:gap-x-2.5 ll:gap-y-7.5 3xl:gap-y-10 3xl:gap-x-3.6 px-10 ll2:px-14.5 3xl:px-24.5">
        {/* Render all blog posts using BlogCard */}
        {blog.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </section>
    </>
  );
}

export default Blog;
