import { LINKEDIN_URL, GITHUB_URL, EMAIL } from "../../../constants/links";
import { MailToType } from "../../../types/utils/mailTo";
import { mailTo } from "../../../utils/mailTo";
import { openLink } from "../../../utils/openLink";
import { MouseEvent } from "react";

const Footer = () => {
  return (
    <footer className="flex p-8 pt-24 mt-24 gap-4 justify-end">
      <span
        className="font-bold hover:text-blue-400 cursor-pointer"
        onClick={(event: MouseEvent) => {
          const mailData: MailToType = {
            e: event,
            email: EMAIL,
          };

          mailTo(mailData);
        }}
      >
        Email
      </span>
      <span
        className="font-bold hover:text-blue-400 cursor-pointer"
        onClick={() => openLink(LINKEDIN_URL)}
      >
        Linkedin
      </span>
      <span
        className="font-bold hover:text-blue-400 cursor-pointer"
        onClick={() => openLink(GITHUB_URL)}
      >
        Github
      </span>
    </footer>
  );
};

export default Footer;
