"use client";

import React, {
    useContext,
    useEffect,
    useState,
} from "react";

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
    const [isHover, setIsHover] = useState("none");
    const context = useContext(UseContext);
    const { queryMobile } = context;

    return (
        <div className={`landing mt-[10rem] sm:mt-[2rem] `}>
            <Container />
            <div
                id="cont2"
                className="bg-black100 h-fit pb-[18rem] overflow-x-hidden relative overflow-y-hidden sm:pb-[5rem]"
            >
                <Band />
                <div className="wrapper w-[128rem] mx-auto sm:w-[34rem]">
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
                        queryMobile={queryMobile}
                    />
                    <BottomBanner />
                </div>
            </div>
        </div>
    );
}

export default Landing;
