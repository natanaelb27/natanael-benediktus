import { Button, Carousel, Divider, Steps } from "react-daisyui";
import WorkExperienceData from "../../data/workExperience.json";
import Test from "../../assets/images/stickearn-logo.jpg";
import moment from "moment";

type WorkExperienceCareer = {
  title?: string;
  description?: string[];
  start_date?: string;
  end_date?: string;
};

const Work = () => {
  const getAbsoluteMonths = (momentDate: moment.Moment) => {
    var months = Number(momentDate.format("MM"));
    var years = Number(momentDate.format("YYYY"));
    return months + years * 12;
  };

  const WorkExperienceCareer = (
    career: WorkExperienceCareer[],
    location: string
  ) => {
    if (career.length > 1) {
      return (
        <div className="flex flex-col">
          <span className="text-slate-500 text-sm">{location}</span>
          {career.map((c) => {
            let startDate = moment(c.start_date, "MM-yyyy");
            let endDate = moment();
            if (c.end_date !== "present") {
              endDate = moment(c.end_date, "MM-yyyy");
            }

            let startDateString = moment(startDate).format("MMMM YYYY");
            let endDateString = moment(endDate).format("MMMM YYYY");

            let monthDiff =
              getAbsoluteMonths(endDate) - getAbsoluteMonths(startDate) + 1;
            return (
              <div className="flex flex-col text-left mt-2">
                <span className="text-sm font-semibold">{c.title}</span>
                <div>
                  <span className="text-slate-500 text-sm">
                    {startDateString} - {endDateString} · {monthDiff} months
                  </span>
                </div>
                <div className="pl-5 text-sm">
                  <ul className="list-disc">
                    {c.description?.map((desc: string) => {
                      return <li>{desc}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    const c = career[0];
    let startDate = moment(c.start_date, "MM-yyyy");

    let endDate = moment();
    if (c.end_date !== "present") {
      endDate = moment(c.end_date, "MM-yyyy");
    }

    let startDateString = moment(startDate).format("MMMM YYYY");
    let endDateString = moment(endDate).format("MMMM YYYY");

    let monthDiff =
      getAbsoluteMonths(endDate) - getAbsoluteMonths(startDate) + 1;

    return (
      <div>
        <span className="text-sm">{c.title}</span>
        <div>
          <span className="text-slate-500 text-sm">
            {startDateString} - {endDateString} · {monthDiff} months
          </span>
        </div>
        <span className="text-slate-500 text-sm">{location}</span>
        <div className="pl-5 text-sm">
          <ul className="list-disc">
            {c.description?.map((desc: string) => {
              return <li>{desc}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  };

  const WorkExperience = WorkExperienceData.map((data) => {
    const logo = require("../../assets/images/" + data.company_logo);
    return (
      <div>
        <div className="flex gap-3">
          <img
            src={logo}
            alt={data.company_logo}
            className="w-12 h-12 md:w-24 md:h-24"
          />
          <div>
            <span className="font-semibold">{data.company_name}</span>
            <div>{WorkExperienceCareer(data.career, data.location)}</div>
          </div>
        </div>
        <Divider className="p-0" />
      </div>
    );
  });

  return (
    <div className="px-5 lg:px-52 py-10">
      <h1 className="text-3xl font-semibold">Work</h1>
      <Divider></Divider>
      <div className="flex flex-col">{WorkExperience}</div>
    </div>
  );
};

export default Work;
