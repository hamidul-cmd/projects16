import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { blog } from "../Data/blog";
import { Link } from "react-router-dom";
import CommonSectionsHeader from "../components/CommonSectionsHeader";
import BlogCard from "../components/BlogCard";

function Home() {
  return (
    <>
      {/* Hero Section - Static Featured Post */}
      <section className="hero px-6 py-10 bg-primary space-y-14.5 ll:flex ll:items-center justify-between ll2:py-20 ll2:px-[73px] ll2:gap-7.5 ll2:space-y-0">
        <div className="text-white">
          <h5 className="text-12 font-bold l-150 font-releway mb-1.5 ll2:mb-6.6 3xl:text-base 3xl:mb-[37px]">
            Featured Post
          </h5>
          <h1 className="text-4xl font-bold font-releway leading-10 mb-4.9 ll2:text-[45px] ll2:leading-[61px] 3xl:text-64 3xl:leading-[86px] 3xl:mb-6.7">
            How AI will Change the Future
          </h1>
          <p className="text-12 font-releway l-150 mb-6.6 max-w-[350px] ll2:mb-12.5 3xl:text-base">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <PrimaryButton text="Read more" path="#" bg="#fff" color="black" />
        </div>
        {/* Hero image */}
        <div className="h-[330px] rounded-10 overflow-hidden ll2:h-[413px] 3xl:h-[576px]">
          <img
            src="https://i.imgur.com/FCEYs5E.jpeg"
            alt="hero img"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Dynamic Hero Blog Section from Data */}
      <section className="px-6 py-10 ll2:px-14.5 ll2:pt-24.5 ll2:pb-36.5 3xl:px-24.5 3xl:pt-[130px] 3xl:pb-[200px]">
        {blog
          .filter((item) => item.type === "hero") // Filter for hero blogs
          .map((blog) => {
            return (
              <div
                key={blog.id}
                className="p-5 border border-[#DBDBDB] rounded-xl ll:border-none ll:p-0 relative"
              >
                {/* Blog image */}
                <div className="rounded-md overflow-hidden mb-6.6 h-[200px] ll:h-[413px] ll:mb-0 3xl:h-[576px] 3xl:rounded-16">
                  <img
                    src={blog.img}
                    alt="blog img"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Blog content box */}
                <div className="ll:absolute ll:bottom-0 ll:right-0 ll:bg-white ll:p-5 ll:max-w-[500px] ll:rounded-xl ll:rounded-br-none ll:translate-y-[20%] ll2:max-w-[660px] 3xl:p-7.5 3xl:rounded-16 3xl:max-w-[920px]">
                  <div className="flex items-center gap-1.5 font-roboto mb-4.8">
                    <h4 className="text-[10px] uppercase font-bold l-150 text-gray-40 3xl:text-sm">
                      {blog.sector}
                    </h4>
                    <h5 className="text-[10px] text-gray-80 font-medium l-150 3xl:text-sm">
                      {blog.date}
                    </h5>
                  </div>
                  <h2 className="text-22 font-bold font-releway leading-6 text-gray-40 mb-6.6 3xl:text-[32px] 3xl:leading-11 3xl:mb-1.5">
                    {blog.title}
                  </h2>
                  <p className="text-12 font-roboto l-150 text-gray-60 mb-5 3xl:text-base 3xl:mb-10">
                    {blog.content}
                  </p>
                  <Link
                    to={`/blogDetails/${blog.id}`}
                    className="py-1.5 px-5 text-[10px] font-bold font-roboto l-150 text-primary rounded-md block border border-primary w-fit 3xl:py-2.5 3xl:text-sm 3xl:rounded-lg"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
      </section>

      {/* Recent Blog Section */}
      <section className="mb-12.5 ll2:mb-[70px] 3xl:mb-24.5">
        <CommonSectionsHeader
          title="Our Recent Post"
          buttontext="View All"
          buttonpath="/blog"
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 ll2:grid-cols-3 gap-10 ll:gap-2.5 3xl:gap-3.6 px-10 ll2:px-14.5 3xl:px-24.5">
          {blog
            .filter((item) => item.type === "Recent") // Filter for recent blogs
            .map((blog) => {
              return <BlogCard key={blog.id} blog={blog} />;
            })}
        </div>
      </section>

      {/* Popular Blog Section */}
      <section>
        <CommonSectionsHeader
          title="Popular Post"
          buttontext="View All"
          buttonpath="/blog"
        />
        <div className="grid grid-cols-1 ll:grid-cols-2 ll2:grid-cols-3 gap-10 ll:gap-x-2.5 ll:gap-y-7.5 3xl:gap-y-10 3xl:gap-x-3.6 px-10 ll2:px-14.5 3xl:px-24.5">
          {blog
            .filter((item) => item.type === "popular") // Filter for popular blogs
            .map((blog) => {
              return <BlogCard key={blog.id} blog={blog} />;
            })}
        </div>
      </section>
    </>
  );
}

export default Home;
