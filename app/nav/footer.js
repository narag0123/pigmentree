"use client";
import React, { useContext } from "react";
import fontStyleUtil from "../util/fontStyle";
import { UseContext } from "../store/store";

function Footer() {
    const context = useContext(UseContext);
    const { isMobile } = context;

    return (
        <div className="footer h-[12rem] bg-black100 sm:w-[100vw] sm:h-fit sm:py-[1rem]">
            <div className="wrapper w-[128rem] sm:w-[100vw] flex flex-col gap-[2rem] h-fit">
                <div
                    className="text-primary60 text-center font-en font-black text-[5rem] leading-[6.1rem] tracking-[0.1rem]
                    sm:text-[3.6rem]
                    "
                >
                    PIGMENTREE
                </div>
                <div
                    className="flex text-primary60 justify-between w-full font-en font-normal text-[1.8rem] leading-[1.8rem]
                    sm:text-[1.5rem] sm:leading-[1.5rem] sm:flex-col sm:justify-center sm:items-center sm:gap-[1rem]
                    "
                    // style={fontStyleUtil(
                    //     "en",
                    //     1.8,
                    //     400,
                    //     1.8
                    // )}
                >
                    <div className="m-0">AGREE & TERMS</div>
                    <div className="m-0">
                        @2023 PIGMENTREE ALL RIGHTS RESERVED
                    </div>
                    <div className="m-0">
                        PRIVACY POLICY
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
