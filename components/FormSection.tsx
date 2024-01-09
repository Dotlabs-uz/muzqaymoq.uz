'use client'
import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";

type Inputs = {
    name: string;
    email: string;
    number: string;
};

const URL = `https://api.telegram.org/bot6798685957:AAF25sStkFSD4tE_cV7epYuIKgiYirlp9B0/sendMessage`; 

const FormSection = () => {
    const [number, setNumber] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        
        if (data.email.length == 0) {
            let msg = `🆕 Бесплатная консультация! \n`;
            msg += `👨 Имя: ${data?.name} \n`;
            msg += `📞 Номер телефона: ${data.number} \n`;

            axios
                .post(URL, {
                    chat_id: "-1002072723994",
                    parse_mode: "html",
                    text: msg,
                })
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        setNumber("");
                        reset()
                    }
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="max-w-3xl max-2xl:max-w-2xl  max-xl:max-w-xl  max-lg:max-w-lg  max-md:max-w-md mx-auto p-5 bg-[#53C9ED] shadow-md rounded-md">
            <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-center items-center gap-3 w-[70%] max-sm:w-[90%] mt-5 m-auto"
                    action=""
                >
                    <input
                        {...register("name")}
                        placeholder="Ism"
                        title="name"
                        type="text"
                        className="border font-medium rounded-md px-5 py-3 max-sm:text-sm max-sm:px-3 max-sm:py-2 bg-[#E6EDF8] w-full"
                    />
                    <ReactInputMask
                        mask="+\9\98-(99)-999-99-99"
                        placeholder="Telefon raqam"
                        {...register("number", { required: true })}
                        value={number}
                        onChange={(e: any) => setNumber(e.target.value)}
                        className="border font-medium rounded-md px-5 py-3 max-sm:text-sm max-sm:px-3 max-sm:py-2 bg-[#E6EDF8] w-full"
                    ></ReactInputMask>
                    <input
                        {...register("email")}
                        title="email"
                        type="email"
                        className="hidden"
                    />
                    <button
                        type="submit"
                        className="bg-[#0c88ad] text-center text-[#E6EDF8] max-sm:text-sm px-5 py-3 max-sm:px-3 max-sm:py-2 rounded-md w"
                    >
                        Buyurtma berish
                    </button>
                </form>
        </div>
    );
};

export default FormSection;
