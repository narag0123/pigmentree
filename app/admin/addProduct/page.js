import fontStyleUtil from "@/app/util/fontStyle";
import React from "react";

export default async function addProduct() {
    return (
        <div className="wrapper w-[128rem] min-h-[calc(100vh-24.2rem)]">
            <form
                className="flex flex-col gap-[3rem] items-center"
                action="/api/post/post_product"
                method="POST"
            >
                <div className="main-category w-full bg-[#ffffff] rounded-3xl flex justify-between items-center p-10">
                    <select
                        className="main-category w-[30%] h-fit p-3  rounded-xl"
                        style={fontStyleUtil(
                            "kr",
                            1.5,
                            400,
                            2
                        )}
                        name="mainID"
                    >
                        <option value={"single"}>
                            단품
                        </option>
                        <option value={"sample"}>
                            샘플
                        </option>
                        <option value={"package"}>
                            패키지
                        </option>
                    </select>
                    <select
                        className="mid-category w-[30%] h-fit p-3  rounded-xl"
                        style={fontStyleUtil(
                            "kr",
                            1.5,
                            400,
                            2
                        )}
                        name="midID"
                    >
                        <option
                            hidden=""
                            disabled="disabled"
                            defaultValue="selected"
                            value=""
                        >
                            컬러
                        </option>
                        <option value={"Sparkle Pearl"}>
                            Sparkle Pearl
                        </option>
                        <option value={"Gold Pearl"}>
                            Gold Pearl
                        </option>
                        <option value={"Red Brown"}>
                            Red Brown
                        </option>
                        <option value={"Wine Red"}>
                            Wine Red
                        </option>
                        <option value={"Red Pearl"}>
                            Red Pearl
                        </option>
                        <option value={"Lemon Yellow"}>
                            Lemon Yellow
                        </option>
                        <option value={"Glossy Blue"}>
                            Glossy Blue
                        </option>
                        <option value={"Shine Blue"}>
                            Shine Blue
                        </option>
                        <option value={"Bright Blue"}>
                            Bright Blue
                        </option>
                        <option value={"Luster Purple"}>
                            Luster Purple
                        </option>
                    </select>
                    <select
                        className="sub-category w-[30%] h-fit p-3  rounded-xl"
                        style={fontStyleUtil(
                            "kr",
                            1.5,
                            400,
                            2
                        )}
                        name="subID"
                    >
                        <option
                            hidden=""
                            disabled="disabled"
                            defaultValue="selected"
                            value=""
                        >
                            무게
                        </option>
                        <option value={"10g"}>10g</option>
                        <option value={"30g"}>30g</option>
                        <option value={"50g"}>50g</option>
                        <option value={"100g"}>100g</option>
                    </select>
                </div>
                <div className="main-category w-full  bg-[#ffffff] rounded-3xl flex p-10 ">
                    <div className="input-container flex-[0.3]">
                        <p>
                            <label htmlFor="nameid">
                                제품명
                            </label>
                        </p>
                        <input
                            id="nameid"
                            placeholder="RED"
                            className="border-b-[1px] border-b-black100 h-[3rem] px-0 py-10 w-full"
                            style={fontStyleUtil(
                                "kr",
                                1.5,
                                400,
                                2
                            )}
                            name="name"
                        />
                    </div>
                    <div className="input-container  flex-[0.3]">
                        <p>
                            <label htmlFor="nameid">
                                가격
                            </label>
                        </p>
                        <input
                            id="nameid"
                            placeholder="7500"
                            className="border-b-[1px] border-b-black100 h-[3rem] px-0 py-10 w-full"
                            style={fontStyleUtil(
                                "kr",
                                1.5,
                                400,
                                2
                            )}
                            name="price"
                        />
                    </div>
                    <div className="input-container  flex-[0.3]">
                        <p>
                            <label htmlFor="nameid">
                                제품설명
                            </label>
                        </p>
                        <input
                            id="nameid"
                            placeholder="Hello Yellow"
                            className="border-b-[1px] border-b-black100 h-[3rem] px-0 py-10 w-full"
                            style={fontStyleUtil(
                                "kr",
                                1.5,
                                400,
                                2
                            )}
                            name="detail"
                        />
                    </div>
                </div>
                <button
                    className="px-3 py-5 bg-black100 w-[15rem] text-black20 rounded-full"
                    style={fontStyleUtil("kr", 1.5, 400, 2)}
                    type="submit"
                >
                    전송
                </button>
            </form>
        </div>
    );
}
