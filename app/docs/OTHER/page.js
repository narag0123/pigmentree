"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import fontStyleUtil from "@/app/util/fontStyle";

export default function page({ params }) {
    return (
        <div className="w-[128rem] flex flex-col gap-[3rem] min-h-[calc(100vh-24.2rem)] items-center justify-center">
            <div className="m-0">
                <div
                    style={fontStyleUtil("kr", 3, 900, 3)}
                    className="flex flex-col gap-[0.5rem] items-start mb-[2rem]"
                >
                    <div
                        className="m-0"
                        style={fontStyleUtil(
                            "en",
                            6.8,
                            900,
                            6.8
                        )}
                    >
                        DOWNLOAD OTHER
                    </div>
                </div>
                <div
                    style={fontStyleUtil("kr", 1.5, 400, 3)}
                >
                    이 외의 궁금하신 사항을 포함하여 다른
                    문서가 필요하시다면 CONTACT US 항목을
                    이용하여 저희에게 문의 주세요.
                </div>
            </div>
        </div>
    );
}
