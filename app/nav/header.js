"use client";
import React, {
    useState,
    useContext,
    useEffect,
} from "react";
import fontStyleUtil from "../util/fontStyle";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { UseContext } from "../store/store";
import { useMediaQuery } from "react-responsive";

function Header() {
    const context = useContext(UseContext);
    const {
        isPage,
        setIsPage,
        isMobile,
        setIsMobile,
        queryMobile,
    } = context;

    const navMenu = [
        {
            id: 0,
            name: "About Us",
            value: "aboutUs",
        },
        {
            id: 1,
            name: "Products",
            value: "products",
        },
        // {
        //     id: 2,
        //     name: "Request",
        //     value: "request",
        // },
        {
            id: 3,
            name: "Contact Us",
            value: "contactUs",
        },
    ];

    // const queryMobile = useMediaQuery({
    //     query: "(max-width: 649px)",
    // });

    return (
        <div className="header wrapper w-[128rem] sm:w-[340px] mx-auto py-[4rem] flex justify-between">
            <Link
                href={"/"}
                className="logo m-0"
                onClick={() => {
                    setIsPage("/");
                }}
            >
                <motion.p
                    className="font-[Proxima-nova] font-extrabold text-[30px] leading-[30px]"
                    whileHover={{
                        scale: 1.2,
                    }}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 1000,
                    }}
                    // style={fontStyleUtil("en", 3, 800, 3)}
                >
                    Pigmentree
                </motion.p>
            </Link>

            {!queryMobile ? (
                <div
                    className="nav flex gap-[66px] m-0 sm:hidden"
                    style={fontStyleUtil(
                        "en",
                        1.8,
                        300,
                        2.4
                    )}
                >
                    {navMenu.map((e, i) => (
                        <Link
                            className="relative"
                            href={`/${e.value}`}
                            key={e.id}
                            onClick={() => {
                                setIsPage("/" + e.value);
                            }}
                        >
                            <motion.p
                                whileHover={{
                                    fontSize: "20px",
                                }}
                            >
                                {e.name}
                            </motion.p>
                            <AnimatePresence>
                                {isPage ===
                                "/" + e.value ? (
                                    <motion.div
                                        className="rounded-full w-[0.8rem] h-[0.8rem] border-[1px] border-black100 mt-[1rem]"
                                        initial={{
                                            opacity: 0,
                                            y: -10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -10,
                                        }}
                                    ></motion.div>
                                ) : (
                                    <div className="w-[0.8rem] h-[0.8rem] mt-[1rem] spacer"></div>
                                )}
                            </AnimatePresence>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="hamburger flex flex-col gap-[3px] m-0 justify-center items-center">
                    <div className="w-[20px] h-[2px] bg-[#171717]"></div>
                    <div className="w-[20px] h-[2px] bg-[#171717]"></div>
                    <div className="w-[20px] h-[2px] bg-[#171717]"></div>
                </div>
            )}
        </div>
    );
}

export default Header;
