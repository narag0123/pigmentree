import React from "react";

import Container1 from "./container1/container1";
import Container2 from "./container2/container2";

export const metadata = {
    openGraph: {
        title: "ABOUT US",
        description: "온라인 염료 판매 피그먼트리 입니다",
        siteName: "Next.js",
        images: [
            {
                url: "/favicon.ico",
                width: 800,
                height: 600,
            },
            {
                url: "/favicon.ico",
                width: 1800,
                height: 1600,
                alt: "My custom alt",
            },
        ],
        locale: "en_KR",
        type: "website",
    },
};

function AboutUs() {
    return (
        <div className="aboutUs pt-[5rem]">
            <Container1 />
            <Container2 />
        </div>
    );
}

export default AboutUs;
