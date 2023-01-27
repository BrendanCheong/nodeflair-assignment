// lib
import { Fragment } from 'react'

// components
import JobCard from '@components/jobs/cards/JobCard';
import Navigation from '@components/jobs/Navigation';


const JobListings = (): JSX.Element => {
  return (
    <Fragment>
      <div className='w-full lg:w-5/12 flex flex-col pt-7 top-3 align-top space-y-3 mx-auto' id='JobListings'>
          {Array(10).fill(<JobCard />)}
        <Navigation />
      </div>
    </Fragment>
  )
}

export default JobListings
