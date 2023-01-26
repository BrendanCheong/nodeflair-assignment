import { Fragment } from 'react'
import JobCard from '@components/jobs/cards/JobCard'

const JobInformation = (): JSX.Element => {
  return (
    <Fragment>
      <div className='sticky lg:block flex-grow min-w-0 align-top text-left text-md top-3 bottom-3 p-3 font-semibold lg:w-7/12 flex-col hidden h-screen pr-0'>
        <section className='overflow-x-hidden overflow-y-scroll px-3 bg-light h-full w-full flex flex-col rounded-md shadow-md'>
          JobInformation
        </section>
      </div>
      
    </Fragment>
  )
}

export default JobInformation
