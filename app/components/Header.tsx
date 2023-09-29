import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    return (
        <header className="px-24 max-[1330px]:px-16 max-sm:px-10 z-10 pt-10 pb-5 w-full  absolute top-0 left-0 max-lg:bg-white flex items-center justify-between gap-5">
            <div className="flex pr-24 max-[1330px]:pr-0 items-center gap-7 w-[60%] max-lg:w-full justify-between">
                <GiHamburgerMenu size={30} className={"hidden max-lg:block"} />
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
    );
}

export default Header;
