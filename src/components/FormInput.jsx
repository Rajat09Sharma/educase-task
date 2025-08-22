

export const FormInput = ({ label, type, placeholder }) => {
    return (
        <>
            <div className='form-container flex flex-col relative'>
                <label className='text-[#6C25FF] px-3 bg-[#F7F8F9] w-fit absolute -top-3 left-4'>{label}</label>
                <input className='py-3 px-3 w-full border-3 rounded-md border-[#CBCBCB] focus:outline-none' type={type} placeholder={placeholder} required />
            </div>
        </>
    )
}
