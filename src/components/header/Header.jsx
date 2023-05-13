import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Icons for Header
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/movix-logo.svg";

//Stylesheet and Component
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  //Scrolling Effect
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  //Use to show different view in mobile devices
  const [mobileMenu, setMobileMenu] = useState(false);
  //Allow to make query through search icon
  const [query, setQuery] = useState("");
  //to on and off search bar
  const [showSearch, setShowSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  //When our page will change to another page all scroll position will be reset to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  //Search for desired content using searchbar
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  //During Mobile View
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  //Used to navigate to movie or tv shows page
  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a Movie or tv show..."
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
//Line 55-57 used to toggle between close and Menu icons
