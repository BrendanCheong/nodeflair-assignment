export interface MetaData {
    pages: number;
    perPageMax: number;
    total: number;
}

export type Salary = {
    start: number;
    end: number;
}

export interface JSONData {
    companyName: string;
    rating: number;
    imageURL: string;
    jobTitle: string;
    elapsed: string;
    field: string;
    skills: string[];
    location: string;
    salary?: Salary;
}

export interface Record {
    page: number;
    data: JSONData[];
}

export interface MockData {
    _metaData: MetaData;
    records: Record[];
}
