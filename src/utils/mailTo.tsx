import { MailToType } from "../types/utils/mailTo";

export const mailTo = ({ e, email }: MailToType) => {
  e.preventDefault();
  const mailtoUrl = `mailto:${encodeURIComponent(email)}`;
  window.location.href = mailtoUrl;
};
