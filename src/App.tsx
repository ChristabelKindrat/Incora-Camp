import React from 'react';
import './App.css';
import './components/Pagination';

import {Pagination} from './components/Pagination';

function App() {

    return (
        <>
            <Pagination activePage={1} perPage={1} withActions={true} totalItems={5} onChangePage={(newPage: number)=>{}} classes={{btn:'Pagination_container',activeBtn:"active"}}/>
        </>
    );
}

export {App};
