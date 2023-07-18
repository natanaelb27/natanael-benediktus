import {
  HomeSection,
  AboutSection,
  ExperienceSection,
  ProjectSection,
} from "../../components";
import { MotionDiv } from "../../components/common";
const Home = () => {
  return (
    <>
      <div
        id="home-section"
        // className="xl:min-h-[75vh] mt-8 mb-16 xl:mb-0 xl:mt-24 xl:pr-96"
        className="flex items-center xl:min-h-[82.5vh] mt-8 mb-16 xl:mb-0 xl:mt-0 xl:pr-96"

      >
        <HomeSection />
      </div>
      <MotionDiv>
        <div id="about-section" className="md:mr-16 xl:mr-32 scroll-mt-24">
          <AboutSection />
        </div>
      </MotionDiv>
      <MotionDiv>
        <div id="experience-section" className="md:mr-16 xl:mr-32 scroll-mt-24">
          <ExperienceSection />
        </div>
      </MotionDiv>
      <MotionDiv>
        <div id="project-section" className="md:mr-16 xl:mr-32 scroll-mt-24">
          <ProjectSection />
        </div>
      </MotionDiv>
    </>
  );
};

export default Home;
