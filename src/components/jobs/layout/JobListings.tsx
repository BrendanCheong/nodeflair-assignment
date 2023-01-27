// lib
import { Fragment } from "react";

// components
import JobCard from "@components/jobs/cards/JobCard";
import Navigation from "@components/jobs/Navigation";

// types
import { type JobListingsProps } from "@interfaces/jobs/layout/JobListings";

const JobListings = ({
  data,
  page,
  maxPages,
  setActiveIndex,
  setPage,
  activeIndex,
}: JobListingsProps): JSX.Element => {

  return (
    <Fragment>
      <div
        className="top-3 mx-auto flex w-full flex-col space-y-3 pt-7 align-top lg:w-5/12"
        id="JobListings"
      >
        {data?.map((job, index) => (
          <JobCard
            key={index}
            job={job}
            onSelect={(index) => setActiveIndex(index)}
            currentIndex={index}
            activeIndex={activeIndex}
          />
        ))}
        <Navigation onSelect={setPage} currentPage={page} maxPages={maxPages}/>
      </div>
    </Fragment>
  );
};

export default JobListings;
