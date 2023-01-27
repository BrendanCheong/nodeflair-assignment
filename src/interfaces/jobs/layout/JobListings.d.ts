import { type JSONData } from "@interfaces/MockData";
import { type Dispatch, type SetStateAction } from "react";

export interface JobListingsProps {
    data?: JSONData[];
    activeIndex: number;
    page: number;
    maxPages: number;
    setActiveIndex:  Dispatch<SetStateAction<number>>;
    setPage: Dispatch<SetStateAction<number>>;
}