import React, {FC} from 'react';
import {Redirect} from "react-router-dom";

const ProtectedRoute: FC = () => {
    if (localStorage.getItem('key') === 'success') {
        return (
            <div style={{
                height: 350,
                width: 950,
                margin: 10,
                borderRadius: 15,
                backgroundColor: "white"
            }}>
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