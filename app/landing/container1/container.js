import fontStyleUtil from "@/app/util/fontStyle";
import React from "react";
import { motion, spring } from "framer-motion";
import Image from "next/image";

import icon_star80 from "public/asset/img/icons/star80.png";
import icon_globe80 from "public/asset/img/icons/globe80.png";
import icon_arrow from "public/asset/img/icons/Arrow.png";
import explosion from "public/asset/img/explosion.png";
import { useRouter } from "next/navigation";

export default function Container({}) {
    const router = useRouter();
    return (
        <div
            className="wrapper w-[128rem] mx-auto sm:w-[34rem]"
            id="cont1"
        >
            <div className="widebox flex justify-between sm:flex-col gap-[16rem] sm:gap-[2rem]">
                <div
                    className="textBox text-black100 m-0 font-en font-black text-[13rem] leading-[13rem] sm:text-[4rem] sm:leading-[4rem] sm:flex sm:flex-row sm:items-end sm:gap-[1rem]"
                    // style={fontStyleUtil("en", 13, 900, 13)}
                >
                    <motion.div
                        className="flex items-end m-0"
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
                        <div className="m-0">C</div>
                        <div className="flex flex-col m-0">
                            <div className="flex gap-[10px] sm:gap-[3px] justify-center">
                                <div className="circle w-[20px] h-[20px] bg-black100 rounded-full sm:w-[6px] sm:h-[6px]"></div>
                                <div className="circle w-[20px] h-[20px] bg-black100 rounded-full sm:w-[6px] sm:h-[6px]"></div>
                            </div>
                            <div className="m-0">O</div>
                        </div>
                        <div className="m-0">LORIZE</div>
                    </motion.div>
                    <motion.div
                        className="m-0"
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
                <div className="funcBox flex flex-col pt-[3rem] gap-[4rem] m-0 sm:pt-0 sm:gap-[2rem]">
                    <motion.div
                        className="w-[100%] h-[10.4rem] rounded-full vid flex items-center p-[1rem] sm:h-[7.5rem]"
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1.0,
                        }}
                    >
                        <div className="w-[82px] h-[82px] rounded-full bg-black100 backCircle m-0 sm:w-[6rem] sm:h-[6rem]">
                            <div className="triangle"></div>
                        </div>
                    </motion.div>
                    <div className="px-4 w-[47rem] sm:w-full">
                        <motion.p
                            className="phrase font-kr font-[600] text-[2rem] leading-[3rem] sm:text-[1.5rem] sm:leading-[2rem]"
                            // style={fontStyleUtil(
                            //     "kr",
                            //     2,
                            //     600,
                            //     3
                            // )}
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
                            className="phrase font-kr font-[200] text-[2rem] leading-[3rem] sm:text-[1.5rem] sm:leading-[2rem]"
                            // style={fontStyleUtil(
                            //     "kr",
                            //     2,
                            //     300,
                            //     3
                            // )}
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
            <div className="divider-Btn py-[3rem] flex gap-[6rem] items-center sm:gap-[3rem] sm:flex-col-reverse">
                <div className="Btn-recommend flex gap-[2rem] m-0 flex-[0.4] sm:flex-[1.0] sm:w-full">
                    <motion.button
                        className="Btn-around bg-transparent rounded-full w-full h-[5rem] border-[1px] border-black80 m-0 px-[20px] flex items-center cursor-pointer flex-[0.45] sm:h-[3.2rem] "
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
                        onClick={() => {
                            router.push("/products");
                        }}
                    >
                        <Image
                            alt="icon_star"
                            className="icon_star m-0 w-[20px] sm:w-[16px]"
                            src={icon_star80}
                        />
                        <motion.span
                            className="text-black80 font-kr font-[400] text-[1.8rem] leading-[2.7rem] sm:text-[1.2rem] sm:leading-[2.4rem]"
                            // style={fontStyleUtil(
                            //     "kr",
                            //     1.8,
                            //     400,
                            //     2.7
                            // )}
                        >
                            제품 둘러보기
                        </motion.span>
                    </motion.button>

                    <motion.button
                        className="Btn-around bg-transparent rounded-full w-full h-[5rem] border-[1px] border-black80 m-0 px-[20px] flex items-center cursor-pointer flex-[0.55] sm:h-[3.2rem] "
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
                        onClick={() => {
                            router.push("/request");
                        }}
                    >
                        <Image
                            alt="icon_globe"
                            className="icon_globe m-0 w-[20px] sm:w-[16px]"
                            src={icon_globe80}
                        />
                        <span
                            className="text-black80 font-kr font-[400] text-[1.8rem] leading-[2.4rem] sm:text-[1.2rem] sm:leading-[2.4rem]"
                            // style={fontStyleUtil(
                            //     "kr",
                            //     1.8,
                            //     400,
                            //     2.4
                            // )}
                        >
                            추천 컬러 알아보기
                        </span>
                    </motion.button>
                </div>
                <div className="divider-round w-[100%] flex-[0.6]">
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
                className="img-bottom-cont mt-[10rem] relative sm:mt-[3rem]"
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
                onClick={() => {
                    router.push("/products");
                }}
            >
                <div className="rounded-full bg-black100 w-[20rem] h-[20rem] absolute top-0 -translate-y-[50%] right-[13rem] z-0 flex justify-center items-center sm:w-[6rem] sm:h-[6rem] sm:right-[3rem]">
                    <Image
                        alt="icon_arrow"
                        src={icon_arrow}
                        // width={"57"}
                        className="m-0 cursor-pointer w-[57px] sm:w-[17px]"
                    />
                </div>
                <div className="explosion-image-cont w-[128rem] h-[72rem] overflow-hidden rounded-t-[12rem] flex items-end justify-end sm:w-[34rem] sm:rounded-t-[5rem] sm:h-[22rem]">
                    <Image
                        alt="explosion"
                        src={explosion}
                        priority
                        className="cursor-pointer object-cover"
                    />
                </div>
            </motion.div>
        </div>
    );
}
