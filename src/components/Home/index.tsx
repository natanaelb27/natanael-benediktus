import { Button, Divider } from "react-daisyui";
import ProfilePicture from "../../assets/images/profile-picture.webp";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiArrowSmDown } from "react-icons/hi";
import { increment, decrement } from "../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../store/";
import { selectCount } from "../../store/slices/counterSlice";

const Home = () => {
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-12 lg:px-52 py-10">
      <div className="flex flex-col gap-5 sm:gap-10">
        <div className="flex flex-col gap-2">
          <span className="text-5xl font-bold">Hi!</span>
          <div className="text-5xl font-bold">
            <span>
              I am <span className="text-blue-400">Natan</span>
            </span>
          </div>
          <span className="text-xl mt-5">
            A data enthusiast who finds software development fun too
          </span>
        </div>
        <Button
          className="hidden sm:flex shadow-xl w-52 rounded-3xl text-base-100 bg-blue-400 hover:bg-blue-300"
          color="ghost"
        >
          About Me
          <Button
            shape="circle"
            size="xs"
            className="mx-1 bg-base-100 hover:bg-base-100"
            animation={false}
          >
            <HiArrowSmDown className="text-md" color="primary" />
          </Button>
        </Button>
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
      <div className="hidden lg:flex">
        <h1>{count}</h1>
        <Button onClick={() => dispatch(increment(1))}>+</Button>
        <Button onClick={() => dispatch(decrement(1))}>-</Button>
        {/* <img src={ProfilePicture} alt="" className="" /> */}
      </div>
    </div>
  );
};

export default Home;
