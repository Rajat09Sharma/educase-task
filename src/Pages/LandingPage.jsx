

import { DarkButton } from "../components/DarkButton"
import { LightButton } from "../components/LightButton"

export const LandingPage = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex flex-col justify-end px-8 py-6 bg-[#F7F8F9] md:w-1/4 md:mx-auto">

                <h1 className="text-3xl font-bold">Welcome to PopX</h1>
                <p className="w-3/4 mt-1.5 mb-7 text-[#1D2226]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <div className=" space-y-3">
                    <DarkButton title={"Create Account"} />
                    <LightButton title={"Already Registered? Login"} />
                </div>


            </div>
        </>
    )
}
