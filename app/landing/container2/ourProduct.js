import React from "react";
import { motion, easeInOut } from "framer-motion";
import fontStyleUtil from "@/app/util/fontStyle";
import Image from "next/image";

import icon_docs_active from "public/asset/img/icons/docs.png";
import icon_docs from "public/asset/img/icons/docsGrey.png";
import { useRouter } from "next/navigation";

export default function OurProduct({
    styles,
    isHover,
    setIsHover,
}) {
    const sheet = [
        {
            id: 0,
            name: "MSDS",
            subName: "Material Safety Data Sheet",
            url: "",
        },
        {
            id: 1,
            name: "TDS",
            subName: "Total Dissolved Solid",
            url: "",
        },
        {
            id: 2,
            name: "COA",
            subName: "Certificate Of Analysis",
            url: "",
        },
        {
            id: 3,
            name: "OTHER",
            subName: "Total Dissolve",
            url: "",
        },
    ];

    const router = useRouter();

    return (
        <>
            <motion.div
                className="title text-black20 py-[3rem] font-en font-[900] text-[7.2rem] leading-[8.8rem] sm:text-[4rem] sm:leading-[5rem]"
                // style={fontStyleUtil("en", 7.2, 900, 8.8)}
                initial={{
                    opacity: 0,
                    x: -100,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                    duration: 1,
                }}
            >
                OUR PRODUCT
            </motion.div>
            <div className="flex justify-between items-end sm:flex-col sm:gap-[3.5rem]">
                <div className="flex-[0.85] m-0">
                    <motion.div
                        className="text-black20 font-kr font-[700] text-[2.4rem] leading-[4.8rem] sm:text-[1.8rem] sm:leading-[3.6rem]"
                        // style={fontStyleUtil(
                        //     "kr",
                        //     2.4,
                        //     700,
                        //     4.8
                        // )}
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                        }}
                    >
                        훌륭한 작품은 훌륭한 재료로 부터
                    </motion.div>
                    <motion.div
                        className="text-black20 font-kr font-[400] text-[2rem] leading-[3rem] sm:text-[1.5rem] sm:leading-[2.4rem]"
                        // style={fontStyleUtil(
                        //     "kr",
                        //     2,
                        //     400,
                        //     3
                        // )}
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 1,
                        }}
                    >
                        훌륭한 작품은 훌륭한 재료로 부터
                        시작됩니다. 일류 쉐프의 요리는
                        신선한 재료로 부터 시작되듯이
                        말이죠! MSDS, COA, TDS 등과 같이
                        검증된 문서들로 더욱 안전하고 품질
                        또한 보장됩니다!
                    </motion.div>
                </div>
                <div className="btns-sheet text-black20 flex flex-col m-0 sm:w-full">
                    <div className="grid grid-cols-2 gap-[1rem] sm:m-0">
                        {sheet.map((e, i) => (
                            <motion.div
                                className="flex justify-start items-center btn-box border border-black60 rounded-full py-[1rem] px-[2rem] gap-[1rem] w-full cursor-pointer"
                                key={i}
                                initial={{
                                    scale: 0,
                                }}
                                whileInView={{
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        delay:
                                            0.2 + i * 0.1,
                                    },
                                }}
                                viewport={{
                                    once: true,
                                }}
                                whileHover={"hover"}
                                onMouseEnter={() => {
                                    setIsHover("docs" + i);
                                }}
                                onMouseLeave={() => {
                                    setIsHover("none");
                                }}
                                onClick={() => {
                                    router.push(
                                        `/docs/${e.name}`
                                    );
                                }}
                                variants={{
                                    hover: {
                                        border: `1px solid ${styles.black20}`,
                                        transition: {
                                            type: "easeInOut",
                                            duration: 0.1,
                                        },
                                    },
                                }}
                            >
                                <Image
                                    src={
                                        isHover ===
                                        "docs" + i
                                            ? icon_docs_active
                                            : icon_docs
                                    }
                                    alt={e.name}
                                    // width={20}
                                    className="m-0 w-[2rem] sm:w-[1.5rem]"
                                />
                                <motion.div className="flex-col flex items-start m-0">
                                    <motion.p
                                        variants={{
                                            hover: {
                                                color: styles.black20,
                                                transition:
                                                    {
                                                        easeInOut,
                                                    },
                                            },
                                        }}
                                        className="text-black60 font-en text-[2rem] font-[700] leading-[2rem] sm:text-[1.5rem] sm:leading-[1.5rem]"
                                        // style={fontStyleUtil(
                                        //     "en",
                                        //     2,
                                        //     700,
                                        //     2
                                        // )}
                                    >
                                        {e.name}
                                    </motion.p>
                                    <motion.p
                                        className="text-black60 sm:hidden"
                                        variants={{
                                            hover: {
                                                color: styles.black20,
                                                transition:
                                                    {
                                                        easeInOut,
                                                    },
                                            },
                                        }}
                                    >
                                        {e.subName}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
