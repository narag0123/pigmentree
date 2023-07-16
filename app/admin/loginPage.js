"use client";

import fontStyleUtil from "@/app/util/fontStyle";
import {
    signIn,
    signOut,
    useSession,
} from "next-auth/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import NotAdmin from "./dashboard/notAdmin";
import AdminUser from "./dashboard/adminUser";

export default function LoginPage({ session }) {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const addUser = () => {
        fetch("/api/post/post_addUser", {
            method: "POST",
            body: JSON.stringify(session.user),
        });
    };

    useEffect(() => {
        const getUser = () => {
            fetch(
                `api/get/get_user?email=${session?.user.email}`,
                {
                    method: "GET",
                }
            )
                .then((response) => response.json())
                .then((result) => {
                    setUser(result); // 데이터를 가져온 후에 setUser() 호출
                });
        };
        if (session !== null) {
            // addUser();
            getUser();
        }
    }, []);

    return (
        <div className="not-login flex flex-col justify-center items-center w-[90%]">
            {session !== null && (
                <div>
                    {user?.admin === "admin" ? (
                        <AdminUser
                            session={session}
                            user={user}
                        />
                    ) : (
                        <NotAdmin />
                    )}
                </div>
            )}
            {session === null && (
                // login 안되었을떄
                <div>
                    <h1
                        className="my-[3rem]"
                        style={fontStyleUtil(
                            "kr",
                            1.8,
                            400,
                            1.8
                        )}
                    >
                        로그인 해 주세요
                    </h1>
                    <div className="flex gap-[1rem] ">
                        <button
                            onClick={() => {
                                signIn("google");
                            }}
                            style={fontStyleUtil(
                                "kr",
                                1.5,
                                400,
                                1.5
                            )}
                            className="px-[3rem] py-[1rem] font-semibold text-sm bg-black100 text-[white] rounded-full shadow-sm"
                        >
                            구글 로그인
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
