import React from "react";

export default function fontStyleUtil(
    lang,
    size,
    weight,
    lineHeight
) {
    const fontFamily = () => {
        if (lang === "kr") {
            return "Apple SD Gothic Neo";
        } else if (lang === "en") {
            return "proxima-nova, sans-serif";
        } else {
            return "Apple SD Gothic Neo";
        }
    };
    const font = {
        fontFamily: fontFamily(),
        fontSize: `${size}rem`,
        fontWeight: weight,
        lineHeight: `${lineHeight}rem`,
    };

    return font;
}
