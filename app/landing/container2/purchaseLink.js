import React from "react";
import {
    motion,
    spring,
    AnimatePresence,
} from "framer-motion";
import fontStyleUtil from "@/app/util/fontStyle";
import Image from "next/image";

import icon_arrowGrey from "public/asset/img/icons/arrow_grey.png";
import { useRouter } from "next/navigation";

export default function PurchaseLink({
    styles,
    isHover,
    setIsHover,
}) {
    const productType = [
        {
            id: 0,
            name: "단품 10종",
            stateName: "sample10",
        },
        {
            id: 1,
            name: "패키지 구매",
            stateName: "single",
        },
        {
            id: 2,
            name: "벌크 구매",
            stateName: "bulk",
        },
    ];

    const router = useRouter();

    return (
        <div className="purchaseLink w-full py-[10rem] sm:py-[2.5rem]">
            {productType.map((e, i) => (
                <motion.div
                    key={e.id}
                    className={`w-full h-[15rem] bg-black100 border border-t-black80 last:border-b-black80 border-x-0 flex justify-between items-center cursor-pointer relative overflow-hidden sm:h-[9rem]`}
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            delay: 0.2,
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                    whileHover={"hover"}
                    onMouseEnter={() => {
                        setIsHover(e.stateName);
                    }}
                    onMouseLeave={() => {
                        setIsHover("none");
                    }}
                    variants={{
                        hover: {
                            backgroundColor: "#232323",
                            transition: {
                                spring,
                                duration: 0.2,
                            },
                        },
                    }}
                    onClick={() => {
                        router.push("/products");
                    }}
                >
                    <motion.div className="m-0 text-black80 ml-[4rem] flex items-center gap-[2rem] z-0 sm:ml-[2rem]">
                        <motion.p
                            // style={fontStyleUtil(
                            //     "kr",
                            //     4,
                            //     700
                            // )}
                            className="font-kr font-[700] text-[4rem] leading-[4rem] sm:text-[2.4rem] sm:leading-[2.4rem]"
                            variants={{
                                hover: {
                                    color: styles.black20,
                                    transition: {
                                        spring,
                                        duration: 0.2,
                                    },
                                },
                            }}
                        >
                            {e.name}
                        </motion.p>
                        <AnimatePresence>
                            {isHover === e.stateName && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -10,
                                    }}
                                    className="w-[1rem] h-[1rem] bg-primary100 rounded-full"
                                ></motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    <div
                        className={`z-0 m-0 w-[12rem] h-[12rem] sm:w-[6rem] sm:h-[6rem] flex items-center transition-all duration-300 rounded-lg ${
                            isHover === e.stateName
                                ? "bg-primary100"
                                : "none"
                        }`}
                    >
                        <Image
                            className="w-[4rem] sm:w-[2rem]"
                            alt={"icon_arrowGrey"}
                            // height={"40"}
                            src={icon_arrowGrey}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
