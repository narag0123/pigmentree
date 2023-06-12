"use client";
import React, { useContext } from "react";
import fontStyleUtil from "../util/fontStyle";
import Image from "next/image";
import {
    AnimatePresence,
    motion,
    spring,
} from "framer-motion";

import icon_filter from "public/asset/img/product/icons/icon_filter.png";
import icon_chevron from "public/asset/img/product/icons/icon_chevron.png";
import { UseContext } from "../store/store";
import { product } from "../data/product";

function Product() {
    const context = useContext(UseContext);
    const { showItems, setShowItems } = context;

    const toggleHandler = (state) => {
        const index = product.findIndex(
            (e) => e.state === state
        );
        if (index !== -1) {
            setShowItems((prevShowItems) => {
                const updatedShowItems = [...prevShowItems];
                updatedShowItems[index] = {
                    ...updatedShowItems[index],
                    toggle: !updatedShowItems[index].toggle,
                };
                return updatedShowItems;
            });
        }
    };

    return (
        <div className="product min-h-[100vh] h-full">
            <div className="sort flex wrapper w-[128rem] py-[2rem]">
                <div className="divider flex-[0.2] m-0"></div>
                <div
                    className="flex m-0 gap-[2rem] flex-[0.8]"
                    style={fontStyleUtil("kr", 1.6, 400, 2)}
                >
                    {product.map((e, i) => (
                        <div
                            key={e.id}
                            className={`m-0 ${
                                showItems[i].toggle &&
                                "font-bold"
                            }`}
                            onClick={() => {
                                toggleHandler(
                                    product[i].state
                                );
                            }}
                        >
                            {e.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter border-black80 border-y-[1px] h-[5rem] flex flex-col justify-center">
                <div
                    className="wrapper w-[128rem] flex items-center gap-[1rem]"
                    style={fontStyleUtil(
                        "en",
                        1.5,
                        400,
                        1.5
                    )}
                >
                    <Image
                        src={icon_filter}
                        alt="icon_filter"
                        className="m-0 w-[1.6rem]"
                    />
                    FILTER
                </div>
            </div>
            <div className="sort flex wrapper w-[128rem]">
                <div className="nav flex-[0.2] m-0 border-black100 border-r-[1px] h-[100vh]">
                    {product.map((e, i) => (
                        <div
                            className="itemsList border-black80 border-b-[1px] py-[2rem] flex flex-col"
                            key={e.id}
                        >
                            <div
                                className="itemTitle flex items-center justify-between pr-[3rem] m-0 cursor-pointer"
                                onClick={() => {
                                    toggleHandler(
                                        product[i].state
                                    );
                                }}
                                style={fontStyleUtil(
                                    "kr",
                                    1.5,
                                    700,
                                    2
                                )}
                            >
                                {e.name}
                                <div className="chevron w-[1rem] h-[.5rem] rotate-[180deg] m-0 ">
                                    <Image
                                        src={icon_chevron}
                                        alt="icon_chevron"
                                    />
                                </div>
                            </div>
                            <AnimatePresence>
                                {showItems[i].toggle && (
                                    <motion.div
                                        className="items flex flex-col gap-[2rem] m-0 cursor-pointer h-fit"
                                        initial={{
                                            clipPath:
                                                "inset(0% 0% 100% 0%)",
                                            height: "0",
                                            marginTop: "0",
                                        }}
                                        animate={{
                                            clipPath:
                                                "inset(0% 0% 0% 0%)",
                                            height:
                                                product[i]
                                                    .list
                                                    .length *
                                                    3.7 -
                                                2 +
                                                "rem",
                                            marginTop:
                                                "2rem",
                                            transition: {},
                                        }}
                                        exit={{
                                            clipPath:
                                                "inset(0% 0% 100% 0%)",
                                            height: "0",
                                            marginTop: "0",
                                        }}
                                        style={{}}
                                    >
                                        {product[
                                            i
                                        ].list.map(
                                            (e, n) => (
                                                // 세부 품목
                                                <motion.div
                                                    key={
                                                        e.id
                                                    }
                                                    className="m-0"
                                                    style={fontStyleUtil(
                                                        "kr",
                                                        1.4,
                                                        400,
                                                        1.7
                                                    )}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -100,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                        transition:
                                                            {
                                                                type: "spring",
                                                                bounce: 0.5,
                                                                delay:
                                                                    0.05 *
                                                                    n,
                                                            },
                                                    }}
                                                >
                                                    {e.item}
                                                </motion.div>
                                            )
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                <div className="content m-0 flex-[0.8] p-[2rem]">
                    right
                    <div
                        className="bg-black100 w-[10rem] h-[10rem]"
                        style={{
                            clipPath:
                                "inset(0% 0% 50px 0%)",
                        }}
                    >
                        123
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
