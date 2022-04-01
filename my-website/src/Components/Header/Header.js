import React from "react";
import './Header.css'
import 'cirrus-ui';

function Header() {
    return (
        <div class="header header-fixed unselectable header-animated">
            <div class="header-brand">
                <div class="nav-item">
                    <h4 class="title">Logan Calhoun</h4>
                </div>
            </div>
        </div>
    );
}

export default Header;