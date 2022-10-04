import React, {FC} from 'react';


const Footer: FC = () => {
    return (
        <div style={{
            height: 100,
            margin: 10,
            borderRadius: 15,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <p>Contact info</p>
        </div>
    );
}
export {Footer};