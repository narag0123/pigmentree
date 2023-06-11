import Image from "next/image";
import { useMemo, useRef } from "react";
import fontStyleUtil from "@/app/util/fontStyle";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

import icon_star4 from "public/asset/img/icons/star4.png";

export default function Band({}) {
    const ParallaxText = useMemo(
        () =>
            ({ children, baseVelocity = 100 }) => {
                const baseX = useMotionValue(0);
                const { scrollY } = useScroll();
                const scrollVelocity = useVelocity(scrollY);
                const smoothVelocity = useSpring(
                    scrollVelocity,
                    {
                        damping: 50,
                        stiffness: 400,
                    }
                );
                const velocityFactor = useTransform(
                    smoothVelocity,
                    [0, 1000],
                    [0, 5],
                    {
                        clamp: false,
                    }
                );

                const x = useTransform(
                    baseX,
                    (v) => `${wrap(0, -21.8, v)}%`
                );

                const directionFactor = useRef(1);
                useAnimationFrame((t, delta) => {
                    let moveBy =
                        directionFactor.current *
                        baseVelocity *
                        (delta / 1000);

                    if (velocityFactor.get() < 0) {
                        directionFactor.current = -1;
                    } else if (velocityFactor.get() > 0) {
                        directionFactor.current = 1;
                    }

                    moveBy +=
                        directionFactor.current *
                        moveBy *
                        velocityFactor.get();

                    baseX.set(baseX.get() + moveBy);
                });

                return (
                    <motion.div
                        className="scroller flex w-fit gap-[4rem] items-center h-full"
                        style={{ x }}
                    >
                        {children}
                        {children}
                        {children}
                        {children}
                        {children}
                    </motion.div>
                );
            },
        []
    );

    return (
        <div className="band bg-[#000000] w-fit h-[15rem]">
            <ParallaxText baseVelocity={3}>
                <div
                    className="text-primary60 flex items-center m-0"
                    style={fontStyleUtil(
                        "en",
                        7.2,
                        900,
                        8.8
                    )}
                >
                    PIGMENTREE
                </div>
                <Image
                    alt="icon_star4"
                    src={icon_star4}
                    className="w-[5rem] h-[5rem] object-contain m-0"
                />
                <div
                    className="text-primary60 flex items-center m-0 w-fit"
                    style={fontStyleUtil(
                        "en",
                        7.2,
                        900,
                        8.8
                    )}
                >
                    COLORIZE&nbsp;IDEAS
                </div>
                <Image
                    alt="icon_star4"
                    src={icon_star4}
                    className="w-[5rem] h-[5rem] object-contain m-0"
                />
            </ParallaxText>
        </div>
    );
}
