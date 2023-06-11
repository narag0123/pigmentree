import fontStyleUtil from "@/app/util/fontStyle";
import React from "react";
import { motion, spring } from "framer-motion";
import Image from "next/image";

import icon_star80 from "public/asset/img/icons/star80.png";
import icon_globe80 from "public/asset/img/icons/globe80.png";
import icon_arrow from "public/asset/img/icons/Arrow.png";
import explosion from "public/asset/img/explosion.png";

export default function Container({}) {
    return (
        <div
            className="wrapper w-[128rem] mx-auto"
            id="cont1"
        >
            <div className="flex justify-between">
                <div
                    className="textBox text-black100 m-0"
                    style={fontStyleUtil("en", 13, 900, 13)}
                >
                    <motion.div
                        className="flex items-end"
                        initial={{
                            x: -100,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={spring}
                    >
                        <div>C</div>
                        <div className="flex flex-col">
                            <div className="flex gap-[10px] justify-center">
                                <div className="circle w-[20px] h-[20px] bg-black100 rounded-full"></div>
                                <div className="circle w-[20px] h-[20px] bg-black100 rounded-full"></div>
                            </div>
                            <div>O</div>
                        </div>
                        <div>LORIZE</div>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: -100,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            ...spring,
                            delay: 0.1,
                        }}
                    >
                        IDEAS
                    </motion.div>
                </div>
                <div className="funcBox flex flex-col pt-[3rem] w-[47.8rem] gap-[4rem] m-0">
                    <motion.div
                        className="w-[100%] h-[10.4rem] rounded-full vid flex items-center p-[1rem]"
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1.0,
                        }}
                    >
                        <div className="w-[82px] h-[82px] rounded-full bg-black100 backCircle m-0">
                            <div className="triangle"></div>
                        </div>
                    </motion.div>
                    <div className="px-4 w-[47rem]">
                        <motion.p
                            className="phrase"
                            style={fontStyleUtil(
                                "kr",
                                2,
                                600,
                                3
                            )}
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                        >
                            당신의 아이디어에 생명을 불어
                            넣어보세요!
                        </motion.p>
                        <motion.p
                            className="phrase"
                            style={fontStyleUtil(
                                "kr",
                                2,
                                300,
                                3
                            )}
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                delay: 0.1,
                            }}
                        >
                            감각적인 컬러와 최고의 질감으로
                            여러분이 만드는 작품의 훌륭한
                            조력자가 되어드리겠습니다.
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className="divider-Btn py-[3rem] flex gap-[6rem] items-center">
                <div className="Btn-recommend flex gap-[2rem]">
                    <motion.button
                        className="Btn-around bg-transparent rounded-full w-[23.1rem] h-[5rem] border-[1px] border-black80 m-0 px-[20px] flex items-center cursor-pointer"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 1000,
                        }}
                        whileHover={{
                            // scale: 1.1,
                            rotateZ: -10,
                        }}
                    >
                        <Image
                            alt="icon_star"
                            className="icon_star m-0 w-[20px]"
                            src={icon_star80}
                        />
                        <motion.span
                            className="text-black80"
                            style={fontStyleUtil(
                                "kr",
                                1.8,
                                400,
                                2.7
                            )}
                        >
                            제품 둘러보기
                        </motion.span>
                    </motion.button>

                    <motion.button
                        className="Btn-around bg-transparent rounded-full w-[29rem] h-[5rem] border-[1px] border-black80 m-0 px-[20px] flex items-center cursor-pointer"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 1000,
                        }}
                        whileHover={{ rotateZ: -10 }}
                    >
                        <Image
                            alt="icon_globe"
                            className="icon_globe m-0 w-[20px]"
                            src={icon_globe80}
                        />
                        <span
                            className="text-black80"
                            style={fontStyleUtil(
                                "kr",
                                1.8,
                                400,
                                2.4
                            )}
                        >
                            추천 컬러 알아보기
                        </span>
                    </motion.button>
                </div>
                <div className="divider-round w-[100%]">
                    <motion.div
                        className="divider-round border-y-[0.5px] border-black80 relative"
                        initial={{
                            width: 0,
                        }}
                        animate={{
                            width: "100%",
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                            type: "spring",
                            damping: 50,
                            stiffness: 500,
                        }}
                    >
                        <motion.div
                            className="circle-end rounded-full w-[5px] h-[5px] bg-black80 absolute left-0 -translate-y-2/4"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                            }}
                        ></motion.div>
                        <motion.div
                            className="circle-end rounded-full w-[5px] h-[5px] bg-black80 absolute top-[50%] left-[100%] -translate-y-2/4"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                            }}
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="img-bottom-cont  mt-[10rem]  relative"
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 1000,
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }}
            >
                <div className="rounded-full bg-black100 w-[20rem] h-[20rem] absolute top-0 -translate-y-[50%] right-[13rem] z-0 flex justify-center items-center">
                    <Image
                        alt="icon_arrow"
                        src={icon_arrow}
                        width={"57"}
                        className="m-0 cursor-pointer"
                    />
                </div>
                <div className="explosion-image-cont w-[128rem] h-[72rem] overflow-hidden rounded-t-[12rem] flex items-end justify-end">
                    <Image
                        alt="explosion"
                        src={explosion}
                        loading="lazy"
                        className="cursor-pointer object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
}
