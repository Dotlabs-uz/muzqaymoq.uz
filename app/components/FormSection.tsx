// components/Form.js
import React from "react";

const FormSection = () => {
    return (
        <div className="max-w-3xl max-2xl:max-w-2xl  max-xl:max-w-xl  max-lg:max-w-lg  max-md:max-w-md mx-auto p-4 bg-[#9D93C2] shadow-md rounded-md">
            <form>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="name"
                    >
                        Ism:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded bg-[#E9EDDF]"
                        name="name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="number"
                    >
                        Telefon raqam:
                    </label>
                    <input
                        type="text"
                        id="number"
                        className="w-full p-2 border border-gray-300 bg-[#E9EDDF] rounded"
                        name="number"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#2A1B68] text-white py-2 px-5 rounded hover:bg-[#2a1b68df] transition duration-300"
                >
                    Buyurtma berish
                </button>
            </form>
        </div>
    );
};

export default FormSection;
