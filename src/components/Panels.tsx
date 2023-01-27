// lib
import { Fragment, useState } from "react";

// components
import JobListings from "@components/jobs/layout/JobListings";
import JobInformation from "@components/jobs/layout/JobInformation";

// types
import type { PanelsProps } from "@interfaces/Panels";

const Panels = ({ data }: PanelsProps): JSX.Element => {
    const [page, setPage] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <Fragment>
            <JobListings data={data[page]?.data} setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
            <JobInformation data={data[page]?.data[activeIndex]}/>
        </Fragment>
    );
};

export default Panels;
