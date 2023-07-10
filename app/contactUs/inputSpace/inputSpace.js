"use client";
import React, { useState } from "react";
import {
    motion,
    easeInOut,
    AnimatePresence,
} from "framer-motion";

import contactUsMain from "/public/asset/img/contactUs/contactUsMain.png";
import Image from "next/image";
import fontStyleUtil from "@/app/util/fontStyle";

export default function InputSpace() {
    const [inputValue, setInputValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isFocusName, setIsFocusName] = useState(false);
    const [isFocusContact, setIsFocusContact] =
        useState(false);
    const [isFocusEmail, setIsFocusEmail] = useState(false);
    const [isFocusMemo, setIsFocusMemo] = useState(false);

    const [inputName, setInputName] = useState("");
    const [inputContact, setInputContact] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMemo, setInputMemo] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setIsValid(
            /^\d{3}-\d{4}-\d{4}$/.test(e.target.value) ||
                /^\d{3}-\d{3}-\d{4}$/.test(
                    e.target.value
                ) ||
                /^\d{2}-\d{4}-\d{4}$/.test(
                    e.target.value
                ) ||
                /^\d{2}-\d{3}-\d{4}$/.test(e.target.value)
        );
        setInputContact(e.target.value);
    };

    const validateEmail = (e) => {
        setIsValidEmail(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                e.target.value
            )
        );
        setInputEmail(e.target.value);
    };

    return (
        <div className="wrapper w-[128rem] flex justify-between items-end mt-[15rem]">
            <div className=" m-0 flex flex-col">
                <div className="title flex flex-col gap-[2rem] mb-[2rem]">
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
                        <div className="hr w-[18rem] border-[0.5px] border-black80 relative m-0">
                            <div className="circle w-[.5rem] h-[.5rem] rounded-full bg-black100 absolute top-[50%] left-[100%] -translate-y-[50%]"></div>
                        </div>
                        <div
                            className="m-0"
                            style={fontStyleUtil(
                                "en",
                                1.5,
                                700,
                                1.5
                            )}
                        >
                            GET IN TOUCH
                        </div>
                    </motion.div>
                    <motion.div
                        // className="w-[70rem]"
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
                        style={fontStyleUtil(
                            "en",
                            8,
                            900,
                            8
                        )}
                    >
                        SHARE PASSION!
                    </motion.div>
                </div>
                <div
                    style={fontStyleUtil("kr", 2, 400, 3)}
                    className="m-0 mb-[5rem]"
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
                        여러분의 열정을 저희와 함께
                        나눠보세요! <br />
                        저희는 재능있는 사업가 분들과 함께
                        협업하기를 항상 기다리고 있습니다.
                    </motion.p>
                </div>
                <form
                    className="m-0 w-[50rem]"
                    action="/api/post/post_contactUs"
                    method="POST"
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.1,
                            },
                        }}
                        className="mb-[4.5rem]"
                        style={fontStyleUtil(
                            "en",
                            3.6,
                            900,
                            3
                        )}
                    >
                        CONTACT
                    </motion.div>
                    <div className="flex flex-col gap-[3rem]">
                        <div className="name-contact-container flex gap-[5rem] m-0">
                            <motion.label
                                className="flex-[0.5] relative"
                                initial={{
                                    opacity: 0,
                                    x: -100,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <motion.span
                                    style={fontStyleUtil(
                                        "kr",
                                        1.25,
                                        400,
                                        1.25
                                    )}
                                    className="block absolute"
                                    initial={{
                                        scale: 1.0,
                                        y: 50 + "%",
                                    }}
                                    animate={
                                        isFocusName ||
                                        inputName !==
                                            (undefined ||
                                                null ||
                                                "")
                                            ? //위
                                              {
                                                  y:
                                                      -100 +
                                                      "%",
                                                  scale: 0.8,
                                              }
                                            : //아래
                                              {
                                                  y:
                                                      50 +
                                                      "%",
                                                  scale: 1.0,
                                              }
                                    }
                                >
                                    이름
                                </motion.span>
                                <input
                                    type="text"
                                    className="peer w-full h-[3rem] bg-[transparent] border-b-[1px] border-b-black100"
                                    required
                                    onFocus={() => {
                                        setIsFocusName(
                                            true
                                        );
                                    }}
                                    onBlur={() => {
                                        setIsFocusName(
                                            false
                                        );
                                    }}
                                    onChange={(e) => {
                                        setInputName(
                                            e.target.value
                                        );
                                    }}
                                    name="name"
                                />
                            </motion.label>
                            <motion.label
                                className="flex-[0.5] relative"
                                initial={{
                                    opacity: 0,
                                    x: -100,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.2,
                                    },
                                }}
                            >
                                <motion.span
                                    style={fontStyleUtil(
                                        "kr",
                                        1.25,
                                        400,
                                        1.25
                                    )}
                                    className="block absolute"
                                    initial={{
                                        scale: 1.0,
                                        y: 50 + "%",
                                    }}
                                    animate={
                                        isFocusContact ||
                                        inputContact !==
                                            (undefined ||
                                                null ||
                                                "")
                                            ? //위
                                              {
                                                  y:
                                                      -100 +
                                                      "%",
                                                  scale: 0.8,
                                              }
                                            : //아래
                                              {
                                                  y:
                                                      50 +
                                                      "%",
                                                  scale: 1.0,
                                              }
                                    }
                                >
                                    연락처
                                </motion.span>
                                <input
                                    type="text"
                                    // id="contactNumber"
                                    className={` ${
                                        isValid
                                            ? ""
                                            : "peer-invalid:ring-2 peer-invalid:ring-red-500"
                                    } w-full h-[3rem] bg-[transparent] border-b-[1px] border-b-black100 placeholder:text-black100`}
                                    required
                                    value={inputValue}
                                    onChange={handleChange}
                                    onFocus={() => {
                                        setIsFocusContact(
                                            true
                                        );
                                    }}
                                    onBlur={() => {
                                        setIsFocusContact(
                                            false
                                        );
                                    }}
                                    name="phone"
                                />
                                {!isValid && (
                                    <p className="text-red-500 text-sm mt-1 text-[red]">
                                        000-0000-0000과 같이
                                        작성해 주세요
                                    </p>
                                )}
                            </motion.label>
                            {/* <label className="flex-[0.5]">
                                <span className="block">
                                    연락처
                                </span>
                                <input
                                    type="text"
                                    id="contactNumber"
                                    className={`peer ${
                                        isValid
                                            ? ""
                                            : "peer-invalid:ring-2 peer-invalid:ring-red-500"
                                    } w-full h-[3rem] bg-[transparent] border-b-[1px] border-b-black100 placeholder:text-black100`}
                                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                                    required
                                    value={inputValue}
                                    onChange={handleChange}
                                />
                                {!isValid && (
                                    <p className="text-red-500 text-sm mt-1">
                                        000-0000-0000과 같이
                                        작성해 주세요
                                    </p>
                                )}
                            </label> */}
                        </div>
                        <motion.label
                            className="flex-[1] m-0 relative"
                            initial={{
                                opacity: 0,
                                x: -100,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.3,
                                },
                            }}
                        >
                            <motion.span
                                style={fontStyleUtil(
                                    "kr",
                                    1.25,
                                    400,
                                    1.25
                                )}
                                className="block absolute"
                                initial={{
                                    scale: 1.0,
                                    y: 50 + "%",
                                }}
                                required
                                animate={
                                    isFocusEmail ||
                                    inputEmail !==
                                        (undefined ||
                                            null ||
                                            "")
                                        ? //위
                                          {
                                              y: -100 + "%",
                                              scale: 0.8,
                                          }
                                        : //아래
                                          {
                                              y: 50 + "%",
                                              scale: 1.0,
                                          }
                                }
                            >
                                이메일
                            </motion.span>
                            <input
                                type="email"
                                className="peer w-full h-[3rem] bg-[transparent] border-b-[1px] border-b-black100"
                                required
                                onFocus={() => {
                                    setIsFocusEmail(true);
                                }}
                                onBlur={() => {
                                    setIsFocusEmail(false);
                                }}
                                onChange={validateEmail}
                                name="email"
                            />

                            {!isValidEmail && (
                                <p className="mt-2 invisible peer-invalid:visible text-red text-sm absolute text-[red]">
                                    이메일 양식에 맞게
                                    작성해주세요.
                                    example@email.com
                                </p>
                            )}
                        </motion.label>
                        <motion.label
                            className="flex-[1] m-0 relative"
                            initial={{
                                opacity: 0,
                                x: -100,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    delay: 0.3,
                                },
                            }}
                        >
                            <motion.span
                                className="block absolute"
                                style={fontStyleUtil(
                                    "kr",
                                    1.25,
                                    400,
                                    1.25
                                )}
                                initial={{
                                    scale: 1.0,
                                    y: 50 + "%",
                                }}
                                animate={
                                    isFocusMemo ||
                                    inputMemo !==
                                        (undefined ||
                                            null ||
                                            "")
                                        ? //위
                                          {
                                              y: -100 + "%",
                                              scale: 0.8,
                                          }
                                        : //아래
                                          {
                                              y: 50 + "%",
                                              scale: 1.0,
                                          }
                                }
                            >
                                메모
                            </motion.span>
                            <input
                                type="text"
                                className="peer w-full h-[3rem] bg-[transparent] border-b-[1px] border-b-black100"
                                required
                                onFocus={() => {
                                    setIsFocusMemo(true);
                                }}
                                onBlur={() => {
                                    setIsFocusMemo(false);
                                }}
                                onChange={(e) => {
                                    setInputMemo(
                                        e.target.value
                                    );
                                }}
                                name="memo"
                            />
                        </motion.label>
                    </div>
                    <motion.button
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.4,
                            },
                        }}
                        className={`w-[15rem] h-[5rem] rounded-full mt-[3.5rem] border-[1px] bg-black100 text-primary100 border-black100 `}
                        style={fontStyleUtil(
                            "kr",
                            1.5,
                            400,
                            1.5
                        )}
                        whileHover={{
                            scale: 1.2,
                            transition: {
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                        type="submit"
                    >
                        전송하기
                    </motion.button>
                </form>
            </div>
            <motion.div
                className="m-0"
                initial={{
                    opacity: 0,
                    x: 100,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.7, 0.25, 0.25, 0.9],
                    },
                }}
            >
                <Image
                    src={contactUsMain}
                    alt="contactUsMain"
                    className="object-contain w-[50rem]"
                />
            </motion.div>
        </div>
    );
}
