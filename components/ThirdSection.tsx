import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
import ThirdSectionChild from "./ThirdSectionChild";
import "swiper/css";

const cardVariants: Variants = {
    offscreen: { x: "-20%", opacity: 0 },
    onscreen: { x: 0, opacity: 1 },
    offscreen2: { x: "100%" },
    onscreen2: { x: 0 },
};

interface SecondSectionProps {}

const iceCreamArr = [
    {
        id: 13,
        src: "/image/iceCreamArrImages/Milc.webp",
        title:"Sutli",
    },
    {
        id: 0,
        src: "/image/iceCreamArrImages/banan.webp",
        title:"Banan ta'mli",
    },
    {
        id: 1,
        src: "/image/iceCreamArrImages/Caramel.webp",
        title: "Caramel ta'mli",
    },
    {
        id: 2,
        src: "/image/iceCreamArrImages/choco.webp",
        title: "Shokolad ta'mli",
    },
    {
        id: 3,
        src: "/image/iceCreamArrImages/Dark choco.webp",
        title: "Qora shokolad",
    },
    {
        id: 4,
        src: "/image/iceCreamArrImages/Kiwi.webp",
        title: "Kiwi ta'mli",
    },
    {
        id: 5,
        src: "/image/iceCreamArrImages/mac.d.webp",
        title: "Macdonald",
    },
    {
        id: 6,
        src: "/image/iceCreamArrImages/Mango.webp",
        title: "Mango ta'mli",
    },
    {
        id: 7,
        src: "/image/iceCreamArrImages/Nutella.webp",
        title: "Nutella ta'mli",
    },
    {
        id: 8,
        src: "/image/iceCreamArrImages/Qovun.webp",
        title: "Qovun ta'mli",
    },
    {
        id: 9,
        src: "/image/iceCreamArrImages/raffaello.webp",
        title: "raffaello",
    },
    {
        id: 10,
        src: "/image/iceCreamArrImages/strawberry.webp",
        title: "Qulupnay ta'mli",
    },
    {
        id: 11,
        src: "/image/iceCreamArrImages/Tarvuz.webp",
        title: "Tarbuz ta'mli",
    },
    {
        id: 12,
        src: "/image/iceCreamArrImages/Vanilla.webp",
        title: "Vanilla ta'mli",
    },
];

const ThirdSection: React.FC<SecondSectionProps> = () => {
    return (
        <section className="mb-20 mt-32 max-sm:mt-24 max-sm:mb-7">
            <h2
                className='text-4xl max-sm:text-xl font-["lepka"]'
                id="catalog"
            >
                Muzqaymoq aralashmalari
            </h2>

            <div className="relative mt-5 max-sm:mt-2 h-auto">
                <Swiper
                    className="w-[120vw] h-auto"
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        1668: {
                            slidesPerView: 6,
                        },
                        500: {
                            slidesPerView: 4,
                        },
                        0: {
                            slidesPerView: 3,
                            spaceBetween:10,
                        },
                    }}
                >
                    {iceCreamArr.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <ThirdSectionChild
                                src={item.src}
                                title={item.title}
                            />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default ThirdSection;
