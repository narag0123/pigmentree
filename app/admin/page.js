import Link from "next/link";
import React from "react";

export default function Admin() {
    return (
        <div className="admin">
            <div className="left">
                <Link href={"/admin/addProduct"}>
                    ADD PRODUCT
                </Link>
            </div>
            <div className="right"></div>
        </div>
    );
}
