interface PaginationProps {
    activePage: number;
    totalItems: number;
    perPage: number;
    withActions?: boolean;
    classes?: {
        btn?: string;
        activeBtn?: string;
    }
    onChangePage?: (newPage: number) => void;
}
export type {PaginationProps}