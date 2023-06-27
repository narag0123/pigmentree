"use client";
import fontStyleUtil from "@/app/util/fontStyle";
import Image from "next/image";
import React, { useState } from "react";
import chev from "/public/asset/img/contactUs/chev.png";
import { AnimatePresence, motion } from "framer-motion";

export default function Qna() {
    const [qna, setQna] = useState([
        {
            id: 0,
            title: "주문한 제품은 언제 배송되나요?",
            answer: "industrial police younger song doubt test sudden journey out lie modern smooth student tin provide believed thumb fresh tube tie story fell prepare greatest",
            toggle: false,
        },
        {
            id: 1,
            title: "배송 일정은 어떻게 확인할 수 있나요?",
            answer: "final load known piece manufacturing fifty perfectly taste outside atomic please concerned silent along can fresh battle key while principal influence only law animal",
            toggle: false,
        },
        {
            id: 2,
            title: "제품이 파손되거나 손상되었을 경우 어떻게 해야 하나요?",
            answer: "주문 접수 후 보통 1~3일 내에 배송됩니다.",
            toggle: false,
        },
        {
            id: 3,
            title: "배송료는 얼마인가요? 무료 배송이 가능한 조건이 있나요?",
            answer: "주문 접수 후 보통 1~3일 내에 배송됩니다.",
            toggle: false,
        },
        {
            id: 4,
            title: "화장품 용으로 사용하기에 안전한가요?",
            answer: "주문 접수 후 보통 1~3일 내에 배송됩니다.",
            toggle: false,
        },
    ]);

    return (
        <motion.div
            className="qna w-full bg-black100 rounded-t-[8rem] mt-[9rem]"
            initial={{
                y: 100,
            }}
            animate={{
                y: 0,
            }}
        >
            <motion.div className="wrapper w-[128rem] pt-[9rem] pb-[20rem]">
                <h1
                    className="text-black20"
                    style={fontStyleUtil(
                        "kr",
                        4.8,
                        900,
                        4.8
                    )}
                >
                    자주묻는 질문
                </h1>
                <motion.div
                    className="qna-container flex flex-col mt-[8rem] border-t-[1px] border-t-black60"
                    initial={{
                        border: "none",
                    }}
                    whileInView={{
                        borderTop: "1px solid #707070",
                    }}
                >
                    {qna?.map((e, i) => (
                        <motion.div
                            key={e.id}
                            initial={{
                                opacity: 0,
                                x: 100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.1 * i,
                                },
                            }}
                            viewport={{ once: true }}
                            className={`unit border-b-[1px] border-b-black60 w-full relative min-h-[10rem] py-[4rem] flex flex-col cursor-pointer px-[3rem] 
                            ${e.toggle && "bg-[#222222]"}`}
                            onClick={() => {
                                setQna((prev) => {
                                    qna[i] = {
                                        ...prev[i],
                                        toggle: !e.toggle,
                                    };
                                    return [...prev];
                                });
                            }}
                        >
                            <div className="flex m-0 justify-between items-center w-full">
                                <div className="m-0">
                                    <motion.div
                                        className={`text-black20`}
                                        style={fontStyleUtil(
                                            "kr",
                                            1.8,
                                            400,
                                            1.8
                                        )}
                                    >
                                        {i + 1}. {e.title}
                                    </motion.div>
                                </div>
                                <div
                                    className={`toggle m-0 w-[1.5rem] ${
                                        e.toggle &&
                                        "rotate-180"
                                    } transition-all`}
                                >
                                    <Image
                                        src={chev}
                                        alt="chev"
                                    />
                                </div>
                            </div>
                            <AnimatePresence>
                                {e.toggle && (
                                    <motion.div
                                        className="text-black20 mt-[1.5rem] pl-[1.2rem] m-0"
                                        style={fontStyleUtil(
                                            "kr",
                                            1.5,
                                            400,
                                            1.5
                                        )}
                                        initial={{
                                            y: -10,
                                        }}
                                        animate={{
                                            y: 0,
                                        }}
                                    >
                                        {e.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
