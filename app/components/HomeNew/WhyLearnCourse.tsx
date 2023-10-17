"use client"
import Image from 'next/image'
import React from 'react'

const item = [
    {
        title: ' 01. Learn',
        icon: '/online-learning.png',
        message: 'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
    },
    {
        title: '02. Graduate',
        icon: '/online-course.png',
        message: 'orem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
    },
    {
        title: '03. Work',
        icon: '/computer.png',
        message: 'orem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
    },
]

const WhyLearnCourse = () => {
    return (
        <>
            <div className="w-full bg-[#1A064F] p-10 pb-20">
                <div className="w-full" data-aos="fade-down" data-aos-delay="500">
                    <p className="text-white text-center font-bold text-[30px] mt-10">Why learn with our courses?</p>
                    <p className="text-white text-center text-sm mb-16">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-8 justify-center items-center' data-aos="fade-down" data-aos-delay="1000" >
                    {
                        item.map(ele => <div key={ele.title} className="max-w-[376px] h-[330px] bg-[#fff] rounded-xl p-10">
                            <div className="flex mt-3 items-center justify-center flex-col gap-4">
                                <div>
                                    <Image
                                        src={ele.icon}
                                        width={100}
                                        height={100}
                                        alt=""
                                        className="object-contain "
                                    />
                                </div>
                                <p className='font-bold text-2xl'>
                                    {ele.title}
                                </p>
                                <p className='text-center'>
                                    {ele.message}
                                </p>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </>
    )
}

export default WhyLearnCourse