import React, { useContext } from 'react';
import { MainContext } from "../context/MainContext";

function Test() {
    const { category } = useContext(MainContext);
    console.log(category)
    return (
        <>
            
        </>
    );
}

export default Test;
