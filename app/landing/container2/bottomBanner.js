import React, { useContext } from "react";
import { motion, spring } from "framer-motion";
import Image from "next/image";

import icon_star_black from "public/asset/img/icons/fillStar4Black.png";
import fontStyleUtil from "@/app/util/fontStyle";
import { useRouter } from "next/navigation";
import { UseContext } from "@/app/store/store";
export default function BottomBanner() {
    const context = useContext(UseContext);
    const { isMobile, setIsMobile } = context;

    const router = useRouter();
    return (
        <div className="bottom-banner w-full bg-primary60 h-[56rem] rounded-b-[13rem] flex flex-col mt-[15rem] sm:h-fit sm:rounded-b-[4rem] sm:py-[3rem] px-[2rem] sm:mt-[4rem]">
            <div className="divider flex p-[8rem] items-center justify-between m-0 sm:p-[2rem] sm:gap-[2rem]">
                <div className=" m-0 relative line">
                    <motion.div
                        className="border border-y-[0.5px] border-x-0 relative"
                        initial={{
                            width: 0,
                        }}
                        whileInView={
                            !isMobile
                                ? { width: "40rem" }
                                : { width: "6rem" }
                        }
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            ...spring,
                            delay: 0.4,
                        }}
                    >
                        <motion.div
                            className="rounded-full w-[4px] h-[4px] bg-black100 absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%]"
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.6,
                            }}
                        ></motion.div>
                        <motion.div
                            className="rounded-full w-[4px] h-[4px] bg-black100 absolute top-0 left-[100%] translate-x-[0%] -translate-y-[50%]"
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.6,
                            }}
                        ></motion.div>
                    </motion.div>
                </div>
                <div className="icon_star_cont flex gap-[5rem] m-0 sm:gap-[1rem] items-center">
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        whileInView={{
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            ...spring,
                            delay: 0.2,
                        }}
                    >
                        <Image
                            alt="icon_star_black"
                            className="w-[3rem] object-cover sm:w-[2rem]"
                            src={icon_star_black}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        whileInView={{
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            ...spring,
                            delay: 0.0,
                        }}
                    >
                        <Image
                            alt="icon_star_black"
                            className="w-[3rem] object-cover sm:w-[2rem]"
                            src={icon_star_black}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        whileInView={{
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            ...spring,
                            delay: 0.4,
                        }}
                    >
                        <Image
                            alt="icon_star_black"
                            className="w-[3rem] sm:w-[2rem] object-cover"
                            src={icon_star_black}
                        />
                    </motion.div>
                </div>
                <div className=" m-0 relative  line">
                    <motion.div
                        className="border border-y-[0.5px] border-x-0 relative m-0"
                        initial={{
                            width: 0,
                        }}
                        whileInView={
                            !isMobile
                                ? { width: "40rem" }
                                : { width: "6rem" }
                        }
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            ...spring,
                            delay: 0.4,
                        }}
                    >
                        <motion.div
                            className="rounded-full w-[4px] h-[4px] bg-black100 absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%]"
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.6,
                            }}
                        ></motion.div>
                        <motion.div
                            className="rounded-full w-[4px] h-[4px] bg-black100 absolute top-0 left-[100%] translate-x-[0%] -translate-y-[50%]"
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.6,
                            }}
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                className="font-en font-black text-[7.2rem] leading-[8.8rem] sm:text-[3.6rem] sm:leading-[5rem]"
                // style={fontStyleUtil("en", 7.2, 900, 8.8)}
                initial={{
                    opacity: 0,
                    x: -100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                transition={spring}
            >
                SHOW YOUR
            </motion.div>
            <motion.div
                className="font-en font-black text-[7.2rem] leading-[8.8rem] sm:text-[3.6rem] sm:leading-[5rem]"
                // style={fontStyleUtil("en", 7.2, 900, 8.8)}
                initial={{
                    opacity: 0,
                    x: 100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                transition={spring}
            >
                COLORIZE IDEAS
            </motion.div>
            <div className="btn-Cont flex gap-[1rem] mt-[4rem] sm:mt-[2rem]">
                <motion.button
                    className="rounded-full bg-black100 text-primary60 border-black100 py-[2rem] px-[5rem]
                    font-en font-normal text-[1.5rem] leading-[1.8rem]
                     sm:py-[1.5rem] sm:px-[3rem]
                    "
                    // style={fontStyleUtil(
                    //     "en",
                    //     1.8,
                    //     400,
                    //     1.8
                    // )}
                    initial={{
                        scale: 0,
                    }}
                    whileInView={{
                        scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        ...spring,
                    }}
                    whileHover={{ y: -10 }}
                    onClick={() => {
                        router.push("/contactUs");
                    }}
                >
                    TALKS NOW
                </motion.button>
                <motion.button
                    className="rounded-full bg-primary60 border border-black100 py-[2rem] px-[5rem]
                    font-en font-normal text-[1.5rem] leading-[1.8rem]
                     sm:py-[1.5rem] sm:px-[3rem]
                    "
                    initial={{
                        scale: 0,
                    }}
                    whileInView={{
                        scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        ...spring,
                    }}
                    whileHover={{ y: -10 }}
                >
                    FOLLOW US
                </motion.button>
            </div>
        </div>
    );
}
