import React from "react";
import { motion, spring } from "framer-motion";
import fontStyleUtil from "@/app/util/fontStyle";
import Image from "next/image";

import red from "public/asset/img/Red.png";
import red_grey from "public/asset/img/RedGrey.png";
import orange from "public/asset/img/Orange.png";
import orange_grey from "public/asset/img/OrangeGrey.png";
import green from "public/asset/img/Green.png";
import green_grey from "public/asset/img/GreenGrey.png";
import blue from "public/asset/img/Blue.png";
import blue_grey from "public/asset/img/BlueGrey.png";
import purple from "public/asset/img/Purple.png";
import purple_grey from "public/asset/img/PurpleGrey.png";

export default function BestService({
    isHover,
    setIsHover,
}) {
    return (
        <div className="flex flex-col bestService">
            <div className="title flex justify-between gap-[8rem] mb-[1rem]">
                <motion.p
                    style={fontStyleUtil(
                        "en",
                        7.2,
                        900,
                        8.8
                    )}
                    className="text-black20"
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
                    style={fontStyleUtil("en", 2, 400, 3)}
                    className="text-black20 flex-[1] flex items-center"
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
                <div className="flex gap-[3rem]">
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
                            setIsHover("red");
                        }}
                        onMouseLeave={() => {
                            setIsHover("none");
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.3,
                            }}
                        >
                            <div className="absolute top-0 left-0 bg-[black] opacity-50 w-full h-full"></div>
                            <Image
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
                            delay: 0.3,
                        }}
                        onMouseEnter={() => {
                            setIsHover("orange");
                        }}
                        onMouseLeave={() => {
                            setIsHover("none");
                        }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.3,
                            }}
                        >
                            <Image
                                alt="orange_grey"
                                src={
                                    isHover === "orange"
                                        ? orange
                                        : orange_grey
                                }
                                height={340}
                                className="flex-[1.0]"
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="flex gap-[3rem]">
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
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.3,
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
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.3,
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
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.3,
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