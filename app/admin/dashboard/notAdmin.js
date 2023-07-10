import { signOut } from "next-auth/react";
import React from "react";

export default function NotAdmin() {
    return (
        <div
            onClick={() => {
                signOut();
            }}
        >
            Not_admin
        </div>
    );
}
