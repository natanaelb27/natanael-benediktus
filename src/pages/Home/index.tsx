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
        className="xl:min-h-[80vh] mt-8 mb-16 xl:mb-0 xl:mt-24 xl:pr-96"
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
