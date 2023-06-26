import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProjectData from "../../data/project.json";

const Project = () => {
  const [isProjectHovered, setIsProjectHovered] = useState<boolean[]>([]);
  const navigate = useNavigate();

  const ProjectList = ProjectData.map((data, i) => {
    const onMouseEnterProject = () => {
      setIsProjectHovered((prevItems) => [
        ...prevItems.slice(0, i),
        true,
        ...prevItems.slice(i + 1),
      ]);
    };

    const onMouseLeaveProject = () => {
      setIsProjectHovered((prevItems) => [
        ...prevItems.slice(0, i),
        false,
        ...prevItems.slice(i + 1),
      ]);
    };

    const onClickProject = (projectName: string) => {
      navigate("/project/" + projectName);
    };

    const picture = require("../../assets/images/" + data.picture);

    return (
      <div
        key={i}
        className="flex flex-col md:flex-row gap-4 items-center md:items-start"
      >
        <div className="basis-2/4 md:basis-1/4 relative w-full">
          <img
            src={picture}
            width="1600"
            height="900"
            alt={data.project_name}
          />
        </div>
        <div className="w-full md:basis-3/4">
          <div
            className="flex gap-2 items-center cursor-pointer w-fit"
            onMouseEnter={onMouseEnterProject}
            onMouseLeave={onMouseLeaveProject}
            onClick={() => {
              onClickProject(data.project_name);
            }}
          >
            <span className="font-semibold">{data.project_name}</span>
            <FaArrowRight
              className={`text-blue-400 transition ease-in-out delay-100 ${
                isProjectHovered[i] ? "translate-x-2" : ""
              }`}
            />
          </div>
          <p className="my-0 font-light lg:text-base text-sm">
            {data.description}
          </p>
          <div className="flex flex-wrap mt-2 gap-2">
            {data.tools.map((tool, i) => {
              return (
                <p
                  key={i}
                  className="my-0 text-xs border-blue-400 border py-1 px-2 rounded text-blue-400 font-medium font-inconsolata"
                >
                  {tool}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="items-start flex flex-col md:flex-row gap-4 md:gap-16">
      <h1 className="text-md text-right font-semibold md:basis-1/4">
        MY PROJECT
      </h1>
      <div className="flex flex-col gap-8 md:basis-3/4">{ProjectList}</div>
    </div>
  );
};

export default Project;
