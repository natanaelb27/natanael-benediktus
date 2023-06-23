import { Button, Divider } from "react-daisyui";
import workingPic from "../../assets/images/work.gif";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiArrowSmDown, HiDownload } from "react-icons/hi";
import { increment, decrement } from "../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../store/";
import { selectCount } from "../../store/slices/counterSlice";

const Home = () => {
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();

  return (
    // <div className="xl:min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 py-10">
    //   <div className="flex flex-col gap-5 sm:gap-10">
    //     <div className="flex flex-col gap-2">
    //       <span className="text-5xl font-bold">Hi!</span>
    //       <div className="text-5xl font-bold">
    //         <span>
    //           I am <span className="text-blue-400">Natan</span>
    //         </span>
    //       </div>
    //       <span className="text-xl mt-5">
    //         A data enthusiast who finds software development fun too
    //       </span>
    //     </div>
    //     <Button
    //       className="hidden sm:flex shadow-xl w-52 rounded-3xl text-base-100 bg-blue-500 hover:bg-blue-400"
    //       color="ghost"
    //     >
    //       Download CV
    //       <HiDownload className="text-xl" color="primary" />
    //     </Button>
    //     <div className="flex gap-2">
    //       <Button shape="circle" color="ghost" variant="outline">
    //         <FaLinkedin className="text-2xl" />
    //       </Button>
    //       <Button shape="circle" color="ghost" variant="outline">
    //         <FaGithub className="text-2xl" />
    //       </Button>
    //       <Button shape="circle" color="ghost" variant="outline">
    //         <FaInstagram className="text-2xl" />
    //       </Button>
    //     </div>
    //   </div>
    //   {/* <div className="hidden md:flex justify-center"> */}
    //   {/* <h1>{count}</h1>
    //     <Button onClick={() => dispatch(increment(1))}>+</Button>
    //     <Button onClick={() => dispatch(decrement(1))}>-</Button> */}
    //   {/* <img src={workingPic} alt="" className="w-96 h-96" /> */}
    //   {/* </div> */}
    // </div>
    <div className="xl:min-h-[80vh] flex flex-col gap-12 mt-8 mb-16 xl:mb-0 xl:mt-24 xl:pr-96">
      <span className="mt-2 mb-0 font-bold lg:text-5xl text-3xl">Hello!</span>
      <div className="mt-2 mb-0 font-bold lg:text-5xl text-3xl">
        <span>
          I'm <span className="text-blue-400">Natanael Benediktus</span>
        </span>
      </div>
      <span className="mt-2 mb-0 font-bold lg:text-5xl text-3xl">
        A data enthusiast who finds software development fun too
      </span>
      <Button
        className="hidden sm:flex shadow-xl w-52 rounded-3xl text-base-100 bg-blue-500 hover:bg-blue-400"
        color="ghost"
      >
        Download CV
        <HiDownload className="text-xl" color="primary" />
      </Button>
      <div className="flex gap-2 items-center">
        <span className="my-0 lg:text-lg text-base font-normal hidden md:block">
          Get in touch
        </span>
        <div className="flex gap-2">
          <Button shape="circle" color="ghost" variant="outline">
            <FaLinkedin className="text-2xl" />
          </Button>
          <Button shape="circle" color="ghost" variant="outline">
            <FaGithub className="text-2xl" />
          </Button>
          <Button shape="circle" color="ghost" variant="outline">
            <FaInstagram className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
