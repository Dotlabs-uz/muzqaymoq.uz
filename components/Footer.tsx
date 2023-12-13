import Image from "next/image";
import React from "react";

interface FooterSectionProps {}

const Footer: React.FC<FooterSectionProps> = () => {
    return (
        <footer
            id="contact"
            className="flex justify-center max-sm:flex-col gap-32 max-lg:gap-9 bg-[#282A27] pt-10 px-20 pb-20 max-sm:px-10 max-sm:pb-10"
        >
            <div>
                <Image src={'/image/logo.webp'} width={100} height={100} alt=""/>
            </div>
            <div>
                <h3 className="text-white text-2xl">Hamkorlar</h3>
                <ol className="text-white mt-4">
                    <li>hamkor</li>
                    <li className="mt-1">hamkor</li>
                    <li className="mt-1">hamkor</li>
                    <li className="mt-1">hamkor</li>
                </ol>
            </div>
            <div>
                <h3 className="text-white text-2xl">Adres</h3>
                <ol className="text-white mt-4">
                    <li>Samarqnd, Samarqand</li>
                    <li className="mt-1">Samarqnd, Samarqand</li>
                    <li className="mt-1">Samarqnd, Samarqand</li>
                    <li className="mt-1">Samarqnd, Samarqand</li>
                </ol>
            </div>
            <div>
                <h3 className="text-white text-2xl">Kontaktlar</h3>
                <ol className="text-white mt-4">
                    <li>Samrqand nomer: <a href="tel:+998909942345">+998 (90) 994-23-45</a></li>
                    <li className="mt-1">Telefon nomer: <a href="tel:+998909942345">+998 (90) 994-23-45</a></li>
                    <li className="mt-1">Telefon nomer: <a href="tel:+998909942345">+998 (90) 994-23-45</a></li>
                    <li className="mt-1">Telefon nomer: <a href="tel:+998909942345">+998 (90) 994-23-45</a></li>
                </ol>
            </div>
        </footer>
    );
};

export default Footer;
