import React from "react";
import { NavLink } from "react-router-dom";
import PrimaryButton from "./Buttons/PrimaryButton";

function Header() {
  const navLinks = [
    {
      id: 1,
      title: "Blog",
      link: "/blog",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Contact Us",
      link: "/contact",
    },
  ];
  return (
    <>
      <header className="max-w-wrapper m-auto py-5 px-7.5 flex justify-between items-center relative bg-white">
        <div>
          <picture>
            <source
              srcSet="https://i.imgur.com/m2nZ9eQ.png"
              media="(min-width: 1440px)"
              height="43px"
              width="156px"
            />
            <source
              srcSet="https://i.imgur.com/4VrP2Bc.png"
              media="(min-width: 1030px)"
              height="33px"
              width="113px"
            />
            <img src="https://i.imgur.com/83mqXDN.png" alt="logo" />
          </picture>
        </div>
        <div>
          <ul className="absolute left-0">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                {i === 2 ? (
                  <PrimaryButton
                    path={link.link}
                    text={link.title}
                    bg="#7C4EE4"
                    color="#fff"
                  />
                ) : (
                  <NavLink to={link.link}>{link.title}</NavLink>
                )}
              </li>
            ))}
          </ul>
          <div>
            <img
              src="https://i.imgur.com/FGOzu3A.png"
              alt="menu"
              height="34px"
              width="34px"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
