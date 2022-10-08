import React, {FC} from 'react';
import './App.css';
import './components/Pagination/Pagination';
import {Switch, Route} from "react-router-dom";

import {Pagination} from './components';
import {Tasks} from "./components";
import {ProtectedRoute} from "./components";
import {Header} from "./components";
import {Footer} from "./components";
import {Links} from "./pages";

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
                            <Pagination activePage={1} perPage={5} withActions={true} totalItems={26}
                                         classes={{btn: 'Pagination_container', activeBtn: "active"}}/>
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
