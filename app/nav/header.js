"use client";
import React, { useState, useContext } from "react";
import fontStyleUtil from "../util/fontStyle";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { UseContext } from "../store/store";
import { usePathname } from "next/navigation";

function Header() {
    const context = useContext(UseContext);
    const { isPage, setIsPage } = context;
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

    return (
        <div className="header wrapper w-[128rem] mx-auto py-[4rem] flex justify-between">
            <Link
                href={"/"}
                className="logo m-0"
                onClick={() => {
                    setIsPage("/");
                }}
            >
                <motion.p
                    whileHover={{
                        scale: 1.2,
                    }}
                    transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 1000,
                    }}
                >
                    Pigmentree
                </motion.p>
            </Link>

            <div
                className="nav flex gap-[66px] m-0"
                style={fontStyleUtil("en", 1.8, 300, 2.4)}
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
                            {isPage === "/" + e.value ? (
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
        </div>
    );
}

export default Header;
