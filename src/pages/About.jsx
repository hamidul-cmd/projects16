import React from "react";
import CommonHero from "../components/CommonHero"; // Reusable hero section component
import { aboutdata } from "../Data/aboutdata"; // Array of about section items

function About() {
  return (
    <>
      {/* Hero section for the About page */}
      <CommonHero
        capsule="ABOUT US"
        title="Creative Blog Writting and publishing site"
        pera="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
      />

      {/* About section content */}
      <section className="px-6 py-10 ll2:px-14.5 ll2:pt-24.5 ll2:pb-36.5 3xl:px-24.5 3xl:pt-[130px] 3xl:pb-[200px]">
        {/* About page header image */}
        <img
          src="https://i.imgur.com/FCD67NT.jpeg"
          alt="about img"
          className="h-[200px] ll:h-[350px] ll2:h-[450px] 3xl:h-[600px] w-full object-cover rounded-xl 3xl:rounded-16"
        />

        {/* Grid of about items */}
        <div className="grid mt-12.5 ll2:mt-14.5 3xl:mt-20 grid-cols-1 ll:grid-cols-2 ll2:grid-cols-3 gap-7.5 ll:gap-3 3xl:gap-4">
          {aboutdata.map((item, index) => {
            return (
              <div
                key={index} // Unique key for each about item
                className="p-5 rounded-xl group hover:bg-primary transition-all duration-200 ease-in cursor-pointer"
              >
                {/* Numbering each item */}
                <div className="text-50 leading-[68px] font-bold text-gray-60 mb-1 font-releway group-hover:text-white transition-all duration-200 ease-in 3xl:text-[72px]">
                  {index + 1}
                </div>

                {/* Item title */}
                <h2 className="text-lg font-bold l-150 text-primary mb-3 group-hover:text-white transition-all duration-200 ease-in 3xl:text-2xl">
                  {item.title}
                </h2>

                {/* Item description */}
                <p className="text-base font-roboto l-150 text-gray-60 group-hover:text-[#F7F6FE] transition-all duration-200 ease-in">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default About;
