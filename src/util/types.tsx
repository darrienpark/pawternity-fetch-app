// types.ts
export interface FilterOptions {
  breeds: string[];
  sort: string;
  resultsPerPage: number;
  ageRange: [number, number];
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
}

export interface FetchDogsResponse {
  dogs: Dog[];
  totalPages: number;
}
