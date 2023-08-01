"use client";
import Image from "next/image";
import React from "react";
import fontStyleUtil from "@/app/util/fontStyle";
import { motion, easeInOut } from "framer-motion";
import aboutUsMain from "public/asset/img/aboutUs/aboutUsMain.png";

export default function Container1() {
    return (
        <div className="wrapper w-[128rem] flex justify-between items-end sm:w-full sm:px-[2.5rem] sm:flex-col">
            <div className="w-[65rem] m-0 flex flex-col gap-[10rem] sm:w-full sm:gap-[4rem]">
                <div className="title flex flex-col gap-[2rem]">
                    <motion.div
                        className="flex items-center gap-[2rem] title m-0"
                        initial={{
                            x: -30,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                easeInOut,
                            },
                        }}
                    >
                        <div className="hr w-[18rem] border-[0.5px] border-black80 relative m-0 sm:w-[16rem]">
                            <div className="circle w-[.5rem] h-[.5rem] rounded-full bg-black100 absolute top-[50%] left-[100%] -translate-y-[50%]"></div>
                        </div>
                        <div className="m-0 font-en font-[700] text-[1.5rem] leading-[1.5rem] sm:text-[1.2rem]">
                            BE CREATIVE
                        </div>
                    </motion.div>
                    <motion.div
                        className="font-en font-[900] text-[8rem] leading-[8rem] sm:text-[4rem] sm:leading-[4rem]"
                        initial={{
                            x: -30,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.2,
                                easeInOut,
                            },
                        }}
                    >
                        WE ARE PIGMENTREE !
                    </motion.div>
                </div>
                <div
                    className="font-kr text-[2rem] leading-[3rem] sm:text-[1.8rem]"
                    // style={fontStyleUtil("kr", 2, 400, 3)}
                >
                    <motion.p
                        initial={{
                            x: -30,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.3,
                                easeInOut,
                            },
                        }}
                    >
                        <b>PIGMENTREE</b>는 염료(마이카)
                        판매를 전문으로 하는 온라인
                        상점입니다. 저희는 고품질의 염료를
                        제공하여 예술과 공예, 화장품 등
                        다양한 분야에서 창의적인 작업을
                        돕고자 합니다.
                    </motion.p>
                    <br />
                    <motion.p
                        initial={{
                            x: -30,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                                easeInOut,
                            },
                        }}
                    >
                        저희 염료는 주로 마이카라는 천연
                        미네랄을 사용하여 제조됩니다. 이러한
                        마이카는 환경 친화적인 공정을 통해
                        추출되고 처리되어 고품질의 염료로
                        변환됩니다. 우리는 자연의 아름다움을
                        최대한 존중하며,{" "}
                        <b>지속 가능한 생산 방식</b>을
                        중요시하고 있습니다.
                    </motion.p>
                </div>
            </div>
            <motion.div
                className="m-0 h-[55rem] sm:hidden"
                initial={{
                    opacity: 0,
                    rotateY: -180,
                }}
                animate={{
                    opacity: 1,
                    rotateY: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.7, 0.25, 0.25, 0.9],
                    },
                }}
            >
                <Image
                    src={aboutUsMain}
                    alt="aboutUsMain"
                    className="object-contain h-full w-full rounded-t-[25rem]"
                />
            </motion.div>
        </div>
    );
}
