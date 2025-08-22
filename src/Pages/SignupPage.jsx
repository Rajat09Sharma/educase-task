import { useRef, useState } from "react";
import { FormInput } from "../components/FormInput"


export const SignupPage = () => {
    const [answer, setAnswer] = useState("yes");
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted!");
    };

    const triggerSubmit = () => {
        if (formRef.current) {
            formRef.current.requestSubmit(); // 👈 programmatically submits the form
        }
    };
    return (
        <>
            <div className='w-full h-[100vh] flex flex-col justify-between px-8 py-6 bg-[#F7F8F9] md:w-1/4 md:mx-auto'>
                <div>
                    <h1 className="text-3xl w-3/4 font-bold">Create your PopX account</h1>
                    <form className="mt-8 space-y-6" ref={formRef} onSubmit={handleSubmit}>
                        <FormInput label={"Full Name"} type={"text"} placeholder={"Enter your name"} />
                        <FormInput label={"Phone number"} type={"number"} placeholder={"Enter your name"} />
                        <FormInput label={"Password"} type={"password"} placeholder={"Enter password"} />
                        <FormInput label={"Company name"} type={"text"} placeholder={"Enter company name"} />
                        {/* Yes Option */}
                        <p className="font-semibold mb-2">Are you an agency?</p>
                        <div className="flex  gap-4 mt-3">
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="yes"
                                    className="w-6 h-6 accent-[#6C25FF] focus:ring-2 focus:ring-[#919191]"
                                    checked={answer === "yes"}
                                    onChange={(e) => setAnswer(e.target.value)}

                                />
                                <span>Yes</span>
                            </label>

                            {/* No Option */}
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    className="w-6 h-6 accent-blue-600 focus:ring-2 focus:ring-blue-500"
                                    checked={answer === "no"}
                                    onChange={(e) => setAnswer(e.target.value)}

                                />
                                <span>No</span>
                            </label>
                        </div>
                    </form>
                </div>
                <button onClick={triggerSubmit} className="px-1.5 py-2 bg-[#6C25FF] text-white w-full rounded-md cursor-pointer">Create Account </button>
            </div>
        </>
    )
}
