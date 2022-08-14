import React from 'react'
import QRCodeImage from '../assets/images/image-qr-code.png'

const QRCode = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-c_light_gray'>
            <div className='bg-c_white rounded-xl max-w-[280px] shadow-md flex flex-col gap-5 pb-8 items-center p-3'>
                <img src={QRCodeImage} alt='qr_code' className='w-64 h-64 rounded-xl' />
                <h3 className='text-center text-xl text-c_dark_blue font-bold'>Improve your front-end skills by building projects</h3>
                <p className='text-center text-c_grayish_blue'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}

export default QRCode