import {useState} from "react";

export const UsePagination = (initialPage: number = 1, totalItems: number, perPage: number) => {
    const numberOfPages = [];
    for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
        numberOfPages.push(i)
    }
    const [page, setPage] = useState(initialPage);

    const nextPage = () => {
        setPage((prev) => prev === numberOfPages.length ? prev : prev + 1);
    };
    const prevPage = () => {
        setPage((prev) => prev === initialPage ? prev : prev - 1);
    };
    return {
        page,
        prevPage,
        nextPage,
        numberOfPages,
        setSelectPage: setPage
    }
}
