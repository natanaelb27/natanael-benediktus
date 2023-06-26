import { useEffect, useState } from "react";
import { Button } from "react-daisyui";
import { HiX } from "react-icons/hi";
import {
  handleClickScroll,
  handleScrollToTop,
} from "../../../utils/clickScroll";

type ModalProps = {
  showModal: boolean;
  onClose: () => void;
};

const MobileMenu = ({ showModal, onClose }: ModalProps) => {
  const [opacityAnimation, setOpacityAnimation] = useState<boolean>(false);

  useEffect(() => {
    setOpacityAnimation(showModal);
  }, [showModal]);

  const closeMenu = () => {
    setOpacityAnimation(false);
    setTimeout(() => {
      onClose();
    }, 100);
  };

  return (
    <div>
      {showModal ? (
        <div
          className={`animate-fade transition-all ease-in-out duration-500 fixed top-0 right-0 w-full h-full bg-black ${
            opacityAnimation ? "bg-opacity-50" : "bg-opacity-0"
          }`}
        />
      ) : null}
      <div
        className={`transition-all flex justify-end ease-in-out duration-300 fixed top-0 right-0 w-full h-full ${
          showModal ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white py-5 px-5 h-full w-8/12 flex flex-col items-end">
          <Button shape="circle" color="ghost" onClick={closeMenu}>
            <HiX className="text-2xl" />
          </Button>
          <div className="w-full flex flex-col gap-2 items-start">
            <span
              onClick={async () => {
                closeMenu();
                handleScrollToTop();
              }}
              className="w-full py-2 px-2 font-semibold hover:bg-slate-200 cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={async () => {
                closeMenu();
                handleClickScroll("about-section");
              }}
              className="w-full py-2 px-2 font-semibold hover:bg-slate-200 cursor-pointer"
            >
              About
            </span>
            <span
              onClick={async () => {
                closeMenu();
                handleClickScroll("experience-section");
              }}
              className="w-full py-2 px-2 font-semibold hover:bg-slate-200 cursor-pointer"
            >
              Experience
            </span>
            <span className="w-full py-2 px-2 font-semibold hover:bg-slate-200 cursor-pointer">
              Projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
