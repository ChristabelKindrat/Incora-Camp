import React, {FC} from 'react';
import {Redirect} from "react-router-dom";

import "./ProtectedRoute.style.css";

const ProtectedRoute: FC = () => {
    if (localStorage.getItem('key') === 'success') {
        return (
            <div className={'protectedRoute'}>
                <p style={{padding: 20}}>Settings information</p>
            </div>
        )
    } else {
        return (
            <Redirect to={'/'}/>
        )
    }
}
export {ProtectedRoute};