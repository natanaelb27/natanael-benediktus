import { Button } from "react-daisyui";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { useAppSelector } from "../../store/";
import { selectCount } from "../../store/slices/counterSlice";
import { Link } from "react-router-dom";
import CV from "../../assets/others/natanael-benediktus.pdf";
import { MouseEvent } from "react";
import { openLink } from "../../utils/openLink";
import { mailTo } from "../../utils/mailTo";
import { MailToType } from "../../types/utils/mailTo";
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from "../../constants/links";

const Home = () => {
  const count = useAppSelector(selectCount);

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
          <Button
            shape="circle"
            color="ghost"
            variant="outline"
            onClick={(event: MouseEvent) => {
              const mailData: MailToType = {
                e: event,
                email: EMAIL,
              };

              mailTo(mailData);
            }}
          >
            <MdOutlineEmail className="text-2xl" />
          </Button>
          <Button
            shape="circle"
            color="ghost"
            variant="outline"
            onClick={() => openLink(LINKEDIN_URL)}
          >
            <FaLinkedin className="text-2xl" />
          </Button>
          <Button
            shape="circle"
            color="ghost"
            variant="outline"
            onClick={() => openLink(GITHUB_URL)}
          >
            <FaGithub className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
