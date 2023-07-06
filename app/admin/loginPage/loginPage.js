"use client";

import { signIn, signOut } from "next-auth/react";

export default function LoginPage() {
    return (
        <div className="not-login flex flex-col justify-center items-center">
            <h1>로그인 해 주세요</h1>
            <button
                onClick={() => {
                    // 이건 로그인
                    signIn();
                    // 이거하면 그냥 로그아웃임
                    // signOut()
                }}
                className="px-4 py-2 font-semibold text-sm bg-point text-[white] rounded-full shadow-sm"
            >
                로그인
            </button>
            <button
                onClick={() => {
                    // 이건 로그인
                    // signIn();
                    // 이거하면 그냥 로그아웃임
                    signOut();
                }}
                className="px-4 py-2 font-semibold text-sm bg-point text-[white] rounded-full shadow-sm"
            >
                로그아웃
            </button>
        </div>
    );
}
