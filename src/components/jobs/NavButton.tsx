// lib
import { Fragment } from "react";

// types
import { type NavButtonProps } from "@interfaces/jobs/NavButton";

const NavButton = ({ onSelect, currentValue, selected }: NavButtonProps): JSX.Element => {

    const style = selected ? 'bg-primary h-8 w-8 border-[1px] border-primary text-white' : 'bg-white h-8 w-8 border-[1px] border-stone-300 hover:bg-light-gray transition duration-300'
    return (
        <Fragment>
            <li className={`${style} cursor-pointer`} onClick={() => onSelect(currentValue - 1)}>
                {currentValue}
            </li>
        </Fragment>
    )
}

export default NavButton