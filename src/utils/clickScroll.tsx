export const handleClickScroll = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
