import { Button } from "react-daisyui";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { useAppSelector } from "../../store/";
import { selectCount } from "../../store/slices/counterSlice";
import { Link } from "react-router-dom";
import CV from "../../assets/others/natanael-benediktus.pdf";

const Home = () => {
  const count = useAppSelector(selectCount);

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  const mailTo = (mailto: string, label: string) => {
    return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="flex flex-col gap-12">
      <span className="mt-2 mb-0 font-bold lg:text-5xl text-3xl">Hello!</span>
      <div className="mt-2 mb-0 font-bold lg:text-5xl text-3xl">
        <span>
          I'm <span className="text-blue-400">Natanael Benediktus</span>
        </span>
      </div>
      <span className="mt-2 mb-0 font-bold lg:text-5xl text-3xl">
        A data enthusiast who also happens to find software development fun!
      </span>
      <Button
        className="shadow-xl w-52 rounded-3xl text-base-100 bg-blue-500 hover:bg-blue-400"
        color="ghost"
        onClick={() => openLink(CV)}
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
            <MdOutlineEmail className="text-2xl" />
          </Button>
          <Button
            shape="circle"
            color="ghost"
            variant="outline"
            onClick={() =>
              openLink(
                "https://www.linkedin.com/in/natanael-benediktus-0601601b0"
              )
            }
          >
            <FaLinkedin className="text-2xl" />
          </Button>
          <Button
            shape="circle"
            color="ghost"
            variant="outline"
            onClick={() => openLink("https://github.com/natanaelb27")}
          >
            <FaGithub className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
