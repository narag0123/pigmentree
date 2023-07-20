import React from "react";
import fontStyleUtil from "../util/fontStyle";

function Footer() {
    return (
        <div className="footer h-[12rem] bg-black100 sm:w-[340px]">
            <div className="wrapper w-[128rem] sm:w-[340px] flex flex-col gap-[2rem]">
                <div
                    className="text-primary60 text-center"
                    style={{
                        ...fontStyleUtil("en", 5, 900, 6.1),
                        letterSpacing: "0.1em",
                    }}
                >
                    PIGMENTREE
                </div>
                <div
                    className="flex text-primary60 justify-between w-full"
                    style={fontStyleUtil(
                        "en",
                        1.8,
                        400,
                        1.8
                    )}
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
