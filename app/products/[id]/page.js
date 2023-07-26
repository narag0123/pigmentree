import React from "react";

export default function page(props) {
    return (
        <div className="wrapper w-[128rem]">
            {props.params.id}
        </div>
    );
}
