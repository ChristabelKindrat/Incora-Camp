import React, {FC} from 'react';
import {Link} from "react-router-dom";

import "./Links.style.css";

const Links: FC = () => {
    const style = {padding: 10, textDecoration: 'none'}
    return (
        <div className={'links'}>
            <Link to={"/tasks"} style={style}>Task</Link>
            <Link to={"/pagination"} style={style}>Pagination</Link>
            <Link to={"/setting"} style={style}> Setting</Link>

        </div>
    );
}

export {Links};