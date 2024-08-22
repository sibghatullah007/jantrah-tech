import React, { useState, createContext } from 'react';
import banner_img_01 from '../images/banner_img_01.jpg'
import banner_img_02 from '../images/banner_img_02.jpg'
import banner_img_03 from '../images/banner_img_03.jpg'
import category_img_01 from '../images/category_img_01.jpg'
import category_img_02 from '../images/category_img_02.jpg'
import category_img_03 from '../images/category_img_03.jpg'
import feature_prod_01 from '../images/feature_prod_01.jpg'
import feature_prod_02 from '../images/feature_prod_02.jpg'
import feature_prod_03 from '../images/feature_prod_03.jpg'


// Create a context
export const MainContext = createContext();

// Create a provider component
export const MainProvider = ({ children }) => {    
    const category = [
        {
            id:"c1",
            name:"First",
            image:category_img_01
        },
        {
            id:"c2",
            name:"Second",
            image:category_img_02
        },
        {
            id:"c3",
            name:"Third",
            image:category_img_03
        }
    ]
    const featureProd = [
        {
            id:"f1",
            name:"First",
            price:"250",
            ratings:2,
            reviews:19,
            description:"This is the great featured product provided by jtech",
            image:feature_prod_01
        },
        {
            id:"f2",
            name:"Second",
            price:"300",
            ratings:5,
            reviews:21,
            description:"This is the great featured product provided by jtech",
            image:feature_prod_02
        },
        {
            id:"f3",
            name:"Third",
            price:"500",
            ratings:3,
            reviews:22,
            description:"This is the great featured product provided by jtech",
            image:feature_prod_03
        }
    ]
    return (
        <MainContext.Provider value={{ category, featureProd }}>
            {children}
        </MainContext.Provider>
    );
};