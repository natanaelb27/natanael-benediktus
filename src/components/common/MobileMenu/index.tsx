import { useEffect } from "react";
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
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div
      className={`transition-all bg-black flex justify-end ease-in-out duration-500 fixed top-0 right-0 w-full h-full ${
        showModal
          ? "translate-x-0 bg-opacity-10"
          : "translate-x-full bg-opacity-0"
      }`}
    >
      <div className="bg-white py-5 px-5 h-full w-8/12 flex flex-col items-end">
        <Button shape="circle" color="ghost" onClick={onClose}>
          <HiX className="text-2xl" />
        </Button>
        <div className="w-full flex flex-col gap-2 items-start">
          <span
            onClick={async () => {
              onClose();
              await delay(100);
              handleScrollToTop();
            }}
            className="w-full py-2 px-2 font-semibold hover:bg-slate-200 cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={async () => {
              onClose();
              await delay(100);
              handleClickScroll("about-section");
            }}
            className="w-full py-2 px-2 font-semibold hover:bg-slate-200 cursor-pointer"
          >
            About
          </span>
          <span
            onClick={async () => {
              onClose();
              await delay(100);
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
  );
};

export default MobileMenu;
