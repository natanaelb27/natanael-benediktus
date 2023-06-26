import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ProjectData from "../../data/project.json";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectName } = useParams();

  return (
    <div>
      <div>{projectName}</div>
    </div>
  );
};

export default ProjectDetail;
