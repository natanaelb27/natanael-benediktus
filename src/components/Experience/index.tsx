import WorkExperienceData from "../../data/workExperience.json";
import moment from "moment";

type WorkExperienceCareer = {
  title?: string;
  description?: string[];
  start_date?: string;
  end_date?: string;
  skills?: string[];
};

const Experience = () => {
  const getAbsoluteMonths = (momentDate: moment.Moment) => {
    var months = Number(momentDate.format("MM"));
    var years = Number(momentDate.format("YYYY"));
    return months + years * 12;
  };

  const GetWorkExperienceDateInfo = (c: WorkExperienceCareer) => {
    let startDate = moment(c.start_date, "MM-yyyy");
    let endDate = moment();
    let startDateString = moment(startDate).format("MMMM YYYY");
    let endDateString = "Present";

    if (c.end_date !== "Present") {
      endDate = moment(c.end_date, "MM-yyyy");
      endDateString = moment(endDate).format("MMMM YYYY");
    }

    let monthDiff =
      getAbsoluteMonths(endDate) - getAbsoluteMonths(startDate) + 1;

    return { startDateString, endDateString, monthDiff };
  };

  const WorkExperienceCareer = (
    career: WorkExperienceCareer[],
    location: string
  ) => {
    if (career.length > 1) {
      return (
        <div className="flex flex-col">
          <span className="font-light text-md">{location}</span>
          <div className="flex flex-col gap-2">
            {career.map((c, i) => {
              let { startDateString, endDateString, monthDiff } =
                GetWorkExperienceDateInfo(c);

              return (
                <div key={i} className="flex flex-col text-left mt-2">
                  <span className="text-md font-semibold">{c.title}</span>
                  <div>
                    <span className="font-light text-md">
                      {startDateString} - {endDateString} · {monthDiff} months
                    </span>
                  </div>
                  <div className="pl-4 mt-1 text-md">
                    <ul className="list-disc">
                      {c.description?.map((desc, i) => {
                        return (
                          <li key={i} className="font-light">
                            {desc}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex flex-wrap mt-2 gap-2">
                    {c.skills?.map((skill, i) => {
                      return (
                        <p
                          key={i}
                          className="my-0 text-xs border-blue-400 border py-1 px-2 rounded text-blue-400 font-medium font-inconsolata"
                        >
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    const c = career[0];
    let { startDateString, endDateString, monthDiff } =
      GetWorkExperienceDateInfo(c);

    return (
      <div>
        <span className="text-md">{c.title}</span>
        <div>
          <span className="font-light text-md">
            {startDateString} - {endDateString} · {monthDiff} months
          </span>
        </div>
        <span className="font-light text-md">{location}</span>
        <div className="pl-4 mt-1 text-md">
          <ul className="list-disc">
            {c.description?.map((desc, i) => {
              return (
                <li key={i} className="font-light">
                  {desc}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-wrap mt-2 gap-2">
          {c.skills?.map((skill, i) => {
            return (
              <p
                key={i}
                className="my-0 text-xs border-blue-400 border py-1 px-2 rounded text-blue-400 font-medium font-inconsolata"
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  const WorkExperience = WorkExperienceData.map((data, i) => {
    const logo = require("../../assets/images/" + data.company_logo);
    return (
      <div key={i} className="flex gap-3">
        <img
          src={logo}
          alt={data.company_logo}
          className="w-12 h-12 md:w-12 md:h-12"
        />
        <div>
          <span className="font-semibold text-xl">{data.company_name}</span>
          <div>{WorkExperienceCareer(data.career, data.location)}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="items-start flex flex-col md:flex-row gap-4 md:gap-16">
      <h1 className="text-md text-right font-semibold md:basis-1/4">
        EXPERIENCE
      </h1>
      <div className="flex flex-col gap-8 md:basis-3/4">{WorkExperience}</div>
    </div>
  );
};

export default Experience;
