import React, {FC} from 'react';
import {Button} from "@mui/material";

const Header:FC =() =>{
    return (
        <div style={{
            height: 100,
            margin: 10,
            borderRadius: 15,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
        }}>
            <Button style={{
                marginRight: 30,
            }} onClick={() => {
                localStorage.setItem('key', 'success')
            }}>Sing in
            </Button>
        </div>
    );
}
export {Header};

