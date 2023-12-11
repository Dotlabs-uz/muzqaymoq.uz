import axios from "axios";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import InputMask from "react-input-mask";
import { motion } from "framer-motion";

const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

const Modal = ({ setModalHendel}: any) => {

    const SendMessage = (e: any) => {
        e.preventDefault();

        let info: any = {};

        const formData = new FormData(e.target);

        formData.forEach((value, key) => {
            info[key] = value;
        });

        let msg = `🆕 Э рахмат... \n`;
        // msg += `📕 Курс: ${modalInfo?.name1} ${modalInfo?.name2} \n`;
        // msg += `👨 - **** бор! \n`;
        // msg += `📞 Номер телефона: ${info?.phone} \n`;

        axios
            .post(URL, {
                chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
                parse_mode: "html",
                text: msg,
            })
            .then((res) => {
                if (res.status === 200 || res.status === 201) {
                    // e.target["name"].value = "";
                    // setPhone("");
                }
            })
            .catch((err) => console.log(err));
            setModalHendel(false)
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-full bg-[#00000074] backdrop-blur-sm z-[100]">
            <motion.div
                initial={{ y: "-200%", x: "-50%" }}
                animate={{ y: "-50%", x: "-50%" }}
                transition={{
                    delay: 0,
                    ease: "backOut",
                    duration: 1,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[#DCDFD2] w-[50%] max-lg:w-[70%] max-sm:w-[90%] p-10"
            >
                <h3 className="text-[36px] max-xl:text-[28px] max-lg:text-[25px] max-3xl:text-[30px] font-semibold text-center">
                    Name
                </h3>
                <p className="mt-5 text-[24px] max-3xl:text-[20px] max-2xl:text-[16px] leading-[32px] max-2xl:leading-[22.312px] text-center">
                    Info
                </p>
                <div className="w-3/4 max-md:w-[80%] max-sm:w-full m-auto mt-5">
                    <form
                        onSubmit={(e) => SendMessage(e)}
                        className="flex flex-col gap-5"
                    >
                        <input
                            type="text"
                            placeholder={"Name"}
                            required
                            name="name"
                            className="text-[24px] max-2xl:text-[20px] max-xl:text-[16px] max-sm:text-[14px] px-4 max-2xl:px-4 py-[10px] max-2xl:py-1 max-xl:py-[8px] max-xl:px-3 rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]"
                        />
                        <div className="overflow-hidden text-[24px] max-2xl:text-[20px] max-xl:text-[16px] max-sm:text-[14px] rounded-[10px] border border-orange text-[#9F9F9F] placeholder:text-[#9F9F9F]">
                            <InputMask
                                className="w-full py-[16px] max-2xl:py-1 px-6 max-2xl:px-4  max-xl:py-[8px] max-xl:px-3"
                                mask="+\9\98-(99)-999-99-99"
                                name="phone"
                                placeholder={"Number"}
                                required
                                // value={}
                                // onChange={(e: any) =>
                                //     setPhone(e.target.value)
                                // }
                            ></InputMask>
                        </div>
                        <button className="bg-[#53C9ED] m-auto text-xl max-md:text-lg max-sm:text-base font-semibold py-3 max-sm:py-2 w-full rounded-[10px] bg-blue">
                            Submit
                        </button>
                    </form>
                </div>
                <AiOutlineClose
                    onClick={() => setModalHendel(false)}
                    size={30}
                    className="cursor-pointer absolute top-5 right-5"
                />
            </motion.div>
        </div>
    );
};

export default Modal;
