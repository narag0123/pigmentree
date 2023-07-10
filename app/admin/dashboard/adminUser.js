import { signOut } from "next-auth/react";
import React from "react";

export default function AdminUser() {
    return (
        <div
            onClick={() => {
                signOut();
            }}
        >
            admin
        </div>
    );
}
