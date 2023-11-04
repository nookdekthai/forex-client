"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const PDFViewer = dynamic(() => import("../../components/Ebook/PDFViewer"), {
    ssr: false
});

const page = ({ params }: any) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(2);
    const [route, setRoute] = useState("Login");

    return (
        <>
            <Header
                open={open}
                setOpen={setOpen}
                activeItem={activeItem}
                setRoute={setRoute}
                route={route}
            />
            <div className='w-full text-center py-10'><PDFViewer link={`${process.env.NEXT_PUBLIC_ORIGIN_URI}/api/v1/get-ebook/${params.id}/download`} /></div>
            <Footer />

        </>

    )
}

export default page