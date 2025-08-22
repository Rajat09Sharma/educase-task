
import userImg from "../assets/Ellipse.png";
import photoImg from "../assets/Group.png"


export const ProfilePage = () => {
    return (
        <>
            <p className="w-full text-xl py-6 px-4 bg-white">Account Settings</p>
            <div className='w-full h-[100vh] flex flex-col justify-start px-4 py-6 bg-[#F7F8F9] md:w-1/4 md:mx-auto'>
                <div className="flex justify-start gap-8 mb-5">
                    <div className="relative">
                        <img src={userImg} />
                        <img src={photoImg} className="absolute bottom-0 right-0" />
                    </div>
                    <div className="">
                        <h2 className="font-bold">Marry Doe</h2>
                        <p>Marry@Gmail.Com</p>
                    </div>
                </div>
                <p className="text-[#1D2226] leading-tight w-full">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                <hr className="w-full border-0 border-t-2 border-dashed border-gray-400 my-8" />
            </div>


        </>
    )
}
