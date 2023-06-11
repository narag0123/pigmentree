import Image from "next/image";
import React from "react";

import aboutUsMain from "public/asset/img/aboutUs/aboutUsMain.png";
import fontStyleUtil from "../util/fontStyle";

function AboutUs() {
    return (
        <div className="aboutUs pt-[5rem]">
            <div className="wrapper w-[128rem] flex justify-between items-end">
                <div className="w-[64rem] m-0 flex flex-col gap-[10rem]">
                    <div className="title flex flex-col gap-[2rem]">
                        <div className="flex items-center gap-[2rem] title m-0">
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
                                BE CREATIVE
                            </div>
                        </div>
                        <div
                            style={fontStyleUtil(
                                "en",
                                8,
                                900,
                                8
                            )}
                        >
                            WE ARE PIGMENTREE !
                        </div>
                    </div>
                    <div
                        style={fontStyleUtil(
                            "kr",
                            2,
                            400,
                            3
                        )}
                    >
                        <b>PIGMENTREE</b>는 염료(마이카)
                        판매를 전문으로 하는 온라인
                        상점입니다. 저희는 고품질의 염료를
                        제공하여 예술과 공예, 화장품 등
                        다양한 분야에서 창의적인 작업을
                        돕고자 합니다.
                        <br />
                        <br /> 저희 염료는 주로 마이카라는
                        천연 미네랄을 사용하여 제조됩니다.
                        이러한 마이카는 환경 친화적인 공정을
                        통해 추출되고 처리되어 고품질의
                        염료로 변환됩니다. 우리는 자연의
                        아름다움을 최대한 존중하며,{" "}
                        <b>지속 가능한 생산 방식</b>을
                        중요시하고 있습니다.
                    </div>
                </div>
                <div className="m-0">
                    <Image
                        src={aboutUsMain}
                        className="object-contain h-full w-full rounded-t-[25rem]"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
