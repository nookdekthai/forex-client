"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


import PDFViewer from 'pdf-viewer-reactjs'

// Import the styles provided by the react-pdf-viewer packages
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// const PDFViewer = dynamic(() => import("../../components/Ebook/PDFViewer"), {
//     ssr: false
// });




const page = ({ params }: any) => {
    const [open, setOpen] = useState(false);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
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
            <div className='w-full text-center py-10'>
                {/* <PDFViewer link={`${process.env.NEXT_PUBLIC_ORIGIN_URI}/api/v1/get-ebook/${params.id}/download`} /> */}
                {/* <PDFViewer
                    withCredentials={true}
                    document={{
                        url: `${process.env.NEXT_PUBLIC_ORIGIN_URI}/api/v1/get-ebook/${params.id}/download`,
                    }}
                /> */}
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                    <div style={{ height: '750px' }}>
                        <Viewer
                            withCredentials={true}
                            fileUrl={`${process.env.NEXT_PUBLIC_ORIGIN_URI}/api/v1/get-ebook/${params.id}/download`}
                            plugins={[
                                defaultLayoutPluginInstance,
                            ]}
                        />
                    </div>
                </Worker>
            </div>
            <Footer />

        </>

    )
}

export default page