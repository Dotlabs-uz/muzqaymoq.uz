import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

    return (
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
            <div className="flex pr-24 max-[1330px]:pr-0 items-center max-lg:items-end gap-7 w-full justify-between">
                <Image
                    src={"/muzqaymoquz logo.png"}
                    width={450}
                    height={350}
                    alt=""
                    className="max-xl:w-[400px] max-lg:w-[350px] max-sm:w-[250px]"
                />

                <nav>
                    <ul className="flex items-center justify-between font-semibold">
                        <li>
                            <a
                                onClick={(e) => scrollToContent(e, "contact")}
                                className={"cursor-pointer"}
                            >
                                <button className="font-bold px-3 py-2 rounded-md text-white bg-[#53C9ED] hover:shadow-lg hover:bg-[#00baf3] transition ease-linear max-sm:text-xs">
                                    Kontaktlar
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
}

export default Header;
