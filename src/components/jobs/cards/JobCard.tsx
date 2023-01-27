// lib
import { Fragment } from "react";
import Image from "next/image";
import { priceFormatter } from "@components/jobs/helper/priceFormatter";

// type
import type { JobCardProps } from "@interfaces/jobs/cards/JobCard";

// components
import TechStack from "../TechStack";

const JobCard = ({ job, currentIndex, activeIndex, onSelect }: JobCardProps) => {

  const borderSelected = activeIndex === currentIndex ? "border-primary border-4" : "border-light-gray border-2";

  return (
    <Fragment>
      <div className={`mb-2 inline w-full transform cursor-pointer rounded-md bg-white shadow-sm transition-[0.2s] hover:-translate-y-1 hover:shadow-lg ${borderSelected}`} onClick={() => onSelect(currentIndex)}>
        <div className="flex h-full w-full flex-col rounded-t-md p-8 align-top">
          <div className="flex flex-col flex-nowrap justify-start">
            <div className="flex items-start justify-between">
              <div className=" float-left m-0 block overflow-x-hidden rounded-sm align-middle">
                <Image
                  src={job.imageURL}
                  alt={job.companyName + " logo"}
                  width={50}
                  height={50}
                />
              </div>
              <div className="ml-auto h-10 items-center justify-center rounded-md bg-green-200 px-2 py-1 text-left font-semibold text-primary">
                <span className="h-full w-full">{job.field}</span>
              </div>
            </div>
            <div className="mt-0 flex-shrink basis-auto text-ellipsis align-top font-normal">
              <p className="space-x-3 overflow-hidden text-ellipsis whitespace-normal">
                <span className="text-md whitespace-pre-wrap text-left">
                  {job.companyName}
                </span>
                <span className="text-md whitespace-pre-wrap text-left">
                  {job.rating}&nbsp;★
                </span>
              </p>
              <h2 className="mb-0 overflow-hidden text-ellipsis font-bold">
                {job.jobTitle}
              </h2>
            </div>
          </div>
          <div className="mb-auto w-full align-top text-sm">
            <div className="my-0 mb-1 flex flex-row space-x-4 whitespace-pre-wrap text-light-gray">
              <span className="align-top text-sm font-bold text-primary">
                {job.elapsed}
              </span>
              <div className="flex flex-row text-sm text-slate-400">
                <svg
                  className="mt-[0.15em] box-content h-[1em] overflow-visible"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="map-marker-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                  ></path>
                </svg>
                &nbsp;
                {job.location}
              </div>
            </div>
            <div>
              <p className=" mb-[0.15em] mt-0 flex flex-row space-x-2 text-left align-top text-sm font-semibold text-dark-gray">
                {job.salary && (
                  <Fragment>
                    <span className="pt-1">S${priceFormatter(job.salary.start)} - S${priceFormatter(job.salary.end)} /mth</span>
                    <span className="rounded-md bg-light-gray py-1 px-2 text-sm uppercase text-dark-gray">
                      EST
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <hr className="my-1" />
          <div className="mb-0 h-2/6 min-h-[2.5rem] w-full space-x-2 overflow-hidden text-ellipsis whitespace-nowrap rounded-b-lg bg-white pt-2 text-start text-sm">
            {job.skills.map((tech, index) => (
              <TechStack key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JobCard;
