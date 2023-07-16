"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import download from "/public/asset/img/docs/arrow.down.png";
import fontStyleUtil from "@/app/util/fontStyle";

// import MSDS_KT_100 from "/asset/certiDocs/MSDS/MSDS-KT-100.pdf";

export default function page({ params }) {
    const [products, setProducts] = useState();

    // Function will execute on click of button
    const pdfDownloadHandler = (code, color) => {
        // using Java Script method to get PDF file
        fetch(
            `/asset/certiDocs/${params.id}/${params.id}-${code}.pdf`
        ).then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = `${params.id}_${code}_(${color}).pdf`;
                alink.click();
            });
        });
    };

    useEffect(() => {
        const get_products = () => {
            fetch(`/api/get/get_products`, {
                method: "GET",
            })
                .then((r) => r.json())
                .then((result) => {
                    setProducts(result);
                });
        };
        get_products();
    }, []);

    return (
        <div className="w-[128rem] min-h-[calc(100vh-24.2rem)] flex flex-col gap-[3rem]">
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
                        DOWNLOAD {params.id}
                    </div>
                </div>
                <div
                    style={fontStyleUtil("kr", 1.5, 400, 3)}
                >
                    하단의 원하시는 컬러의 카드를 클릭하시면
                    저희 제품의 {params.id} 공식문서를 다운
                    받으실 수 있습니다. <br /> 검증된
                    문서들로 믿고 안전하게 사용하실 수 있고
                    품질 또한 보장됩니다!
                </div>
            </div>
            <hr className="w-full " />
            <div className="w-full grid grid-cols-3 gap-[2rem] mb-[3rem]">
                {products?.map((e, i) => (
                    <motion.button
                        className="cards w-full flex justify-between p-[3rem] border-[1px] border-black100 rounded-xl cursor-pointer"
                        key={i}
                        onClick={() => {
                            pdfDownloadHandler(
                                e.code,
                                e.color
                            );
                        }}
                        whileHover={{
                            y: -10,
                            boxShadow:
                                "4px 4px 10px rgba(0, 0, 0, 0.25)",
                            // backgroundColor: "#ebebeb",
                            transition: {
                                ease: [0.25, 0.7, 0.25, 1],
                            },
                        }}
                    >
                        <div
                            className="m-0"
                            style={fontStyleUtil(
                                "en",
                                1.8,
                                400,
                                1.8
                            )}
                        >
                            {e.color}
                        </div>
                        <div className="m-0">
                            <Image
                                className="m-0"
                                src={download}
                                alt="download"
                                width={20}
                                height={20}
                            />
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
