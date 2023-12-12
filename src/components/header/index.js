import React from 'react'
import style from "./styles.module.css"
import { IoHome } from "react-icons/io5";
import { PiUserSquareThin } from "react-icons/pi";
import { LiaSitemapSolid } from "react-icons/lia";
import { GiWolfHead } from "react-icons/gi";
import { IoMdPersonAdd } from "react-icons/io";
import IconLink from './iconLink';
function Header() {
    return (
        <header className={style.header}>
            <div>
                <IconLink path={"/"} icon={<GiWolfHead />} />
            </div>
            <ul>
                <li>
                    <IconLink path={"/"} icon={<IoHome />} />
                </li>
                <li>
                    <IconLink path={"/user"} icon={<PiUserSquareThin  />} />
                </li>
                <li>
                    <IconLink path={"/product"} icon={<LiaSitemapSolid  />} />
                </li>
                <li>
                    <IconLink path={"/user/add"} icon={<IoMdPersonAdd  />} />
                </li>
            </ul>
        </header>
    )
}

export default Header
