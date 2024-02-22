"use client";
import React, { useContext } from "react";
import { motion, spring } from "framer-motion";
import Image from "next/image";

import red from "public/asset/img/Red.png";
import red_grey from "public/asset/img/RedGrey.png";
import other from "public/asset/img/Orange.png";
import other_grey from "public/asset/img/OrangeGrey.png";
import green from "public/asset/img/Green.png";
import green_grey from "public/asset/img/GreenGrey.png";
import blue from "public/asset/img/Blue.png";
import blue_grey from "public/asset/img/BlueGrey.png";
import purple from "public/asset/img/Purple.png";
import purple_grey from "public/asset/img/PurpleGrey.png";
// import { useMediaQuery } from "react-responsive";
import { UseContext } from "@/app/store/store";

export default function BestService({
    isHover,
    setIsHover,
}) {
    const context = useContext(UseContext);
    const { isMobile, setIsMobile } = context;

    return (
        <div className="flex flex-col bestService">
            <div className="title flex justify-between gap-[8rem] mb-[1rem] sm:flex-col sm:gap-[2rem]">
                <motion.p
                    className="text-black20 font-en font-black text-[7.2rem] leading-[8.8rem] sm:text-[4rem] sm:leading-[4rem]"
                    initial={{
                        opacity: 0,
                        y: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                    }}
                >
                    BEST SERVICE
                </motion.p>
                <motion.p
                    className="text-black20 flex-[1] flex items-center font-en font-[400] text-[2rem] leading-[3rem] sm:text-[1.5rem] sm:leading-[2.4rem]"
                    initial={{
                        opacity: 0,
                        sclae: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.4,
                        duration: 0.5,
                    }}
                >
                    섬세한 예술가인 여러분을 위하여 최적의
                    서비스를 제공해 드립니다. 여러가지
                    샘플의 실제 컬러를 RGB, CMYK, HSL 등
                    고객이 사용하시는 분야의 색상계에 맞춰
                    정보를 드립니다
                </motion.p>
            </div>
            <div className="image-cont flex flex-col gap-[3rem]">
                <div className="flex gap-[3rem] sm:gap-0">
                    <motion.div
                        className="relative overflow-hidden cursor-pointer w-[34rem] sm:hidden"
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 200,
                            delay: 0.2,
                        }}
                        onMouseEnter={() => {
                            setIsHover("red");
                        }}
                        onMouseLeave={() => {
                            setIsHover("none");
                        }}
                        whileHover={"hover"}
                    >
                        <motion.div
                            className="absolute top-1/2 left-1/2 z-10 bg-black100 text-primary100 -translate-x-1/2 -translate-y-1/2 px-[5rem] py-[1rem]
                            font-en font-black text-[4.4rem] leading-[5rem] shadow-[10px_10px_0]
                            "
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transition: {
                                        delay: 0.1,
                                    },
                                },
                            }}
                        >
                            RED
                        </motion.div>
                        <motion.div
                            className="flex justify-center items-center"
                            variants={{
                                hover: { scale: 1.3 },
                            }}
                        >
                            <div className="absolute top-0 left-0 bg-[black] opacity-50 w-full h-full"></div>
                            <Image
                                className="sm:hidden"
                                alt="red_grey"
                                src={
                                    isHover === "red"
                                        ? red
                                        : red_grey
                                }
                                width={340}
                                height={340}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative overflow-hidden cursor-pointer h-[34rem] w-[91rem] sm:w-[34rem]"
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 200,
                            delay: 0.3,
                        }}
                        onMouseEnter={() => {
                            setIsHover("other");
                        }}
                        onMouseLeave={() => {
                            setIsHover("none");
                        }}
                        whileHover={"hover"}
                    >
                        <motion.div
                            className="absolute top-1/2 left-1/2 z-10 bg-black100 text-primary100 -translate-x-1/2 -translate-y-1/2 px-[5rem] py-[1rem]
                            font-en font-black text-[4.4rem] leading-[5rem] shadow-[10px_10px_0]
                            sm:px-0 sm:py-0 "
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transition: {
                                        delay: 0.1,
                                    },
                                },
                            }}
                        >
                            {!isMobile ? "OTHER" : ""}
                        </motion.div>

                        <motion.div
                            variants={{
                                hover: {
                                    scale: 1.3,
                                },
                            }}
                        >
                            <Image
                                alt="other_grey"
                                src={
                                    !isMobile &&
                                    isHover !== "other"
                                        ? other_grey
                                        : other
                                }
                                // height={340}
                                className="flex-[1.0] h-[34rem] object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="flex gap-[3rem] sm:hidden">
                    <motion.div
                        className="relative overflow-hidden cursor-pointer"
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 200,
                            delay: 0.5,
                        }}
                        onMouseEnter={() => {
                            setIsHover("green");
                        }}
                        onMouseLeave={() => {
                            setIsHover("none");
                        }}
                        whileHover={"hover"}
                    >
                        <motion.div
                            className="absolute top-1/2 left-1/2 z-10 bg-black100 text-primary100 -translate-x-1/2 -translate-y-1/2 px-[5rem] py-[1rem]
                            font-en font-black text-[4.4rem] leading-[5rem] shadow-[10px_10px_0]                           
                            "
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transition: {
                                        delay: 0.1,
                                    },
                                },
                            }}
                        >
                            GREEN
                        </motion.div>
                        <motion.div
                            variants={{
                                hover: { scale: 1.3 },
                            }}
                            transition={spring}
                        >
                            <Image
                                alt="green_grey"
                                src={
                                    isHover === "green"
                                        ? green
                                        : green_grey
                                }
                                width={340}
                                height={340}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative overflow-hidden w-[34rem] h-[34rem] cursor-pointer"
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 200,
                            delay: 0.4,
                        }}
                        onMouseEnter={() => {
                            setIsHover("blue");
                        }}
                        onMouseLeave={() => {
                            setIsHover("none");
                        }}
                        whileHover={"hover"}
                    >
                        <motion.div
                            className="absolute top-1/2 left-1/2 z-10 bg-black100 text-primary100 -translate-x-1/2 -translate-y-1/2 px-[5rem] py-[1rem]
                            font-en font-black text-[4.4rem] leading-[5rem] shadow-[10px_10px_0]
                            "
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transition: {
                                        delay: 0.1,
                                    },
                                },
                            }}
                        >
                            BLUE
                        </motion.div>
                        <motion.div
                            variants={{
                                hover: {
                                    scale: 1.3,
                                },
                            }}
                            transition={spring}
                        >
                            <Image
                                alt="blue_grey"
                                src={
                                    isHover === "blue"
                                        ? blue
                                        : blue_grey
                                }
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative overflow-hidden cursor-pointer"
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 200,
                            delay: 0.2,
                        }}
                        onMouseEnter={() => {
                            setIsHover("purple");
                        }}
                        onMouseLeave={() => {
                            setIsHover("none");
                        }}
                        whileHover={"hover"}
                    >
                        <motion.div
                            className="absolute top-1/2 left-1/2 z-10 bg-black100 text-primary100 -translate-x-1/2 -translate-y-1/2 px-[5rem] py-[1rem]
                            font-en font-black text-[4.4rem] leading-[5rem] shadow-[10px_10px_0]
                            "
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transition: {
                                        delay: 0.1,
                                    },
                                },
                            }}
                        >
                            PURPLE
                        </motion.div>
                        <motion.div
                            variants={{
                                hover: {
                                    scale: 1.3,
                                },
                            }}
                        >
                            <Image
                                alt="purple_grey"
                                src={
                                    isHover === "purple"
                                        ? purple
                                        : purple_grey
                                }
                                height={340}
                                className="flex-[1.0]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
