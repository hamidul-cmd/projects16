import React from "react";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "./Buttons/PrimaryButton";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
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
      <header className="max-w-wrapper m-auto py-5 px-7.5 flex justify-between items-center relative bg-white ll2:py-3.6 ll2:px-[70px] 3xl:py-6.5 3xl:px-24.5">
        <div>
          <Link to="/">
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
          </Link>
        </div>
        <div>
          <ul
            className={`absolute left-0 top-0 h-screen w-full flex flex-col items-center gap-5 justify-center bg-white transition-transform ease-in duration-100 ll:relative ll:h-fit ll:w-fit ll:flex-row ll:translate-x-0 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {navLinks.map((link, i) => (
              <li onClick={() => setIsOpen(!isOpen)} key={link.id}>
                {i === 2 ? (
                  <PrimaryButton
                    path={link.link}
                    text={link.title}
                    bg="#7C4EE4"
                    color="#fff"
                  />
                ) : (
                  <NavLink
                    to={link.link}
                    className="text-12 p-3 text-black hover:text-primary transition-all duration-200 ease-in font-releway font-medium ll2:text-sm l-150 3xl:text-base"
                  >
                    {link.title}
                  </NavLink>
                )}
              </li>
            ))}
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className="h-6 w-6 absolute top-10 right-10 ll:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
            </svg>
          </ul>
          <div onClick={() => setIsOpen(!isOpen)} className="ll:hidden">
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
