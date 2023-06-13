import "./globals.scss";
import styles from "./color.module.scss";
import Header from "./nav/header";
import Footer from "./nav/footer";
import UseProvider, { UseContext } from "./store/store";
import Head from "next/head";

export const metadata = {
    openGraph: {
        title: "Welcome to Pigmentree",
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

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <UseProvider>
                <body className="bg-primary60 ">
                    <Header />
                    {children}
                    <Footer />
                </body>
            </UseProvider>
        </html>
    );
}
