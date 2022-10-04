import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Links: FC = () => {
    const style = {padding: 10, textDecoration: 'none'}
    return (
        <div style={{
            height: 350,
            width: 300,
            margin: 10,
            borderRadius: 15,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column"

        }}>
            <Link to={"/tasks"} style={style}>Task</Link>
            <Link to={"/pagination"} style={style}>Pagination</Link>
            <Link to={"/setting"} style={style}> Setting</Link>

        </div>
    );
}

export {Links};