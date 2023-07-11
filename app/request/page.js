import React from "react";
import fontStyleUtil from "../util/fontStyle";

function Request() {
    return (
        <div
            className={`request w-[128rem] h-[72vh] flex justify-center items-center`}
            style={fontStyleUtil("kr", 2, 400, 2)}
        >
            준비중입니다
        </div>
    );
}

export default Request;
