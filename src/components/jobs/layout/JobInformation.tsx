import { Fragment } from 'react'

// types
import { type JobInformationProps } from '@interfaces/jobs/layout/JobInformation'

const JobInformation = ({ data }: JobInformationProps): JSX.Element => {
  return (
    <Fragment>
      <div className='sticky lg:block flex-grow min-w-fit min-h-screen align-top text-left text-md top-3 p-3 font-semibold lg:w-7/12 flex-col hidden h-screen pr-0'>
        <section className='overflow-x-hidden overflow-y-scroll px-3 bg-light h-full w-full flex flex-col rounded-md shadow-lg' id='JobInformation'>
          {data && data.jobTitle}
        </section>
      </div>
      
    </Fragment>
  )
}

export default JobInformation
