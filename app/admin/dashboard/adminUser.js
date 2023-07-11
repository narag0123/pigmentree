"use client";
import fontStyleUtil from "@/app/util/fontStyle";
import { format } from "date-fns";
import { signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function AdminUser({ session, user }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getQna = () => {
            fetch(`api/get/get_contactUs`, {
                method: "GET",
            })
                .then((response) => response.json())
                .then((result) => {
                    setData(result); // 데이터를 가져온 후에 setUser() 호출
                });
        };
        getQna();
    }, []);

    return (
        <div className="flex flex-col items-end justify-start gap-[3rem] admin">
            <button
                onClick={() => {
                    signOut({ callbackUrl: "/admin" });
                }}
                style={fontStyleUtil("kr", 1.5, 400, 1.5)}
                className="px-[3rem] py-[1rem] font-semibold text-sm bg-black100 text-[white] rounded-full shadow-sm"
            >
                로그아웃
            </button>
            <h1
                className="mx-auto"
                style={fontStyleUtil("en", 2, 900, 2)}
            >
                QNA LIST
            </h1>
            <div className="qna-container mb-[3rem] w-[90vw] border-[1px] border-black100 rounded-3xl flex flex-col gap-[2rem] p-[3rem]">
                {data?.map((e, i) => {
                    const timestamp = e._id
                        .toString()
                        .substring(0, 8);

                    const date = new Date(
                        parseInt(timestamp, 16) * 1000
                    );

                    const formatDate = format(
                        date,
                        "yyyy-M-d"
                    );

                    // const date2 = e._id.getTimestamp();

                    return (
                        <div className="border-[1px] border-black100 w-full rounded-xl">
                            <div
                                className="flex justify-between border-[1px] border-black100 m-[1rem] p-[1rem]"
                                style={fontStyleUtil(
                                    "kr",
                                    1.5,
                                    400,
                                    1.5
                                )}
                            >
                                <div className="flex-[0.25]">
                                    {formatDate}
                                </div>
                                <div className="flex-[0.25]">
                                    {e.name}
                                </div>
                                <div className="flex-[0.25]">
                                    {e.email}
                                </div>
                                <div className="flex-[0.25]">
                                    {e.phone}
                                </div>
                            </div>
                            <div
                                className="border-[1px] border-black100 m-[1rem] p-[1rem] min-h-[10rem]"
                                style={fontStyleUtil(
                                    "kr",
                                    1.5,
                                    400,
                                    1.5
                                )}
                            >
                                {e.memo}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
