// "use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";
import ThirdSectionChild from "./ThirdSectionChild";
import "swiper/css";

const cardVariants: Variants = {
    offscreen: { x: '-20%', opacity: 0},
    onscreen: { x: 0, opacity:1 },
    offscreen2: { x: "100%"},
    onscreen2: { x: 0},
  };

interface SecondSectionProps {}

const iceCreamArr = [
    {
        id:0,
        src: "/image/iceCreamArrImages/white.webp",
        title:"McDonald's ta'mli"
    },
    {
        id:1,
        src: "/image/iceCreamArrImages/banan.webp",
        title:"Banan ta'mli"
    },
    {
        id:2,
        src: "/image/iceCreamArrImages/karamel.webp",
        title:"Karamel ta'mli"
    },
    {
        id:3,
        src: "/image/iceCreamArrImages/kivi.webp",
        title:"Kivi ta'mli"
    },
    {
        id:4,
        src: "/image/iceCreamArrImages/klubnika.webp",
        title:"Qulupnay ta'mli"
    },
    {
        id:5,
        src: "/image/iceCreamArrImages/kovun.webp",
        title:"Qovun ta'mli"
    },
    {
        id:6,
        src: "/image/iceCreamArrImages/mango.webp",
        title:"Mango ta'mli"
    },
    {
        id:7,
        src: "/image/iceCreamArrImages/shakalot.webp",
        title:"Chocolate ta'mli"
    },
    {
        id:8,
        src: "/image/iceCreamArrImages/vanilniy.webp",
        title:"Vanilla ta'mli"
    },
    {
        id:9,
        src: "/image/iceCreamArrImages/white.webp",
        title:"Plombir"
    },
    {
        id:10,
        src: "/image/iceCreamArrImages/yarko_krasniy.webp",
        title:"Tarbuz ta'mli"
    },
]

const ThirdSection: React.FC<SecondSectionProps> = () => {
    return (
        <section className="mb-20 mt-40">
            <motion.h2
                initial={'offscreen'}
                whileInView={'onscreen'}
                variants={cardVariants}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 3,
                }}
                className='text-4xl font-["lepka"]'
                id="catalog"
            >
                Muzqaymoq aralashmalari
            </motion.h2>

            <motion.div
                initial={'offscreen2'}
                whileInView={'onscreen2'}
                variants={cardVariants}
                viewport={{ once: true}}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 2,
                }}
                className="relative mt-5 h-auto"
            >
                <Swiper
                    className="w-[120vw] h-auto"
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        1668: {
                            slidesPerView: 6,
                        },
                        769: {
                            slidesPerView: 4,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {iceCreamArr.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <ThirdSectionChild src={item.src} title={item.title}/>
                        </SwiperSlide>
                    ))}
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </motion.div>
        </section>
    );
};

export default ThirdSection;
