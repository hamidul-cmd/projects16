import React from "react";

function PrimaryButton({ path, text, bg, color }) {
  return (
    <a href={path} style={{ background: bg, color: color }}>
      {text}
    </a>
  );
}

export default PrimaryButton;
