import React from "react";
import './Header.css'
import 'cirrus-ui';
import { FaGithub } from "react-icons/fa"

function Header() {
    return (
        //Header -> Header-brand, nav-left -> About Me, Contact Me
        <div class="header header-fixed unselectable header-animated">

            <div class="header-brand">
                <div class="nav-item">
                    <h5>Logan Calhoun</h5>
                </div>
            </div>

            <div class="nav-right">
                <div class="nav-item">
                    <a href="#"><FaGithub size={35}/></a>
                </div>

                <div class="nav-item">
                    <a href="#">About Me</a>
                </div>

                <div class="nav-item">
                    <a href="#">LinkedIn</a>
                </div>

                <div class="nav-item">
                    <a href="#">Contact Me</a>
                </div>
            </div>
        </div>
    );
}

export default Header;