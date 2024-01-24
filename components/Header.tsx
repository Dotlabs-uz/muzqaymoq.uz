"use client";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";

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

const scrollToContent = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    contentId: string
) => {
    e.preventDefault();

    const content = document.getElementById(contentId);
    if (content) {
        content.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
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
                className="px-24 max-[1330px]:px-16 max-sm:px-10 z-50 pt-5 pb-5 max-sm:py-4 w-full absolute max-lg:fixed top-0 left-0 bg-white flex items-center justify-between gap-5"
            >
                <div className="flex pr-24 max-[1330px]:pr-0 items-center gap-7 w-full justify-between">
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

                    <Image src={'/muzqaymoquz logo+ (2).png'} width={300} height={250} alt="" className="max-xl:w-[300px] max-lg:w-[250px] max-sm:w-[200px]"/>

                    <nav className="max-lg:hidden">
                        <ul className="flex items-center gap-5 justify-between font-semibold">
                            <li>
                                <a
                                    onClick={(e) =>
                                        scrollToContent(e, "contact")
                                    }
                                    className={"cursor-pointer"}
                                >
                                    <button className="font-bold px-3 py-2 rounded-md text-white bg-[#53C9ED] hover:shadow-lg hover:bg-[#00baf3] transition ease-linear">Kontaktlar</button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.header>
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                transition={{ delay: 0, ease: "anticipate", duration: 0.5 }}
                variants={sidebar}
                className={
                    "hidden max-lg:block fixed z-40 left-0  w-full h-screen bg-white"
                }
            >
                <div className="pt-32 pl-10 text-4xl font-semibold flex flex-col h-[85vh] items-start justify-between">
                    <ul>
                        <li className="mt-4">
                            <a
                                onClick={(e) => {
                                    toggleOpen();
                                    scrollToContent(e, "contact");
                                }}
                                className={"cursor-pointer"}
                                href={'#contact'}
                            >
                                Kontaktlar
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
