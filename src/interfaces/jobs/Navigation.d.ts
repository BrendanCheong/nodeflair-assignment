import { type Dispatch, type SetStateAction } from 'react';

export interface NavigationProps {
    onSelect: Dispatch<SetStateAction<number>>;
    currentPage: number;
    maxPages: number;
}