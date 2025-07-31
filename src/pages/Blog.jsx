import React from "react";
import { blog } from "../Data/blog";
import BlogCard from "../components/BlogCard";
import CommonHero from "../components/CommonHero";

function Blog() {
  return (
    <>
      {/* Page Hero Section */}
      <CommonHero
        capsule=" OUR BLOGS"
        title="Find our all blogs from here"
        pera="our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along"
      />

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
