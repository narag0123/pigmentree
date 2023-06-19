"use client";
import { product } from "@/app/data/product";
import { UseContext } from "@/app/store/store";
import fontStyleUtil from "@/app/util/fontStyle";
import React, {
    useContext,
    useEffect,
    useState,
} from "react";
import Image from "next/image";
import {
    AnimatePresence,
    motion,
    spring,
} from "framer-motion";
import icon_filter from "public/asset/img/product/icons/icon_filter.png";
import icon_chevron from "public/asset/img/product/icons/icon_chevron.png";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Sort({ single, packages, sample }) {
    const context = useContext(UseContext);
    const {
        showItems,
        setShowItems,
        isProduct,
        setIsProduct,
    } = context;

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

    const toggleOneTimeHandler = (state) => {
        const index = product.findIndex(
            (e) => e.state === state
        );
        if (index !== -1) {
            setShowItems((prevShowItems) => {
                const updatedShowItems = [...prevShowItems];
                updatedShowItems[index] = {
                    ...updatedShowItems[index],
                    toggle: true,
                };
                return updatedShowItems;
            });
        }
    };

    const [data, setData] = useState([]);
    const product_array = data.filter(
        (e) =>
            (e.weight === 10 && e.type === "단품") ||
            e.type === "샘플" ||
            e.type === "패키지"
    );
    const product_type = [
        ...new Set(product_array.map((name) => name.type)),
    ];

    useEffect(() => {
        setData([...single, ...sample, ...packages]);
    }, []);

    const returnByType = (param, index) => {
        return (
            <motion.div
                key={index}
                className="items flex flex-col gap-[2rem] m-0 cursor-pointer h-fit"
                initial={{
                    clipPath: "inset(0% 0% 100% 0%)",
                    height: "0",
                    marginTop: "0",
                }}
                animate={{
                    clipPath: "inset(0% 0% 0% 0%)",
                    height:
                        product_array.filter(
                            (e) => e.type === param
                        ).length *
                            3.7 -
                        2 +
                        "rem",
                    marginTop: "2rem",
                    transition: {},
                }}
                exit={{
                    clipPath: "inset(0% 0% 100% 0%)",
                    height: "0",
                    marginTop: "0",
                }}
            >
                {product_array
                    .filter((e) => e.type === param)
                    .map((event, i) => (
                        <motion.div
                            key={event._id}
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
                                transition: {
                                    type: "spring",
                                    bounce: 0.5,
                                    // delay: 0.05 * n,
                                },
                            }}
                        >
                            {event.color}
                        </motion.div>
                    ))}
            </motion.div>
        );
    };

    return (
        <>
            <div className="sort flex wrapper w-[128rem] py-[2rem]">
                <div className="divider flex-[0.2] m-0"></div>
                <div
                    className="flex m-0 gap-[2rem] flex-[0.8]"
                    style={fontStyleUtil("kr", 1.6, 400, 2)}
                >
                    {product.map((e, i) => (
                        <div
                            key={e.id}
                            className={`m-0 cursor-pointer ${
                                isProduct ===
                                    product[i].state &&
                                "font-bold"
                            }`}
                            onClick={() => {
                                toggleOneTimeHandler(
                                    product[i].state
                                );

                                setIsProduct(
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
            <div className="sort flex wrapper w-[128rem] h-full">
                <div className="nav flex-[0.2] m-0 border-black100 border-r-[1px] min-h-[100vh]">
                    {product_type.map((e, i) => (
                        <div
                            className="itemsList border-black80 border-b-[1px] py-[2rem] flex flex-col"
                            key={e}
                        >
                            <div
                                className="itemTitle flex items-center justify-between pr-[3rem] m-0 cursor-pointer"
                                onClick={() => {
                                    toggleHandler(
                                        product[i].state
                                    );

                                    setIsProduct(
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
                                {e}
                                <div className="chevron w-[1rem] h-[.5rem] rotate-[180deg] m-0 ">
                                    <Image
                                        src={icon_chevron}
                                        alt="icon_chevron"
                                    />
                                </div>
                            </div>
                            <AnimatePresence>
                                {showItems[i].toggle &&
                                    returnByType(e, i)}
                            </AnimatePresence>
                        </div>
                    ))}

                    {/* <div className="h-full bg-black60 spacer">
                        123
                    </div> */}
                </div>
                <div className="content-right m-0 flex-[0.8] p-[2rem] grid grid-cols-3 gap-[2rem] border-black100 ">
                    {/* {product.map(
                        (e, i) =>
                            isProduct ===
                                product[i].state &&
                            product[i].list.map((e, i) => (
                                <div
                                    className="border-black100 border-[1px] w-[32rem] h-[43rem] flex flex-col items-center"
                                    key={i}
                                >
                                    <div className="w-[calc(100%-2rem)] border-black100 border-[1px] m-[1rem] flex-[0.83]">
                                        이미지 자리임
                                    </div>
                                    <div className="w-full border-black100 border-t-[1px] flex flex-col justify-center items-center flex-[0.17] p-[1rem] gap-[.2rem]">
                                        <div
                                            className="m-0 w-full"
                                            style={fontStyleUtil(
                                                "en",
                                                1.8,
                                                900,
                                                2.4
                                            )}
                                        >
                                            MICA{" "}
                                            {" " + e.eName}
                                        </div>
                                        <div
                                            className="flex justify-between m-0 w-full"
                                            style={fontStyleUtil(
                                                "en",
                                                1.8,
                                                400,
                                                2
                                            )}
                                        >
                                            <div className="m-0">
                                                {e.tags}
                                            </div>
                                            <div className="m-0">
                                                ￦{" "}
                                                {e.price10.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    )} */}
                    {product_array.map((e, i) => (
                        <div
                            className="border-black100 border-[1px] w-[32rem] h-[43rem] flex flex-col items-center"
                            key={i}
                        >
                            <div className="w-[calc(100%-2rem)] border-black100 border-[1px] m-[1rem] flex-[0.83]">
                                이미지 자리임
                            </div>
                            <div className="w-full border-black100 border-t-[1px] flex flex-col justify-center items-center flex-[0.17] p-[1rem] gap-[.2rem]">
                                <div
                                    className="m-0 w-full"
                                    style={fontStyleUtil(
                                        "en",
                                        1.8,
                                        900,
                                        2.4
                                    )}
                                >
                                    MICA{" "}
                                    {" " +
                                        e?.color?.toUpperCase()}
                                </div>
                                <div
                                    className="flex justify-between m-0 w-full"
                                    style={fontStyleUtil(
                                        "en",
                                        1.8,
                                        400,
                                        2
                                    )}
                                >
                                    <div className="m-0">
                                        {e.detail}
                                    </div>
                                    <div className="m-0">
                                        ￦ {e.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}