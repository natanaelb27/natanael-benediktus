import { Button } from "react-daisyui";
import { Outlet } from "react-router-dom";
import { HiArrowSmUp } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  mobileMenuClicked,
  selectIsMenuOpen,
} from "../../store/slices/mobileMenuSlice";

import { Footer, Header } from "../common";
import { useScrollPosition } from "../../hooks";
const Layout = () => {
  const scrollPosition = useScrollPosition();
  const isMenuOpen = useAppSelector(selectIsMenuOpen);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-base-300 min-h-screen">
      <Header />
      <main className="bg-base-100">
        <Outlet />
      </main>
      <Footer />
      <Button
        color="secondary"
        shape="circle"
        className={`${
          scrollPosition > 0 ? "fixed" : "hidden"
        } z-90 bottom-16 right-[5%] transition-all duration-100 shadow-xl hover:shadow-2xl`}
        onClick={handleScrollToTop}
      >
        <HiArrowSmUp className="text-2xl" />
      </Button>
    </div>
  );
};

export default Layout;
