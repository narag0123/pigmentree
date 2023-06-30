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
            answer: "주문하신 제품은 익일 출고 됩니다. 이후 통상 영업일 기준 1~3일 소요되며 자세한 사항은 해당 택배사로 문의 주시기 바랍니다. 하지만 상품의 재고 상황이나 배송지의 위치에 따라 일부 지연될 수도 있습니다.",
            toggle: false,
        },
        {
            id: 1,
            title: "배송 일정은 어떻게 확인할 수 있나요?",
            answer: "배송 일정은 주문 후에 발송된 배송 추적 번호를 통해 확인하실 수 있습니다. 이 번호는 결제하신 네이버 페이 계정에서 확인하실 수 있으며 또는 배송 업체의 웹사이트에서 추적하실 수 있습니다.",
            toggle: false,
        },
        {
            id: 2,
            title: "교환 및 환불은 어떻게 하나요?",
            answer: "",
            toggle: false,
        },
        // {
        //     id: 3,
        //     title: "배송료는 얼마인가요? 무료 배송이 가능한 조건이 있나요?",
        //     answer: "주문 접수 후 보통 1~3일 내에 배송됩니다.",
        //     toggle: false,
        // },
        {
            id: 4,
            title: "화장품 용으로 사용하기에 안전한가요?",
            answer: "",
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
