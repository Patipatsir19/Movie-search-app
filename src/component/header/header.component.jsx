import React, { useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Link, useLocation } from "react-router-dom";

import "./header.styles.scss";

import logo from "../../Asset/—Pngtree—green play icon_4707644.png";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movies",
  },
  {
    display: "Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef();

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <>
      <div ref={headerRef} className="header">
        <div className="header_wrap container">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">MovieSA</Link>
          </div>
          <ul className="header_nav">
            {headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path}>{e.display}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
