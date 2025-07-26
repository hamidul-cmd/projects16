import React from "react";
import PrimaryButton from "./Buttons/PrimaryButton";

function CommonSectionsHeader({ title, buttontext, buttonpath }) {
  return (
    <>
      <div className="flex items-center justify-between px-6 mb-10 ll2:px-14.5 3xl:px-24.5">
        <h2 className="text-xl font-bold font-releway text-gray-40 ll2:text-34 3xl:text-5xl">
          {title}
        </h2>
        <PrimaryButton
          path={buttonpath}
          text={buttontext}
          bg="#7C4EE4"
          color="#fff"
        />
      </div>
    </>
  );
}

export default CommonSectionsHeader;
