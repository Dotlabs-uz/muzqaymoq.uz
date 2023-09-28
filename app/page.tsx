import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";

export default function Home() {
  return (
    <main className="max-2xl:max-w-[1536px] max-xl:max-w-[1280px] max-lg:max-w-[1024px] max-md:max-w-[768px] max-sm:max-w-[640px] m-auto bg-[#E9EDDF] px-24 max-[1330px]:px-16 max-sm:px-7 overflow-hidden">
        <Header/>

		<FirstSection/>

		<SecondSection/>

    </main>
  );
}
