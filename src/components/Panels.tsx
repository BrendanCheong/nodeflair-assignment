// lib
import { Fragment, useState, useEffect } from "react";

// components
import JobListings from "@components/jobs/layout/JobListings";
import JobInformation from "@components/jobs/layout/JobInformation";

// types
import type { PanelsProps } from "@interfaces/Panels";

const Panels = ({ jobs }: PanelsProps): JSX.Element => {
    const [page, setPage] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        console.log(page);
    }, [page]);

    return (
        <Fragment>
            <JobListings
                data={jobs[page]?.data}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
                setPage={setPage}
                page={page}
                maxPages={jobs.length}
            />
            <JobInformation data={jobs[page]?.data[activeIndex]} />
        </Fragment>
    );
};

export default Panels;
