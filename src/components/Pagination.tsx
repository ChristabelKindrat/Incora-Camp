import React, {FC} from 'react';
import {useState, useEffect} from "react";
import cn from 'classnames';

import './Pagination.css';
import {PaginationProps} from '../interfaces/Interface'


const Pagination= ({activePage, totalItems, perPage, withActions, classes, onChangePage}: PaginationProps)=> {

    const numberofPages = [];
    for (let i = 1; i <= totalItems; i++) {
        numberofPages.push(i)
    }

    const [Page, SetPage] = useState(activePage);

    useEffect(() => {
        console.log(`you are on page number ${Page}`)
    }, [Page])


    return (
        <div className={cn(classes?.btn)}>
            <div className={cn(Page === activePage ? 'disabled' : '')}
                 onClick={() => SetPage((prev) => prev === activePage ? prev : prev - perPage)}>Prev
            </div>
            {numberofPages.map((page, index) => {
                return (
                    <div className={cn(Page === page ? classes?.activeBtn : '')} onClick={() => SetPage(page)}
                         key={index}>{page}</div>
                )
            })}
            <div className={cn(Page === numberofPages.length ? 'disabled' : '')}
                 onClick={() => SetPage((prev) => prev === numberofPages.length ? prev : prev + perPage)}>Next
            </div>
        </div>
    );
}

export {Pagination};





