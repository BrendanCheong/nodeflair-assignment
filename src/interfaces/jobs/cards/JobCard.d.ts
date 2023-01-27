import { type JSONData } from "@interfaces/MockData";

export interface JobCardProps {
    currentIndex: number;
    job: JSONData;
    activeIndex: number;
    onSelect: (index: number) => void;
}