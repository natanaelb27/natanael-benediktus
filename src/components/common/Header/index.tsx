import { useState } from "react";
import { Button } from "react-daisyui";
import { CgMenu } from "react-icons/cg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="py-5 px-12 sm:px-24 md:px-52 bg-base-100 border-b-2 shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <a href="/" className="text-3xl font-semibold">
          Natan<span className="text-red-400">.</span>
        </a>
        <div className="hidden md:flex justify-start gap-5">
          <a
            href="/"
            className="font-semibold hover:text-red-400 cursor-pointer"
          >
            Home
          </a>
          <a
            href="/"
            className="font-semibold hover:text-red-400 cursor-pointer"
          >
            About
          </a>
          <a
            href="/"
            className="font-semibold hover:text-red-400 cursor-pointer"
          >
            Works
          </a>
          <a
            href="/"
            className="font-semibold hover:text-red-400 cursor-pointer"
          >
            Projects
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Button shape="circle" color="ghost" onClick={onMenuClick}>
            <CgMenu className="text-2xl" />
          </Button>
        </div>
        {/* pake redux */}
      </div>
    </header>
  );
};

export default Header;
