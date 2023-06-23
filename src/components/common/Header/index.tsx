import { useState } from "react";
import { Button } from "react-daisyui";
import { CgMenu } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  mobileMenuClicked,
  selectIsMenuOpen,
} from "../../../store/slices/mobileMenuSlice";

const Header = () => {
  const isMenuOpen = useAppSelector(selectIsMenuOpen);
  const dispatch = useAppDispatch();
  return (
    <header className="py-5 px-12 sm:px-24 md:px-52 bg-base-100 border-b-2 shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <a href="/" className="text-3xl font-semibold">
          Natan<span className="text-red-400">.</span>
        </a>
        <div className="hidden md:flex justify-start gap-5">
          <a
            href="/#home"
            className="font-semibold hover:text-red-400 cursor-pointer"
          >
            Home
          </a>
          <a
            href="/#about"
            className="font-semibold hover:text-red-400 cursor-pointer"
          >
            About
          </a>
          <a
            href="/"
            className="font-semibold hover:text-red-400 cursor-pointer"
          >
            Experience
          </a>
          <a
            href="/"
            className="font-semibold hover:text-red-400 cursor-pointer"
          >
            Projects
          </a>
        </div>
        <div className="flex md:hidden">
          <Button
            shape="circle"
            color="ghost"
            onClick={() => dispatch(mobileMenuClicked())}
          >
            <CgMenu className="text-2xl" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
