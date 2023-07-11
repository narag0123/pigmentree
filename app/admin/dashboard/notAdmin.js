import fontStyleUtil from "@/app/util/fontStyle";
import { signOut } from "next-auth/react";
import React from "react";

export default function NotAdmin() {
    return (
        <div
            onClick={() => {
                signOut();
            }}
            className="flex flex-col items-center"
            style={fontStyleUtil("kr", 1.5, 400, 3)}
        >
            <div>관리자 계정이 아닙니다</div>
            <div>관리자 계정으로 로그인해 주세요</div>
            <button
                onClick={() => {
                    signOut();
                }}
                style={fontStyleUtil("kr", 1.5, 400, 1.5)}
                className="px-[3rem] py-[1rem] font-semibold text-sm bg-black100 text-[white] rounded-full shadow-sm"
            >
                로그아웃{" "}
            </button>
        </div>
    );
}
