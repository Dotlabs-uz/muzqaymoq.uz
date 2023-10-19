"use client";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion, useCycle } from "framer-motion";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

function Header() {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <>
            <motion.header
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 1,
                }}
                id="home"
                className="px-24 max-[1330px]:px-16 max-sm:px-10 z-50 pt-10 max-sm:py-5 pb-5 w-full  absolute max-lg:fixed top-0 left-0 max-lg:bg-white flex items-center justify-between gap-5"
            >
                <div className="flex pr-24 max-[1330px]:pr-0 items-center gap-7 w-[60%] max-lg:w-full justify-between">
                    {isOpen ? (
                        <AiOutlineClose
                            size={30}
                            className={"hidden max-lg:block"}
                            onClick={() => toggleOpen()}
                        />
                    ) : (
                        <GiHamburgerMenu
                            size={30}
                            className={"hidden max-lg:block"}
                            onClick={() => toggleOpen()}
                        />
                    )}

                    <p className="font-['lepka'] text-2xl max-sm:text-xl max-[400px]:text-base">
                        ДИЗАЙН УХУИ СТУДИЯ
                    </p>
                    <div className="flex max-lg:hidden items-center gap-5 justify-between">
                        <a href={"#home"}>
                            <p>Домой</p>
                        </a>
                        <a href={"#catalog"}>
                            <p>Каталог</p>
                        </a>
                        <a href={"#contact"}>
                            <p>Контакты</p>
                        </a>
                    </div>
                </div>
            </motion.header>
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                transition={{ delay: 0, ease: "anticipate", duration: 0.5 }}
                variants={sidebar}
                className={
                    "hidden max-lg:block fixed z-40 left-0  w-full h-screen bg-[#E9EDDF]"
                }
            >
                <div className="pt-32 pl-10 text-4xl font-black flex flex-col h-[85vh] items-start justify-between">
                    <ul>
                        <li>
                            <a onClick={() => toggleOpen()} href={"/#home"}>
                                Домой
                            </a>
                        </li>
                        <li className="mt-4">
                            <a
                                onClick={() => toggleOpen()}
                                href={"/#catalog"}
                            >
                                Каталог
                            </a>
                        </li>
                        <li className="mt-4">
                            <a
                                onClick={() => toggleOpen()}
                                href={"/#contact"}
                            >
                                Соц Сети
                            </a>
                        </li>
                    </ul>
                    <div>
                        <h1>Контакты</h1>
                        <a className="text-2xl" href="tel:+998911234567">
                            +998 91 123 45 67
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Header;
