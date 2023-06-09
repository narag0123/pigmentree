"use client";

import React, {
    useContext,
    useEffect,
    useState,
    useMemo,
    useRef,
} from "react";
import fontStyleUtil from "../util/fontStyle";
import Image from "next/image";
import {
    motion,
    spring,
    AnimatePresence,
    easeInOut,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import styles from "../color.module.scss";

import icon_star60 from "../../public/asset/img/icons/star60.png";
import icon_globe60 from "../../public/asset/img/icons/globe60.png";
import icon_star80 from "../../public/asset/img/icons/star80.png";
import icon_globe80 from "../../public/asset/img/icons/globe80.png";
import vid from "../../public/asset/img/vid.png";
import icon_arrow from "../../public/asset/img/icons/Arrow.png";
import explosion from "../../public/asset/img/explosion.png";
import icon_star4 from "../../public/asset/img/icons/star4.png";
import icon_docs_active from "../../public/asset/img/icons/docs.png";
import icon_docs from "../../public/asset/img/icons/docsGrey.png";
import icon_arrowGrey from "../../public/asset/img/icons/arrow_grey.png";
import icon_arrowGrey_active from "../../public/asset/img/icons/arrow_grey_active.png";

import red from "../../public/asset/img/Red.png";
import red_grey from "../../public/asset/img/RedGrey.png";
import orange from "../../public/asset/img/Orange.png";
import orange_grey from "../../public/asset/img/OrangeGrey.png";
import green from "../../public/asset/img/Green.png";
import green_grey from "../../public/asset/img/GreenGrey.png";
import blue from "../../public/asset/img/Blue.png";
import blue_grey from "../../public/asset/img/BlueGrey.png";
import purple from "../../public/asset/img/Purple.png";
import purple_grey from "../../public/asset/img/PurpleGrey.png";
import icon_star_black from "../../public/asset/img/icons/fillStar4Black.png";
import { wrap } from "@motionone/utils";

import { sheet } from "../data/sheet";
import { UseContext } from "../store/store";

function Landing() {
    const context = useContext(UseContext);
    const { isPage, setIsPage } = context;
    const [isHover, setIsHover] = useState("none");

    useEffect(() => {
        setIsPage("landing");
    }, []);

    const ParallaxText = useMemo(
        () =>
            ({ children, baseVelocity = 100 }) => {
                const baseX = useMotionValue(0);
                const { scrollY } = useScroll();
                const scrollVelocity = useVelocity(scrollY);
                const smoothVelocity = useSpring(
                    scrollVelocity,
                    {
                        damping: 50,
                        stiffness: 400,
                    }
                );
                const velocityFactor = useTransform(
                    smoothVelocity,
                    [0, 1000],
                    [0, 5],
                    {
                        clamp: false,
                    }
                );

                /**
                 * This is a magic wrapping for the length of the text - you
                 * have to replace for wrapping that works for you or dynamically
                 * calculate
                 */
                const x = useTransform(
                    baseX,
                    (v) => `${wrap(0, -21.8, v)}%`
                );

                const directionFactor = useRef(1);
                useAnimationFrame((t, delta) => {
                    let moveBy =
                        directionFactor.current *
                        baseVelocity *
                        (delta / 1000);

                    /**
                     * This is what changes the direction of the scroll once we
                     * switch scrolling directions.
                     */
                    if (velocityFactor.get() < 0) {
                        directionFactor.current = -1;
                    } else if (velocityFactor.get() > 0) {
                        directionFactor.current = 1;
                    }

                    moveBy +=
                        directionFactor.current *
                        moveBy *
                        velocityFactor.get();

                    baseX.set(baseX.get() + moveBy);
                });

                /**
                 * The number of times to repeat the child text should be dynamically calculated
                 * based on the size of the text and viewport. Likewise, the x motion value is
                 * currently wrapped between -20 and -45% - this 25% is derived from the fact
                 * we have four children (100% / 4). This would also want deriving from the
                 * dynamically generated number of children.
                 */
                return (
                    <motion.div
                        className="scroller flex w-fit gap-[4rem] items-center h-full"
                        style={{ x }}
                    >
                        {children}
                        {children}
                        {children}
                        {children}
                        {children}
                    </motion.div>
                );
            },
        []
    );

    return (
        <div className="landing pt-[10rem] ">
            <div
                className="wrapper w-[128rem] mx-auto"
                id="cont1"
            >
                <div className="flex justify-between">
                    <div
                        className="textBox text-black100 m-0"
                        style={fontStyleUtil(
                            "en",
                            13,
                            900,
                            13
                        )}
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
                                당신의 아이디어에 생명을
                                불어 넣어보세요!
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
                                감각적인 컬러와 최고의
                                질감으로 여러분이 만드는
                                작품의 훌륭한 조력자가
                                되어드리겠습니다.
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
                <div className="img-bottom-cont  mt-[10rem]  relative">
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
                </div>
            </div>
            <div
                id="cont2"
                className="w-full bg-black100 h-fit pb-[18rem] overflow-x-hidden relative"
            >
                <div className="band bg-[#000000] w-fit h-[15rem]">
                    <ParallaxText baseVelocity={3}>
                        <div
                            className="text-primary60 flex items-center m-0"
                            style={fontStyleUtil(
                                "en",
                                7.2,
                                900,
                                8.8
                            )}
                        >
                            PIGMENTREE
                        </div>
                        <Image
                            alt="icon_star4"
                            src={icon_star4}
                            className="w-[5rem] h-[5rem] object-contain m-0"
                        />
                        <div
                            className="text-primary60 flex items-center m-0 w-fit"
                            style={fontStyleUtil(
                                "en",
                                7.2,
                                900,
                                8.8
                            )}
                        >
                            COLORIZE&nbsp;IDEAS
                        </div>
                        <Image
                            alt="icon_star4"
                            src={icon_star4}
                            className="w-[5rem] h-[5rem] object-contain m-0"
                        />
                    </ParallaxText>
                </div>
                <div className="wrapper w-[128rem] mx-auto">
                    <motion.div
                        className="title text-black20 py-[3rem]"
                        style={fontStyleUtil(
                            "en",
                            7.2,
                            900,
                            8.8
                        )}
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
                    <div className="flex justify-between items-end">
                        <div className="flex-[0.85] m-0">
                            <motion.div
                                className="text-black20"
                                style={fontStyleUtil(
                                    "kr",
                                    2.4,
                                    700,
                                    4.8
                                )}
                                initial={{
                                    opacity: 0,
                                    x: -100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.2,
                                    duration: 1,
                                }}
                            >
                                훌륭한 작품은 훌륭한 재료로
                                부터
                            </motion.div>
                            <motion.div
                                className="text-black20"
                                style={fontStyleUtil(
                                    "kr",
                                    2,
                                    400,
                                    3
                                )}
                                initial={{
                                    opacity: 0,
                                    x: -100,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.4,
                                    duration: 1,
                                }}
                            >
                                훌륭한 작품은 훌륭한 재료로
                                부터 시작됩니다. 일류 쉐프의
                                요리는 신선한 재료로 부터
                                시작되듯이 말이죠! MSDS,
                                SGS, TDS 등과 같이 검증된
                                문서들로 더욱 안전하고 품질
                                또한 보장됩니다!
                            </motion.div>
                        </div>
                        <div className="btns-sheet text-black20 flex flex-col m-0">
                            <div className="grid grid-cols-2 gap-[1rem]">
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
                                                    0.2 +
                                                    i * 0.1,
                                            },
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        whileHover={"hover"}
                                        onMouseEnter={() => {
                                            setIsHover(
                                                "docs" + i
                                            );
                                        }}
                                        onMouseLeave={() => {
                                            setIsHover(
                                                "none"
                                            );
                                        }}
                                        variants={{
                                            hover: {
                                                border: `1px solid ${styles.black20}`,
                                                transition:
                                                    {
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
                                            width={20}
                                            className="m-0"
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
                                                className="text-black60"
                                                style={fontStyleUtil(
                                                    "en",
                                                    2,
                                                    700,
                                                    2
                                                )}
                                            >
                                                {e.name}
                                            </motion.p>
                                            <motion.p
                                                className="text-black60"
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
                    <div className="purchaseLink w-full py-[10rem] ">
                        <motion.div
                            className="w-full h-[15rem] border border-y-black80 border-x-0 flex justify-between items-center"
                            initial={{
                                opacity: 0,
                                x: -100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.2,
                                duration: 1,
                            }}
                            onMouseEnter={() => {
                                setIsHover("sample10");
                            }}
                            onMouseLeave={() => {
                                setIsHover("none");
                            }}
                        >
                            <div className="m-0 text-black80 ml-[4rem] flex items-center gap-[2rem]">
                                <p
                                    style={fontStyleUtil(
                                        "kr",
                                        4,
                                        700
                                    )}
                                >
                                    샘플 10종
                                </p>
                                <AnimatePresence>
                                    {isHover ===
                                        "sample10" && (
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
                            </div>
                            <div
                                className={`m-0 w-[12rem] h-[12rem] flex items-center transition-all duration-300  ${
                                    isHover === "sample10"
                                        ? "bg-primary100"
                                        : "bg-black100"
                                }`}
                            >
                                <Image
                                    alt={"icon_arrowGrey"}
                                    height={"40"}
                                    src={icon_arrowGrey}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            className="w-full h-[15rem] border border-y-black80 border-x-0 flex justify-between items-center"
                            initial={{
                                opacity: 0,
                                x: -100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.2,
                                duration: 1,
                            }}
                            onMouseEnter={() => {
                                setIsHover("single");
                            }}
                            onMouseLeave={() => {
                                setIsHover("none");
                            }}
                        >
                            <div className="m-0 text-black80 ml-[4rem] flex items-center gap-[2rem]">
                                <p
                                    style={fontStyleUtil(
                                        "kr",
                                        4,
                                        700
                                    )}
                                >
                                    단품 구매
                                </p>
                                <AnimatePresence>
                                    {isHover ===
                                        "single" && (
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
                            </div>

                            <div
                                className={`m-0 w-[12rem] h-[12rem] flex items-center transition-all duration-300  ${
                                    isHover === "single"
                                        ? "bg-primary100"
                                        : "bg-black100"
                                }`}
                            >
                                <Image
                                    alt="icon_arrowGrey"
                                    height={"40"}
                                    src={icon_arrowGrey}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            className="w-full h-[15rem] border border-y-black80 border-x-0 flex justify-between items-center"
                            initial={{
                                opacity: 0,
                                x: -100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.2,
                                duration: 1,
                            }}
                            onMouseEnter={() => {
                                setIsHover("bulk");
                            }}
                            onMouseLeave={() => {
                                setIsHover("none");
                            }}
                        >
                            <div className="m-0 text-black80 ml-[4rem] flex items-center gap-[2rem]">
                                <p
                                    style={fontStyleUtil(
                                        "kr",
                                        4,
                                        700
                                    )}
                                >
                                    벌크 구매
                                </p>
                                <AnimatePresence>
                                    {isHover === "bulk" && (
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
                            </div>
                            <div
                                className={`m-0 w-[12rem] h-[12rem] flex items-center transition-all duration-300  ${
                                    isHover === "bulk"
                                        ? "bg-primary100"
                                        : "bg-black100"
                                }`}
                            >
                                <Image
                                    alt="icon_arrowGrey"
                                    height={"40"}
                                    src={icon_arrowGrey}
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col ">
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
                                style={fontStyleUtil(
                                    "en",
                                    2,
                                    400,
                                    3
                                )}
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
                                섬세한 예술가인 여러분을
                                위하여 최적의 서비스를
                                제공해 드립니다. 여러가지
                                샘플의 실제 컬러를 RGB,
                                CMYK, HSL 등 고객이
                                사용하시는 분야의 색상계에
                                맞춰 정보를 드립니다
                            </motion.p>
                        </div>
                        <div className="image-cont flex flex-col gap-[3rem]">
                            <div className="flex gap-[3rem]">
                                <motion.div
                                    className="relative overflow-hidden"
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
                                                isHover ===
                                                "red"
                                                    ? red
                                                    : red_grey
                                            }
                                            width={340}
                                            height={340}
                                        />
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="relative overflow-hidden"
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
                                        setIsHover(
                                            "orange"
                                        );
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
                                                isHover ===
                                                "orange"
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
                                    className="relative overflow-hidden"
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
                                                isHover ===
                                                "green"
                                                    ? green
                                                    : green_grey
                                            }
                                            width={340}
                                            height={340}
                                        />
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="relative overflow-hidden w-[34rem] h-[34rem]"
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
                                                isHover ===
                                                "blue"
                                                    ? blue
                                                    : blue_grey
                                            }
                                        />
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="relative overflow-hidden"
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
                                        setIsHover(
                                            "purple"
                                        );
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
                                                isHover ===
                                                "purple"
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
                    <div className="bottom-banner w-full bg-primary60 h-[56rem] rounded-b-[13rem] flex flex-col mt-[15rem] ">
                        <div className="divider flex p-[8rem] items-center justify-between m-0">
                            <div className="w-[40rem] m-0 relative">
                                <motion.div
                                    className="border border-y-[0.5px] border-x-0 relative"
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{
                                        width: "40rem",
                                    }}
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
                            <div className="icon_star_cont flex gap-[5rem] m-0">
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
                                        className="w-[3rem] h-[3rem] object-cover"
                                        src={
                                            icon_star_black
                                        }
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
                                        className="w-[3rem] h-[3rem] object-cover"
                                        src={
                                            icon_star_black
                                        }
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
                                        className="w-[3rem] h-[3rem] object-cover"
                                        src={
                                            icon_star_black
                                        }
                                    />
                                </motion.div>
                            </div>
                            <div className="w-[40rem] m-0 relative">
                                <motion.div
                                    className="border border-y-[0.5px] border-x-0 relative"
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{
                                        width: "40rem",
                                    }}
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
                            style={fontStyleUtil(
                                "en",
                                7.2,
                                900,
                                8.8
                            )}
                            initial={{
                                opacity: 0,
                                x: -500,
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
                            style={fontStyleUtil(
                                "en",
                                7.2,
                                900,
                                8.8
                            )}
                            initial={{
                                opacity: 0,
                                x: 500,
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
                        <div className="btn-Cont flex gap-[2rem] mt-[4rem]">
                            <motion.button
                                className="rounded-full bg-black100 text-primary60 border-black100 py-[2rem] px-[5rem]"
                                style={fontStyleUtil(
                                    "en",
                                    1.8,
                                    400,
                                    1.8
                                )}
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
                                TALKS NOW
                            </motion.button>
                            <motion.button
                                className="rounded-full bg-primary60 border border-black100 py-[2rem] px-[5rem]"
                                style={fontStyleUtil(
                                    "en",
                                    1.8,
                                    400,
                                    1.8
                                )}
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
                </div>
            </div>
        </div>
    );
}

export default Landing;
