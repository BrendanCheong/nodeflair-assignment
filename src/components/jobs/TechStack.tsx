// lib
import { Fragment } from 'react';

// types
import { type TechStackProps } from '@interfaces/jobs/TechStack';

const TechStack = ({ tech }: TechStackProps): JSX.Element => {
    return (
        <Fragment>
            <span className='max-w-[90%] inline-block py-1 px-2 overflow-hidden font-bold rounded-md bg-light-gray text-stone-500 font-roboto'>
                {tech}
            </span>
        </Fragment>
    )
}

export default TechStack