"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [menuHendel, setMenuHendel] = useState(false);

    return (
        <>
            <header className="px-24 max-[1330px]:px-16 max-sm:px-10 z-10 pt-10 pb-5 w-full  fixed top-0 left-0 max-lg:bg-white flex items-center justify-between gap-5">
                <div className="flex pr-24 max-[1330px]:pr-0 items-center gap-7 w-[60%] max-lg:w-full justify-between">
                    <GiHamburgerMenu
                        size={30}
                        className={"hidden max-lg:block"}
                        onClick={() => setMenuHendel(true)}
                    />
                    <p className="font-['lepka'] text-2xl max-sm:text-xl max-[400px]:text-base">
                        ДИЗАЙН УХУИ СТУДИЯ
                    </p>
                    <div className="flex max-lg:hidden items-center gap-5 justify-between">
                        <Link href={"#"}>
                            <p>Домой</p>
                        </Link>
                        <Link href={"#"}>
                            <p>О нас</p>
                        </Link>
                        <Link href={"#"}>
                            <p>Каталог</p>
                        </Link>
                        <Link href={"#"}>
                            <p>Контакты</p>
                        </Link>
                    </div>
                </div>
            </header>
            {menuHendel ? (
                <div className="fixed top-0 left-0 w-full h-screen bg-[#CFCDCB] z-20">
                    <div className="px-24 max-[1330px]:px-16 max-sm:px-10 z-10 pt-10 pb-5 w-full max-lg:bg-white flex items-center justify-between gap-5">
                        <div className="flex pr-24 max-[1330px]:pr-0 items-center gap-7 w-[60%] max-lg:w-full justify-between">
                            <GiHamburgerMenu
                                size={30}
                                className={"hidden max-lg:block"}
                                onClick={() => setMenuHendel(false)}
                            />
                            <p className="font-['lepka'] text-2xl max-sm:text-xl max-[400px]:text-base">
                                ДИЗАЙН УХУИ СТУДИЯ
                            </p>
                        </div>
                    </div>
                    <div className="pt-10 pl-10 text-4xl font-black flex flex-col h-[85vh] items-start justify-between">
                        <ul>
                            <li>
                                <Link href={"#"}>Домой</Link>
                            </li>
                            <li className="mt-4">
                                <Link href={"#"}>О нас</Link>
                            </li>
                            <li className="mt-4">
                                <Link href={"#"}>Каталог</Link>
                            </li>
                            <li className="mt-4">
                                <Link href={"#"}>Соц Сети</Link>
                            </li>
                        </ul>
                        <div>
                            <h1>Контакты</h1>
                            <a className="text-2xl" href="tel:+998911234567">
                                +998 91 123 45 67
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Header;
