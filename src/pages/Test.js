import React, { useContext } from 'react';
import { MainContext } from "../context/MainContext";
import { Link } from 'react-router-dom';

function Test() {
    const { featureProd } = useContext(MainContext);
    console.log(featureProd)
    return (
        <>
        </>
    );
}

export default Test;
