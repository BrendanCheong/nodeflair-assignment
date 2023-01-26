// lib
import { Fragment, useState } from 'react';

// components
import JobListings from '@components/jobs/layout/JobListings';
import JobInformation from '@components/jobs/layout/JobInformation';

// types
import type { PanelsProps } from '@interfaces/Panels';

// data
import mockData from '@data/mockData';

const Panels = ({ data }: PanelsProps): JSX.Element => {
    const [page, setPage] = useState<number>(0);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    console.log(data);

    return (
        <Fragment>
            {/* <div className='flex flex-col w-full lg:flex-row items-center h-screen space-x-2'> */}
                <JobListings />
                <JobInformation />
            {/* </div> */}
        </Fragment>
    )
}

export default Panels
