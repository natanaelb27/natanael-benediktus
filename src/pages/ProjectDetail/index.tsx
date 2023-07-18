import { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-daisyui";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ProjectDetailData from "../../data/projectDetail.json";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const projectDetailData = ProjectDetailData.find((data) => {
    return data.project_name === projectName;
  });

  useEffect(() => {
    if (projectDetailData === undefined) {
      navigate("/");
    }
  }, [navigate, projectDetailData]);

  const [isPictureHovered, setIsPictureHovered] = useState(false);

  const onMouseEnterPicture = () => {
    setIsPictureHovered(true);
  };

  const onMouseLeavePicture = () => {
    setIsPictureHovered(false);
  };

  const buttonStyle = (value: string) => {
    let translateX = "";
    if (value === "❮") {
      translateX = "-translate-x-2";
    }

    if (value === "❯") {
      translateX = "translate-x-2";
    }
    return (
      <Button
        shape="circle"
        className={`hidden md:block border-0 bg-transparent translate-x-0 ${
          isPictureHovered
            ? `${translateX} bg-slate-100 hover:bg-slate-100`
            : ""
        }`}
      >
        {value}
      </Button>
    );
  };

  const Gallery = () => {
    if (projectDetailData?.gallery === undefined) {
      return <></>;
    }

    if (projectDetailData?.gallery?.length > 1) {
      return (
        <div>
          <p className="mt-2 mb-0 font-bold lg:text-2xl text-xl">Gallery</p>
          <Carousel
            className="md:rounded-box mt-4"
            display="sequential"
            buttonStyle={buttonStyle}
          >
            {projectDetailData?.gallery?.map((data, i) => {
              const picture = require("../../assets/images/" + data.picture);
              return (
                <Carousel.Item
                  key={i}
                  onMouseEnter={onMouseEnterPicture}
                  onMouseLeave={onMouseLeavePicture}
                  className="w-full border-2"
                  src={picture}
                  alt={data.description}
                ></Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      );
    }

    const projectDetailGallery = projectDetailData?.gallery?.at(0);
    const picture = require("../../assets/images/" +
      projectDetailGallery?.picture);

    return (
      <div>
        <p className="mt-2 mb-0 font-bold lg:text-2xl text-xl">Gallery</p>
        <img
          src={picture}
          alt={projectDetailGallery?.description}
          className="rounded-xl mt-4"
        ></img>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5 mx-auto px-8 mt-8 lg:w-1/2">
      <h1 className="font-semibold text-3xl">
        {projectDetailData?.project_name}
      </h1>
      <p className="my-0 font-light lg:text-base text-sm italic shadow-[inset_3px_0_0_0_#444452] -ml-4 pl-4">
        {projectDetailData?.brief}
      </p>
      <p className="mt-2 mb-0 font-bold lg:text-2xl text-xl">Project Summary</p>
      <p className="my-0 font-light lg:text-base text-sm">
        {projectDetailData?.project_description}
      </p>
      <div>{Gallery()}</div>
      <div className="flex gap-2 my-4 flex-wrap">
        {projectDetailData?.tools.map((tool, i) => {
          return (
            <p
              key={i}
              className="my-0 lg:text-base text-sm py-1 px-2 border-dark border rounded font-medium font-inconsolata"
            >
              {tool}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetail;
