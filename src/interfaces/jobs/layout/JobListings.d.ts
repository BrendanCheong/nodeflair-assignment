import { type JSONData } from "@interfaces/MockData";
import { type Dispatch, type SetStateAction } from "react";

export interface JobListingsProps {
    data?: JSONData[];
    activeIndex: number;
    setActiveIndex:  Dispatch<SetStateAction<number>>;
}