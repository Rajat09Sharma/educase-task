
import { FormInput } from '../components/FormInput'

export const LoginPage = () => {
    return (
        <>
            <div className='w-full h-[100vh] flex flex-col justify-start px-8 py-6 bg-[#F7F8F9] md:w-1/4 md:mx-auto'>
                <h1 className='text-3xl w-3/4'>Signin to your PopX account</h1>
                <p className='w-3/4 mt-2 mb-9 text-[#1D2226]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <form className='space-y-5'>
                    <FormInput label={"Email Address"} type={"email"} placeholder={"Enter email address"} />

                    <FormInput label={"Password"} type={"password"} placeholder={"Enter password"} />
                    
                    <button type='submit' className='px-1.5 py-2 bg-[#CBCBCB] text-white w-full rounded-md cursor-pointer'>Login</button>
                </form>
            </div>
        </>
    )
}
