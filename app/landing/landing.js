"use client";

import React, {
    useContext,
    useEffect,
    useState,
    useMemo,
    useRef,
} from "react";
import fontStyleUtil from "../util/fontStyle";
import Image from "next/image";

import styles from "../color.module.scss";

import { sheet } from "../data/sheet";
import { UseContext } from "../store/store";
import Container from "./container1/container";
import Band from "./container2/band";
import OurProduct from "./container2/ourProduct";
import PurchaseLink from "./container2/purchaseLink";
import BestService from "./container2/bestService";
import BottomBanner from "./container2/bottomBanner";

function Landing() {
    const context = useContext(UseContext);
    const { isPage, setIsPage } = context;
    const [isHover, setIsHover] = useState("none");

    useEffect(() => {
        setIsPage("landing");
    }, []);

    return (
        <div className="landing pt-[10rem]">
            <Container />
            <div
                id="cont2"
                className="bg-black100 h-fit pb-[18rem] overflow-x-hidden relative"
            >
                <Band />
                <div className="wrapper w-[128rem] mx-auto">
                    <OurProduct
                        sheet={sheet}
                        styles={styles}
                        isHover={isHover}
                        setIsHover={setIsHover}
                    />
                    <PurchaseLink
                        styles={styles}
                        isHover={isHover}
                        setIsHover={setIsHover}
                    />
                    <BestService
                        isHover={isHover}
                        setIsHover={setIsHover}
                    />
                    <BottomBanner />
                </div>
            </div>
        </div>
    );
}

export default Landing;
