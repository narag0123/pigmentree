"use client";

import { usePathname } from "next/navigation";
import React, { useState, createContext } from "react";

//store 만든거
export const UseContext = createContext({});

//저장해서 쓸거
const UseProvider = ({ children }) => {
    const [isPage, setIsPage] = useState(usePathname());
    const [showItems, setShowItems] = useState([
        { name: "sample", toggle: true },
        { name: "single", toggle: false },
        { name: "package", toggle: false },
    ]);
    const [isProduct, setIsProduct] = useState("single");

    return (
        <UseContext.Provider
            value={{
                isPage,
                setIsPage,
                showItems,
                setShowItems,
                isProduct,
                setIsProduct,
            }}
        >
            {children}
        </UseContext.Provider>
    );
};
export default UseProvider;
