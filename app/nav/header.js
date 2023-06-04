import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="wrapper w-[128rem] mx-auto py-[4rem] flex justify-between">
                <div className="logo m-0">Pigmentree</div>
                <div className="nav flex gap-[66px] m-0">
                    <div>About Us</div>
                    <div>Products</div>
                    <div>Promotions</div>
                    <div>Contact Us</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
