import React from "react";
import fontStyleUtil from "../util/fontStyle";
import Image from "next/image";

import icon_star from "../../public/asset/img/icons/star.png";
import icon_globe from "../../public/asset/img/icons/globe.png";
import icon_arrow from "../../public/asset/img/icons/Arrow.png";
import explosion from "../../public/asset/img/explosion.png";
import icon_star4 from "../../public/asset/img/icons/star4.png";
import icon_docs_active from "../../public/asset/img/icons/docs.png";
import icon_docs from "../../public/asset/img/icons/docsGrey.png";
import icon_arrowGrey from "../../public/asset/img/icons/arrowGrey.png";
import icon_arrowGrey_active from "../../public/asset/img/icons/arrowGreyActive.png";

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

import { sheet } from "../data/sheet";

function Landing() {
    console.log(sheet);

    return (
        <div className="landing pt-[10rem]">
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
                        <div className="flex items-end">
                            <div>C</div>
                            <div className="flex flex-col">
                                <div className="flex gap-[10px] justify-center">
                                    <div className="circle w-[20px] h-[20px] bg-black100 rounded-full"></div>
                                    <div className="circle w-[20px] h-[20px] bg-black100 rounded-full"></div>
                                </div>
                                <div>O</div>
                            </div>
                            <div>LORIZE</div>
                        </div>
                        <div>IDEAS</div>
                    </div>
                    <div className="funcBox flex flex-col pt-[3rem] w-[47.8rem] gap-[4rem] m-0">
                        <div className="w-[100%] h-[10.4rem] rounded-full vid flex items-center p-[1rem]">
                            <div className="w-[82px] h-[82px] rounded-full bg-black100 backCircle m-0">
                                <div className="triangle"></div>
                            </div>
                        </div>
                        <div className="px-4 w-[47rem]">
                            <p
                                className="phrase"
                                style={fontStyleUtil(
                                    "kr",
                                    2,
                                    600,
                                    3
                                )}
                            >
                                당신의 아이디어에 생명을
                                불어 넣어보세요!
                            </p>
                            <p
                                className="phrase"
                                style={fontStyleUtil(
                                    "kr",
                                    2,
                                    300,
                                    3
                                )}
                            >
                                감각적인 컬러와 최고의
                                질감으로 여러분이 만드는
                                작품의 훌륭한 조력자가
                                되어드리겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divider-Btn py-[3rem] flex gap-[6rem] items-center">
                    <div className="Btn-recommend flex gap-[4rem]">
                        <button className="Btn-around bg-transparent rounded-full w-[23.1rem] h-[5rem] border-[1px] border-black60 m-0 px-[20px] flex items-center cursor-pointer">
                            <Image
                                className="icon_star m-0 w-[20px]"
                                src={icon_star}
                            />
                            <span
                                className="text-black60"
                                style={fontStyleUtil(
                                    "kr",
                                    1.8,
                                    400,
                                    2.7
                                )}
                            >
                                제품 둘러보기
                            </span>
                        </button>
                        <button className="Btn-around bg-transparent rounded-full w-[29rem] h-[5rem] border-[1px] border-black60 m-0 px-[20px] flex items-center cursor-pointer">
                            <Image
                                className="icon_globe m-0 w-[20px]"
                                src={icon_globe}
                            />
                            <span
                                className="text-black60"
                                style={fontStyleUtil(
                                    "kr",
                                    1.8,
                                    400,
                                    2.4
                                )}
                            >
                                추천 컬러 알아보기
                            </span>
                        </button>
                    </div>
                    <div className="divider-round w-[100%] h-[0px] border-y-[0.5px] border-black60 relative">
                        <div className="circle-end rounded-full w-[5px] h-[5px] bg-black60 absolute left-0 -translate-y-2/4"></div>
                        <div className="circle-end rounded-full w-[5px] h-[5px] bg-black60 absolute top-[50%] left-[100%] -translate-y-2/4"></div>
                    </div>
                </div>
                <div className="img-bottom-cont  mt-[10rem]  relative">
                    <div className="rounded-full bg-black100 w-[20rem] h-[20rem] absolute top-0 -translate-y-[50%] right-[13rem] z-0 flex justify-center items-center">
                        <Image
                            src={icon_arrow}
                            width={"57"}
                            className="m-0 cursor-pointer"
                        />
                    </div>
                    <div className="explosion-image-cont w-[1280px] h-[720px] overflow-hidden rounded-t-[12rem] flex items-end justify-end">
                        <Image
                            src={explosion}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <div
                id="cont2"
                className="w-[100%] bg-black100 h-fit pb-[18rem]"
            >
                <div className="band bg-[#000000] w-full h-[15rem] flex gap-[4rem]">
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
                        src={icon_star4}
                        className="w-[5rem] object-contain m-0"
                    />
                    <div
                        className="text-primary60 flex items-center m-0"
                        style={fontStyleUtil(
                            "en",
                            7.2,
                            900,
                            8.8
                        )}
                    >
                        COLORIZE IDEAS
                    </div>
                    <Image
                        src={icon_star4}
                        className="w-[5rem] object-contain m-0"
                    />
                </div>
                <div className="wrapper w-[128rem] mx-auto">
                    <div
                        className="title text-black20 py-[3rem]"
                        style={fontStyleUtil(
                            "en",
                            7.2,
                            900,
                            8.8
                        )}
                    >
                        OUR PRODUCT
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="flex-[0.85] m-0">
                            <div
                                className="text-black20"
                                style={fontStyleUtil(
                                    "kr",
                                    2.4,
                                    700,
                                    4.8
                                )}
                            >
                                훌륭한 작품은 훌륭한 재료로
                                부터
                            </div>
                            <div
                                className="text-black20"
                                style={fontStyleUtil(
                                    "kr",
                                    2,
                                    400,
                                    3
                                )}
                            >
                                훌륭한 작품은 훌륭한 재료로
                                부터 시작됩니다. 일류 쉐프의
                                요리는 신선한 재료로 부터
                                시작되듯이 말이죠! MSDS,
                                SGS, TDS 등과 같이 검증된
                                문서들로 더욱 안전하고 품질
                                또한 보장됩니다!
                            </div>
                        </div>
                        <div className="btns-sheet text-black20 flex flex-col m-0">
                            <div className="grid grid-cols-2 gap-[1rem]">
                                {sheet.map((e, i) => (
                                    <div className="flex justify-start items-center btn-box border border-black60 rounded-full py-[1rem] px-[2rem] gap-[1rem] w-full cursor-pointer">
                                        <Image
                                            src={icon_docs}
                                            width={20}
                                            className="m-0"
                                        />
                                        <div className="flex-col flex items-start m-0">
                                            <p
                                                className="text-black60"
                                                style={fontStyleUtil(
                                                    "en",
                                                    2,
                                                    700,
                                                    2
                                                )}
                                            >
                                                {e.name}
                                            </p>
                                            <p className="text-black60">
                                                {e.subName}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="purchaseLink w-full py-[10rem] ">
                        <div className="w-full h-[15rem] border border-y-black80 border-x-0 flex justify-between items-center">
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
                                {/* <div className="w-[1rem] h-[1rem] bg-primary100 rounded-full"></div> */}
                            </div>
                            <div className="m-0 w-[12rem] h-[12rem] flex items-center bg-black100">
                                <Image
                                    height={"40"}
                                    src={icon_arrowGrey}
                                />
                            </div>
                        </div>
                        <div className="w-full h-[15rem] border border-y-black80 border-x-0 flex justify-between items-center">
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
                                {/* <div className="w-[1rem] h-[1rem] bg-primary100 rounded-full"></div> */}
                            </div>
                            <div className="m-0 w-[12rem] h-[12rem] flex items-center bg-black100">
                                <Image
                                    height={"40"}
                                    src={icon_arrowGrey}
                                />
                            </div>
                        </div>
                        <div className="w-full h-[15rem] border border-y-black80 border-x-0 flex justify-between items-center">
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
                                {/* <div className="w-[1rem] h-[1rem] bg-primary100 rounded-full"></div> */}
                            </div>
                            <div className="m-0 w-[12rem] h-[12rem] flex items-center bg-black100">
                                <Image
                                    height={"40"}
                                    src={icon_arrowGrey}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="title flex justify-between gap-[8rem] mb-[1rem]">
                            <p
                                style={fontStyleUtil(
                                    "en",
                                    7.2,
                                    900,
                                    8.8
                                )}
                                className="text-black20"
                            >
                                BEST SERVICE
                            </p>
                            <p
                                style={fontStyleUtil(
                                    "en",
                                    2,
                                    400,
                                    3
                                )}
                                className="text-black20 flex-[1] flex items-center"
                            >
                                섬세한 예술가인 여러분을
                                위하여 최적의 서비스를
                                제공해 드립니다. 여러가지
                                샘플의 실제 컬러를 RGB,
                                CMYK, HSL 등 고객이
                                사용하시는 분야의 색상계에
                                맞춰 정보를 드립니다
                            </p>
                        </div>
                        <div className="image-cont flex flex-col gap-[3rem]">
                            <div className="flex gap-[3rem]">
                                <div className="relative">
                                    <div className="absolute top-0 left-0 bg-[black] opacity-50 w-full h-full"></div>
                                    <Image
                                        src={red_grey}
                                        width={340}
                                        height={340}
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute top-0 left-0 bg-[black] opacity-30 w-full h-full"></div>
                                    <Image
                                        src={orange_grey}
                                        height={340}
                                        className="flex-[1.0]"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-[3rem]">
                                <div className="relative">
                                    <div className="absolute top-0 left-0 bg-[black] opacity-30 w-full h-full"></div>
                                    <Image
                                        src={green_grey}
                                        width={340}
                                        height={340}
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute top-0 left-0 bg-[black] opacity-50 w-full h-full"></div>
                                    <Image
                                        src={blue_grey}
                                        width={340}
                                        height={340}
                                    />
                                </div>
                                <div className="relative">
                                    <div className="absolute top-0 left-0 bg-[black] opacity-20 w-full h-full"></div>
                                    <Image
                                        src={purple_grey}
                                        height={340}
                                        className="flex-[1.0]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-banner w-full bg-primary60 h-[56rem] rounded-b-[13rem] flex flex-col mt-[15rem] ">
                        <div className="divider flex p-[8rem] items-center justify-between m-0">
                            <div className="border border-y-[0.5px]  border-x-0 w-[40rem] m-0 relative">
                                <div className="rounded-full w-[4px] h-[4px] bg-black100 absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%]"></div>
                                <div className="rounded-full w-[4px] h-[4px] bg-black100 absolute top-0 left-[100%] translate-x-[0%] -translate-y-[50%]"></div>
                            </div>
                            <div className="icon_star_cont flex gap-[5rem] m-0">
                                <Image
                                    className="w-[3rem] h-[3rem] object-cover"
                                    src={icon_star_black}
                                />
                                <Image
                                    className="w-[3rem] h-[3rem] object-cover"
                                    src={icon_star_black}
                                />
                                <Image
                                    className="w-[3rem] h-[3rem] object-cover"
                                    src={icon_star_black}
                                />
                            </div>
                            <div className="border border-y-[0.5px]  border-x-0 w-[40rem] m-0 relative">
                                <div className="rounded-full w-[4px] h-[4px] bg-black100 absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%]"></div>
                                <div className="rounded-full w-[4px] h-[4px] bg-black100 absolute top-0 left-[100%] translate-x-[0%] -translate-y-[50%]"></div>
                            </div>
                        </div>
                        <div
                            style={fontStyleUtil(
                                "en",
                                7.2,
                                900,
                                8.8
                            )}
                        >
                            SHOW YOUR
                        </div>
                        <div
                            style={fontStyleUtil(
                                "en",
                                7.2,
                                900,
                                8.8
                            )}
                        >
                            COLORIZE IDEAS
                        </div>
                        <div className="btn-Cont flex gap-[2rem] mt-[4rem]">
                            <button
                                className="rounded-full bg-black100 text-primary60 border-black100 py-[2rem] px-[5rem]"
                                style={fontStyleUtil(
                                    "en",
                                    1.8,
                                    400,
                                    1.8
                                )}
                            >
                                TALKS NOW
                            </button>
                            <button
                                className="rounded-full bg-primary60 border border-black100 py-[2rem] px-[5rem]"
                                style={fontStyleUtil(
                                    "en",
                                    1.8,
                                    400,
                                    1.8
                                )}
                            >
                                FOLLOW US
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
