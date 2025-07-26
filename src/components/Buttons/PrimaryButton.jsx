import React from "react";

function PrimaryButton({ path, text, bg, color }) {
  return (
    <a
      href={path}
      style={{ background: bg, color: color }}
      className="text-12 py-3 px-7.5 rounded-md bg-primary text-white font-semibold font-releway l-150 3xl:py-4 3xl:px-12 3xl:rounded-lg block w-fit"
    >
      {text}
    </a>
  );
}

export default PrimaryButton;
