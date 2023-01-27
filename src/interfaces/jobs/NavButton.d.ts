export interface NavButtonProps {
    onSelect: (index: number) => void;
    currentValue: number;
    selected: boolean;
}