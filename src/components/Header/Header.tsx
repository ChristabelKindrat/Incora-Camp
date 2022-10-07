import React, {FC} from 'react';
import {Button} from "@mui/material";

import "./Header.style.css";

const Header:FC =() =>{
    return (
        <div className={'header'}>
            <Button onClick={() => {
                localStorage.setItem('key', 'success')
            }}>Sing in
            </Button>
        </div>
    );
}
export {Header};

