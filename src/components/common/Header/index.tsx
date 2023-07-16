import { useState } from "react";
import { Button } from "react-daisyui";
import { CgMenu } from "react-icons/cg";
import { useAppDispatch } from "../../../store";
import { mobileMenuClicked } from "../../../store/slices/mobileMenuSlice";
import MobileMenu from "../MobileMenu";
import {
  handleClickScroll,
  handleScrollToTop,
} from "../../../utils/clickScroll";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  const menuClicked = () => {
    setIsMenuClicked(true);
  };

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  const isHome = window.location.pathname === "/";

  if (isHome) {
    return (
      <header className="py-5 px-5 sm:px-24 md:px-52 bg-base-100 border-b-2 shadow-md sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-semibold">
            Natan<span className="text-red-400">.</span>
          </a>
          <div className="hidden md:flex justify-start gap-5">
            <span
              onClick={() => handleScrollToTop()}
              className="font-semibold hover:text-red-400 cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={() => handleClickScroll("about-section")}
              className="font-semibold hover:text-red-400 cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => handleClickScroll("experience-section")}
              className="font-semibold hover:text-red-400 cursor-pointer"
            >
              Experience
            </span>
            <span
              onClick={() => handleClickScroll("project-section")}
              className="font-semibold hover:text-red-400 cursor-pointer"
            >
              Project
            </span>
          </div>
          <div className="flex md:hidden">
            <Button
              shape="circle"
              color="ghost"
              onClick={() => {
                dispatch(mobileMenuClicked());
                menuClicked();
              }}
            >
              <CgMenu className="text-2xl" />
            </Button>
          </div>
        </div>
        <MobileMenu showModal={isMenuClicked} onClose={closeMenu} />
      </header>
    );
  } else {
    return (
      <header className="py-5 px-5 sm:px-24 md:px-52 bg-base-100 border-b-2 shadow-md sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-semibold">
            Natan<span className="text-red-400">.</span>
          </a>
          <div className="hidden md:flex justify-start gap-5">
            <span
              onClick={() => navigate("/")}
              className="font-semibold hover:text-red-400 cursor-pointer"
            >
              Home
            </span>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
