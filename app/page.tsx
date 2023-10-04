import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
        <main className="max-w-[1920px] m-auto relative max-2xl:max-w-[1536px] max-xl:max-w-[1280px] max-lg:max-w-[1024px] max-md:max-w-[768px] max-sm:max-w-[640px] bg-[#E9EDDF] px-24 max-[1330px]:px-16 max-sm:px-7 overflow-hidden">
            <Header />

            <FirstSection />

            <SecondSection />

            <ThirdSection />

            <FourthSection />

            <FifthSection />

        </main>
        <Footer/>
        </>
    );
}
