import React from "react";
import { useParams } from "react-router-dom";
import { blog, blog as blogData } from "../Data/blog";
import BlogCard from "../components/BlogCard";
import CommonSectionsHeader from "../components/CommonSectionsHeader";

function BlogDetail() {
  // Get the blog ID from the route parameters
  const { id } = useParams();

  // Find the matching blog post by ID
  const blogPost = blogData.find((p) => p.id.toString() === id);

  // If blog post is not found, show a fallback message
  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  // Debug: log current blog post data
  console.log(blogPost);

  return (
    <>
      {/* Blog Detail Section */}
      <section className="px-6 pt-12.5 pb-14.5 ll2:px-20 3xl:px-24.5 3xl:py-20">
        {/* Blog Meta Info (sector and date) */}
        <div className="space-y-5 mb-7.5 ll2:mb-10">
          <div className="flex gap-1.5 items-center font-roboto">
            <h4 className="text-sm font-bold l-150 text-gray-40">
              {blogPost.sector}
            </h4>
            <h5 className="text-sm font-medium l-150 text-gray-80">
              {blogPost.date}
            </h5>
          </div>

          {/* Blog Title */}
          <h1 className="text-2xl font-releway font-bold leading-8 text-gray-40 ll2:text-40">
            {blogPost.title}
          </h1>
        </div>

        {/* Blog Feature Image */}
        <div className="h-[200px] rounded-16 overflow-hidden mb-14.5 ll:h-[350px] ll2:h-[500px] 3xl:h-[600px]">
          <img
            src={blogPost.img}
            alt={blogPost.title}
            className="h-full w-full block object-cover"
          />
        </div>

        {/* Blog Content (split by </p> and cleaned of <p> tags) */}
        <div className="space-y-6 text-sm font-roboto text-gray-60 ll2:text-base 3xl:text-lg">
          {blogPost.content2.split("</p>").map((paragraph, index) => {
            const cleanText = paragraph.replace(/<p>/g, "").trim();
            return cleanText ? <p key={index}>{cleanText}</p> : null;
          })}
        </div>
      </section>

      {/* Popular Posts Section (excluding the current blog) */}
      <section>
        <CommonSectionsHeader
          title="Popular Post"
          buttontext="View All"
          buttonpath="/blog"
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 ll2:grid-cols-3 gap-10 ll:gap-x-2.5 ll:gap-y-7.5 3xl:gap-y-10 3xl:gap-x-3.6 px-10 ll2:px-14.5 3xl:px-24.5">
          {blog
            .filter(
              (item) => item.type === "popular" && item.id.toString() !== id // Exclude current post
            )
            .sort(() => Math.random() - 0.5) // Randomize order
            .slice(0, 3) // Display only 3 popular posts
            .map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
