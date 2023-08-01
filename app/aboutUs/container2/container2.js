"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { motion, spring } from "framer-motion";
import { usePathname } from "next/navigation";

import fontStyleUtil from "@/app/util/fontStyle";
import styles from "../../color.module.scss";

import topMain from "public/asset/img/aboutUs/topMain.png";
import facePurple from "public/asset/img/aboutUs/facePurple.png";
import faceGreen from "public/asset/img/aboutUs/faceGreen.png";
import faceYellow from "public/asset/img/aboutUs/faceYellow.png";
import faceRed from "public/asset/img/aboutUs/faceRed.png";
import { UseContext } from "@/app/store/store";

export default function Container2() {
    const context = useContext(UseContext);
    const { isMobile, setIsMobile } = context;

    const faceUnit = [
        {
            id: 0,
            url: facePurple,
            style: {
                background:
                    "linear-gradient(253.93deg, rgba(182, 96, 147, 0.35) 0%, rgba(245, 186, 59, 0.35) 102.39%)",
                boxShadow: "10px 10px 0px #84275E",
            },
        },
        {
            id: 1,
            url: faceGreen,
            style: {
                background:
                    "linear-gradient(253.93deg, rgba(245, 186, 59, 0.35) 0%, rgba(30, 117, 116, 0.35) 102.39%)",
                boxShadow: "10px 10px 0px #1E7574",
            },
        },
        {
            id: 2,
            url: faceYellow,
            style: {
                background:
                    "linear-gradient(255.41deg, rgba(70, 57, 51, 0.5) 0%, rgba(192, 122, 40, 0.5) 100%)",
                boxShadow: "10px 10px 0px #CF8534",
            },
        },
        {
            id: 3,
            url: faceRed,
            style: {
                background:
                    "linear-gradient(255.41deg, rgba(248, 85, 53, 0.5) 0%, rgba(0, 2, 2, 0.5) 100%)",
                boxShadow: "10px 10px 0px #CA2115",
            },
        },
    ];

    console.log(
        faceUnit[
            Math.floor(Math.random() * faceUnit.length)
        ].id
    );

    return (
        <motion.div
            className="100vw rounded-t-[8rem] bg-black100 mt-[11rem] sm:mt-[8rem] sm:rounded-t-[4rem]"
            initial={{
                y: 100,
            }}
            animate={{
                y: 0,
                transition: {
                    spring,
                },
            }}
        >
            <div className="wrapper w-[128rem] pt-[10rem] flex flex-col gap-[5rem] sm:p-[3rem] sm:w-full">
                <motion.div
                    className="w-full h-[35rem] sm:h-[15rem] overflow-hidden flex justify-center items-center sm:w-full sm:m-0"
                    initial={{
                        opacity: 0,
                        y: 100,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            spring,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={topMain}
                        alt="topMain"
                        className="object-cover h-full"
                    />
                </motion.div>
                <div className="flex m-0 sm:w-full sm:flex-col sm:gap-[5rem]">
                    <div
                        className="flex flex-col justify-center items-start text-primary100
                        font-en font-black text-[5.2rem] leading-[6.4rem] drop-shadow-[6px_6px_0px_#AD00FF]"
                    >
                        <motion.p
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    spring,
                                },
                            }}
                            viewport={{ once: true }}
                        >
                            “ COLORIZE
                        </motion.p>
                        <motion.p
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    spring,
                                },
                            }}
                            viewport={{ once: true }}
                        >
                            &nbsp;&nbsp;&nbsp;IDEAS ”
                        </motion.p>
                    </div>
                    <motion.div
                        className="w-[65rem] text-black20 sm:w-fit font-kr font-[400] text-[1.8rem] leading-[3rem] sm:text-[1.5rem] sm:leading-[2.7rem]"
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                spring,
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        <span className="font-kr font-[700] text-[3.2rem] leading-[3rem] sm:text-[2.4rem] sm:leading-[2.4rem]">
                            PIGMENTREE
                        </span>
                        는 다양한 색상과 품질의 염료를
                        제공하여 고객들의 창작 활동을
                        지원합니다. 우리의 제품은 다양한
                        응용 분야에서 사용될 수 있으며,
                        화장품 제조사, 예술가, 공예가,
                        그리고 DIY 애호가들에게 인기가
                        있습니다.
                        <br />
                        <br />
                        고객 만족을 최우선으로 생각하는
                        PIGMENTREE는 뛰어난 제품 품질과
                        빠르고 신속한 배송 서비스를
                        제공합니다. 저희는 염료에 대한 전문
                        지식과 경험을 가진 팀으로 구성되어
                        있으며, 언제든지 문의사항이 있으면
                        친절하게 도움을 드릴 준비가 되어
                        있습니다.
                    </motion.div>
                </div>
                <div className="bottomBox flex gap-[3.6rem] sm:flex-col">
                    {!isMobile &&
                        faceUnit.map((e, i) => (
                            <motion.div
                                className="faceUnit w-[27rem] h-[28.5rem] relative flex items-end justify-center"
                                key={e.id}
                                initial={{
                                    opacity: 0,
                                    clipPath:
                                        "inset(0 100% 0 0)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    clipPath:
                                        "inset(0 -100% -100% 0)",
                                    transition:
                                        i % 2 === 0
                                            ? {
                                                  delay: 0.6,
                                                  duration: 1,
                                                  ease: [
                                                      0.7,
                                                      0.25,
                                                      0.25,
                                                      0.9,
                                                  ],
                                              }
                                            : {
                                                  delay: 0.3,
                                                  duration: 1,
                                                  ease: [
                                                      0.7,
                                                      0.25,
                                                      0.25,
                                                      0.9,
                                                  ],
                                              },
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute w-[21rem]">
                                    <Image
                                        alt={e.url.toString()}
                                        src={e.url}
                                    />
                                </div>
                                <div
                                    className="w-full h-[20rem] rounded-t-[3rem]"
                                    style={e.style}
                                ></div>
                            </motion.div>
                        ))}

                    {/*  mobile */}
                    {isMobile && (
                        <div className="sm:flex sm:gap-[3rem]">
                            <motion.div
                                className="faceUnit w-[13.5rem] h-[14rem] relative flex items-end justify-center"
                                initial={{
                                    opacity: 0,
                                    clipPath:
                                        "inset(0 100% 0 0)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    clipPath:
                                        "inset(0 -100% -100% 0)",
                                    transition: {
                                        delay: 0.6,
                                        duration: 1,
                                        ease: [
                                            0.7, 0.25, 0.25,
                                            0.9,
                                        ],
                                    },
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute w-[10rem]">
                                    <Image
                                        alt={faceUnit[0].url.toString()}
                                        src={
                                            faceUnit[0].url
                                        }
                                    />
                                </div>
                                <div
                                    className="w-full h-[8rem] rounded-t-[1rem]"
                                    style={
                                        faceUnit[0].style
                                    }
                                ></div>
                            </motion.div>
                            <motion.div
                                className="faceUnit w-[13.5rem] h-[14rem] relative flex items-end justify-center"
                                initial={{
                                    opacity: 0,
                                    clipPath:
                                        "inset(0 100% 0 0)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    clipPath:
                                        "inset(0 -100% -100% 0)",
                                    transition: {
                                        delay: 0.6,
                                        duration: 1,
                                        ease: [
                                            0.7, 0.25, 0.25,
                                            0.9,
                                        ],
                                    },
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute w-[10rem]">
                                    <Image
                                        alt={faceUnit[1].url.toString()}
                                        src={
                                            faceUnit[1].url
                                        }
                                    />
                                </div>
                                <div
                                    className="w-full h-[8rem] rounded-t-[1rem]"
                                    style={
                                        faceUnit[1].style
                                    }
                                ></div>
                            </motion.div>
                        </div>
                    )}
                </div>
                <div className="mb-[16.4rem] flex flex-col gap-[2rem]">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                spring,
                            },
                        }}
                        viewport={{ once: true }}
                        className="text-black20 m-0"
                        style={fontStyleUtil(
                            "kr",
                            2.4,
                            700,
                            3
                        )}
                    >
                        당신의 미적감각을 위한 최고의 선택
                    </motion.div>
                    <motion.div
                        className="text-black40"
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.2,
                                spring,
                            },
                        }}
                        viewport={{ once: true }}
                        style={fontStyleUtil(
                            "kr",
                            1.8,
                            400,
                            3
                        )}
                    >
                        더 나아가, 우리는 지속 가능한 개념을
                        따르고자 합니다. 환경 보호를
                        중시하며, 친환경적인 소재와 생산
                        방식을 선택하여 염료 제조 과정에서의
                        탄소 배출을 최소화하는 것을 목표로
                        합니다. 우리의 제품은 자연과 예술을
                        조화시키는 아름다움을 추구하는
                        분들에게 특히 어울립니다.
                        <br />
                        PIGMENTREE를 통해 더욱 창조적이고
                        아름다운 작품을 만들어보세요.
                    </motion.div>
                    <motion.div
                        className="text-black40 text-center mt-[6rem] "
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                spring,
                            },
                        }}
                        viewport={{ once: true }}
                        style={{
                            ...fontStyleUtil(
                                "kr",
                                2.4,
                                700,
                                3.6
                            ),
                        }}
                    >
                        <b>PIGMENTREE</b>를 통해 더욱
                        창조적이고 아름다운 작품을
                        만들어보세요.
                        <br /> 저희는 여러분의 창작 활동을
                        지원하고, 미적 감각을 일깨워주는
                        재료를 제공할 것입니다.
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
