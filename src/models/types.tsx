// types.ts
export interface FilterOptions {
  breeds: string[];
  sort: string;
  resultsPerPage: number;
  ageRange: number[];
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
}

export interface FetchDogsResponse {
  dogs: Dog[];
  totalPages: number;
}

export type Dog = {
  id: string;
  name: string;
  img: string;
  breed: string;
  age: string;
  zip_code: string;
};
