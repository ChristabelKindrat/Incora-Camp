import React, {FC} from 'react';
import './App.css';
import './components/Pagination';
import {Switch, Route} from "react-router-dom";

import {Pagination} from './components/Pagination';
import {Tasks} from "./components/Tasks";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Links} from "./pages/Links";

const App: FC = () => {
    return (
        <>
            <Header/>
            <div style={{display: "flex"}}>
                <Switch>
                    <Route path="/">
                        <Links/>
                        <Route path={"/tasks"}>
                            <Tasks/>
                        </Route>
                        <Route path={"/pagination"}>
                            <Pagination activePage={1} perPage={1} withActions={true} totalItems={5}
                                        onChangePage={(newPage: number) => {
                                        }} classes={{btn: 'Pagination_container', activeBtn: "active"}}/>
                        </Route>
                        <Route path={"/setting"}>
                            <ProtectedRoute/>
                        </Route>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </>
    );
}
export {App};
