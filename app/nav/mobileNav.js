"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { UseContext } from "../store/store";
import { AnimatePresence, motion } from "framer-motion";

function MobileNav({ navMenu }) {
    const context = useContext(UseContext);
    const { isNavOpen, setIsNavOpen } = context;

    return (
        <motion.div
            initial={{ x: -100 + "vw" }}
            animate={{
                x: 0,
                transition: {
                    duration: 0.5,
                    ease: [0, 0.25, 0.1, 0.9],
                },
            }}
            exit={{
                x: 105 + "vw",
            }}
            className={
                "mobileNav touch-pan-x fixed overflow-hidden top-0 left-0 z-[100] bg-primary60 w-[100vw] h-[100vh] flex flex-col justify-center gap-[3rem] pb-[7rem] "
            }
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: -30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 },
                }}
            >
                <Link
                    className="font-en font-black text-[2.4rem] leading-[3rem]
                    "
                    href={`/`}
                    onClick={() => {
                        setIsNavOpen(false);
                    }}
                >
                    HOME
                </Link>
            </motion.div>
            {navMenu.map((e, i) => (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.1 + 0.1 * i,
                        },
                    }}
                    key={i}
                >
                    <Link
                        className="font-en font-black text-[2.4rem] leading-[3rem] "
                        href={`/${e.value}`}
                        onClick={() => {
                            setIsNavOpen(false);
                        }}
                    >
                        {e.name.toUpperCase()}
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default MobileNav;
