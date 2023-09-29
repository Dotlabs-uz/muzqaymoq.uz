import Image from "next/image";
import React from "react";

interface FooterSectionProps {}

const Footer: React.FC<FooterSectionProps> = () => {
    return (
        <footer className="flex justify-between max-sm:flex-col gap-20 max-lg:gap-9 bg-[#282A27] pt-10 px-20 pb-20 max-sm:px-10">
            <div className="text-white max-lg:w-3/4 max-sm:w-full">
                <p className="text-2xl font-medium font-['lepka']">
                    ДИЗАЙН УХУИ.СТУДИЯ
                </p>
                <p className="mt-5 w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
            <div className="max-lg:w-1/2 max-sm:w-full flex max-lg:flex-col justify-between gap-20 max-lg:gap-10">
                <div className="w-full text-white">
                    <p className="text-xl font-medium">Контакты</p>
                    <p className="mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="w-full text-white">
                    <p className="text-xl font-medium mb-5">Контакты</p>
                    <a href="tel:+998 91 123 45 67">
                        +998 91 123 45 67
                    </a>
                    <p className="mt-5">Мороженноетопкароче.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
