import React, { useState, createContext } from 'react';
import banner_img_01 from '../images/banner_img_01.jpg'
import banner_img_02 from '../images/banner_img_02.jpg'
import banner_img_03 from '../images/banner_img_03.jpg'
import category_img_01 from '../images/category_img_01.jpg'
import category_img_02 from '../images/category_img_02.jpg'
import category_img_03 from '../images/category_img_03.jpg'


// Create a context
export const MainContext = createContext();

// Create a provider component
export const MainProvider = ({ children }) => {    
    const category = [
        {
            id:1,
            name:"First",
            image:category_img_01
        },
        {
            id:2,
            name:"Second",
            image:category_img_02
        },
        {
            id:3,
            name:"Third",
            image:category_img_03
        }
    ]
    return (
        <MainContext.Provider value={{ category }}>
            {children}
        </MainContext.Provider>
    );
};