"use client";

import { usePathname } from "next/navigation";
import React, {
    useState,
    createContext,
    useEffect,
} from "react";
import { useMediaQuery } from "react-responsive";

//store 만든거
export const UseContext = createContext({});

//저장해서 쓸거
const UseProvider = ({ children }) => {
    const [isPage, setIsPage] = useState(usePathname());
    const [showItems, setShowItems] = useState([
        { name: "single", toggle: true },
        { name: "package", toggle: false },
        { name: "bulk", toggle: false },
    ]);
    const [isProduct, setIsProduct] = useState("single");

    const [isMobile, setIsMobile] = useState(
        window.innerWidth
    );

    const queryMobile = useMediaQuery({
        query: "(max-width: 649px)",
    });

    return (
        <UseContext.Provider
            value={{
                isPage,
                setIsPage,
                showItems,
                setShowItems,
                isProduct,
                setIsProduct,
                isMobile,
                setIsMobile,
                queryMobile,
            }}
        >
            {children}
        </UseContext.Provider>
    );
};
export default UseProvider;
