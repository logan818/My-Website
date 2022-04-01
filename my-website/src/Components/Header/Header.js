import React from "react";
import './Header.css'
import 'cirrus-ui';

function Header() {
    return (
        //Header -> Header-brand, nav-left -> About Me, Contact Me
        <div class="header header-fixed unselectable header-animated">

            <div class="header-brand">
                <div class="nav-item">
                    <h4 class="title">Logan Calhoun</h4>
                </div>
            </div>

            <div class="nav-right">

                <div class="nav-item">
                    <a href="#">About Me</a>
                </div>

                <div class="nav-item">
                    <a href="#">Contact Me</a>
                </div>

            </div>
        </div>
    );
}

export default Header;