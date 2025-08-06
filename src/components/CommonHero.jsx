import React from "react";

function CommonHero({ capsule, title, pera, contact }) {
  return (
    <>
      <section className="hero text-center px-6 pt-10 pb-12.5">
        {capsule && (
          <h4 className="text-sm font-bold font-releway l-150 text-gray-60 mb-3 ll2:text-base 3xl:text-lg">
            {capsule}
          </h4>
        )}
        <h1 className="text-2xl font-bold font-releway text-gray-40 mb-5 ll2:text-3xl 3xl:text-5xl 3xl:leading-16 max-w-[520px] 3xl:max-w-[728px] m-auto">
          {title}
        </h1>
        <p
          className={`text-sm font-roboto text-gray-60 ll2:text-base${
            contact
              ? "max-w-[300px] 3xl:max-w-[442px]"
              : "max-w-[550px] 3xl:max-w-[750px]"
          } m-auto 3xl:text-lg l-150`}
        >
          {pera}
        </p>
      </section>
    </>
  );
}

export default CommonHero;
