import React from 'react'
import { SiGmail } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";



const Contact = () => {
    return (
        <div id='contact' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='space-y-4'>
                    <h2 className='text-5xl font-bold'  data-aos="zoom-in-up">GET IN TOUCH :</h2>
                    <p className='text-gray-600 text-[18px] pt-2'  data-aos="zoom-in-up">
                        Drop me a line , give me a call , or send me a message by submitting the form.
                    </p>
                    <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                        <SiGmail size={27} /> yasirwaleed1990@gmail.com
                    </div>
                    <div className='flex gap-3 items-center'  data-aos="zoom-in-up">
                        <BsTelephonePlusFill size={27} /> +92 3418107763
                    </div>
                    <div>

                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex flex-col gap-1'  data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            className='h-[40px] bg-transparent border border-accent' id='name' />

                    </div>
                    <div className='flex flex-col gap-1'  data-aos="zoom-in-up">
                        <label htmlFor="email">E-mail</label>
                        <input type="text"
                            className='h-[40px] bg-transparent border border-accent' id='email' />

                    </div>
                    <div className='flex flex-col gap-1'  data-aos="zoom-in-up">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className='bg-transparent border border-accent' id='message' rows={8} >
                                </textarea>
                    </div>
                    <button className='bg-accent pt-2 px-6'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact