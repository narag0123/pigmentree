"use client";
import { product } from "@/app/data/product";
import { UseContext } from "@/app/store/store";
import fontStyleUtil from "@/app/util/fontStyle";
import translate from "@/app/util/translate";
import React, {
    Fragment,
    useContext,
    useEffect,
    useState,
} from "react";
import Image from "next/image";
import {
    AnimatePresence,
    easeInOut,
    motion,
} from "framer-motion";
import icon_filter from "public/asset/img/product/icons/icon_filter.png";
import icon_chevron from "public/asset/img/product/icons/icon_chevron.png";
import x_circle from "public/asset/img/product/icons/x_circle.png";
import { useRouter } from "next/navigation";

export default function Sort({ single, packages, bulk }) {
    const context = useContext(UseContext);
    const {
        showItems,
        setShowItems,
        isProduct,
        setIsProduct,
        isMobile,
        SetIsMobile,
    } = context;

    const router = useRouter();

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
    const [isRotate, setIsRotate] = useState(false);
    const product_array = data.filter(
        (e) =>
            (e.weight === 10 && e.type === "single") ||
            e.type === "bulk" ||
            e.type === "package"
    );

    const product_type = [
        ...new Set(product_array.map((name) => name.type)),
    ];

    const [toggleMobileMenu, setToggleMobileMenu] =
        useState(false);

    useEffect(() => {
        setData([...single, ...packages, ...bulk]);
    }, []);

    const returnByTypeNav = (param, index) => {
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
                            className="m-0 flex gap-[0.75rem]"
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
                            onClick={() => {
                                router.push(
                                    `products/${event?.color}`
                                );
                            }}
                        >
                            <span className="m-0">
                                {event.color.toUpperCase()}
                            </span>
                            <span className="m-0">|</span>
                            <span className="m-0 font-bold">
                                {translate(event.color)}
                            </span>
                        </motion.div>
                    ))}
            </motion.div>
        );
    };

    // 상품 네모 칸임
    const returnByTypeItems = (param, index) => {
        return (
            <>
                {product_array
                    .filter((e) => e.type === param)
                    .map((event, i) => (
                        <div
                            className="border-black100 border-[1px] w-[34rem] h-[43rem] flex flex-col items-center cursor-pointer"
                            key={i}
                            onClick={() => {
                                router.push(
                                    `products/${event?.color}`
                                );
                            }}
                        >
                            <div className="w-[calc(100%-2rem)] border-black100 border-[1px] m-[1rem] flex-[0.83] flex justify-center items-center">
                                <span className="text-[15px]">
                                    이미지 자리임
                                </span>
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
                                        event?.color?.toUpperCase()}
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
                                        {event.detail}
                                    </div>
                                    <div className="m-0">
                                        ￦ {event.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </>
        );
    };

    return (
        <>
            <div className="sort flex wrapper w-[128rem] py-[2rem] sm:w-[34rem] sm:justify-end">
                <div className="divider flex-[0.2] m-0 sm:hidden"></div>
                {!isMobile ? (
                    <div
                        className="flex m-0 gap-[2rem] flex-[0.8] 
                                font-kr font-normal text-[1.6rem] leading-[2rem] sm:text-[1.2rem] sm:leading-[1.2rem]"
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
                ) : (
                    <div
                        className="m-0"
                        onClick={() => {
                            setToggleMobileMenu(
                                !toggleMobileMenu
                            );
                        }}
                    >
                        <Image
                            src={icon_chevron}
                            alt="icon_chevron"
                            className={`w-[1.4rem]  ${
                                toggleMobileMenu &&
                                "rotate-180"
                            }
                            transition-all`}
                        />
                    </div>
                )}
                <AnimatePresence>
                    {toggleMobileMenu && (
                        <motion.div
                            className="fixed bottom-0 left-0 w-[100vw] h-[calc(100vh-11rem)] bg-[#ffffff] rounded-t-3xl p-[2rem]"
                            initial={{ y: 1000 }}
                            animate={{
                                y: 0,
                                transition: {
                                    type: easeInOut,
                                },
                            }}
                            exit={{ y: 1000 }}
                        >
                            <div
                                className="mx-auto w-[34rem] flex justify-end items-end sm:w-[34rem] sm:mx-auto pr-[1rem]"
                                onClick={() => {
                                    setToggleMobileMenu(
                                        !toggleMobileMenu
                                    );
                                }}
                            >
                                <Image
                                    src={x_circle}
                                    alt="x_circle"
                                    className={`w-[1.6rem]  ${
                                        toggleMobileMenu &&
                                        "rotate-180"
                                    }
                            transition-all m-0`}
                                />
                            </div>
                            <div>
                                <div className="mobile_nav flex-[0.2] m-0 border-black100 min-h-[100vh] pt-[2rem] sm:w-[34rem] sm:mx-auto">
                                    {product_type.map(
                                        (e, i) => (
                                            <div
                                                className="itemsList border-black80 border-b-[1px] py-[2rem] flex flex-col "
                                                key={e}
                                            >
                                                <div
                                                    className="itemTitle flex items-center justify-between pr-[1rem] m-0 cursor-pointer font-kr font-[700] text-[1.5rem] leading-[2rem]"
                                                    onClick={() => {
                                                        toggleHandler(
                                                            product[
                                                                i
                                                            ]
                                                                .state
                                                        );

                                                        setIsProduct(
                                                            product[
                                                                i
                                                            ]
                                                                .state
                                                        );
                                                    }}
                                                >
                                                    {translate(
                                                        e
                                                    )}
                                                    <div className="chevron w-[1rem] h-[.5rem] rotate-[180deg] m-0 ">
                                                        <Image
                                                            src={
                                                                icon_chevron
                                                            }
                                                            alt="icon_chevron"
                                                        />
                                                    </div>
                                                </div>
                                                <AnimatePresence>
                                                    {showItems[
                                                        i
                                                    ]
                                                        ?.toggle &&
                                                        returnByTypeNav(
                                                            e,
                                                            i
                                                        )}
                                                </AnimatePresence>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="filter border-black80 border-y-[1px] h-[5rem] flex flex-col justify-center sm:px-[3rem]">
                <div className="wrapper w-[128rem] flex items-center gap-[1rem] font-en font-normal text-[1.5rem] leading-[1.5rem] sm:w-full sm:text-[1.2rem]">
                    <Image
                        src={icon_filter}
                        alt="icon_filter"
                        className="m-0 w-[1.6rem] sm:w-[1.4rem]"
                    />
                    FILTER
                </div>
            </div>
            <div className="sort_bot flex wrapper w-[128rem] h-full sm:w-[100vw] sm:m-0 sm:mx-auto">
                {/* 옆 메뉴 START */}
                {!isMobile && (
                    <div className="nav flex-[0.2] m-0 border-black100 border-r-[1px] min-h-[100vh] sm:hidden">
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
                                    {translate(e)}
                                    <div className="chevron w-[1rem] h-[.5rem] rotate-[180deg] m-0 ">
                                        <Image
                                            src={
                                                icon_chevron
                                            }
                                            alt="icon_chevron"
                                        />
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {showItems[i]?.toggle &&
                                        returnByTypeNav(
                                            e,
                                            i
                                        )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                )}
                {/* 옆 메뉴 END */}
                {/* 우측 제품 메뉴 START */}
                <div className="content-right m-0 flex-[0.8] p-[2rem] grid grid-cols-3 sm:grid-cols-1 gap-[2rem] border-black100 sm:flex-[1.0]">
                    {product_type.map((e, i) => (
                        <Fragment key={i}>
                            <AnimatePresence>
                                {showItems[i].toggle &&
                                    returnByTypeItems(e, i)}
                            </AnimatePresence>
                        </Fragment>
                    ))}
                </div>
                {/* 우측 제품 메뉴 END */}
            </div>
        </>
    );
}
