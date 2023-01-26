// lib
import { Fragment } from "react";

// components
import JobCardTop from "@components/jobs/cards/JobCardTop";
import JobCardBottom from "@components/jobs/cards/JobCardBottom";

const JobCard = () => {
  return (
    <Fragment>
      <div className="min-h-56 sm:min-h-48 bg-light mb-2 flex w-full flex-col justify-center px-8 py-10 lg:px-10 xl:px-12 rounded-md shadow-sm border-primary border-4">
        <div className="flex">
          <div className="false text-xs font-light uppercase">
            JULY 2021 - PRESENT
          </div>
        </div>
        <div className="mb-4 text-xl xl:text-2xl">BETSOL</div>
        <div className="text-sm">
          <p>
            Currently working as an Associate Software Engineer working on
            BETSOL’s new SaaS platform as a Frontend Developer.
          </p>
        </div>
        <JobCardTop />
        <JobCardBottom />
      </div>

    </Fragment>
  );
};

export default JobCard;
