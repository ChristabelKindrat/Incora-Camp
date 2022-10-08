import React, {FC} from 'react';
import cn from 'classnames';

import './Pagination.style.css';
import {PaginationProps} from '../../interfaces';
import {UsePagination} from '../../hooks';

const Pagination: FC<PaginationProps> = (pagination) => {
    const {activePage, totalItems, classes,withActions,perPage} = pagination
    const {page, prevPage, nextPage,setSelectPage,numberOfPages} = UsePagination(activePage,totalItems,perPage);

    return (
        <div className={cn(classes?.btn)}>
            <div className={cn(page === activePage ? 'disabled' : '')}
                 onClick={prevPage}>Prev
            </div>
            {numberOfPages.map((value, index) => {
                return (
                    <div className={cn(page === value ? classes?.activeBtn : '')}
                         onClick={() => setSelectPage(value)}
                         key={index}>{value}
                    </div>
                )
            })}
            <div className={cn(page === numberOfPages.length ? 'disabled' : '')}
                 onClick={nextPage}>Next
            </div>
        </div>
    );
}
export {Pagination};





