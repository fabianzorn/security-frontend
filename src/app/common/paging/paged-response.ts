export interface PagedResponse<T> {
  totalElements: number;
  size: number;
  'number': number;
  empty: boolean;
  content: T[];
}
