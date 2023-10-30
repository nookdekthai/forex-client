"use client";
import "./globals.css";
import { Poppins ,Anuphan } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import { SessionProvider, useSession } from "next-auth/react";
import React, { FC, useEffect } from "react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";
import socketIO from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });



export const metadata = {
  title: 'สอนเทรด Forex โดยอาจารย์เนส',
  description: 'สอนเทรดข่าวฟอเร็ก คอร์สเทรด Forex ',
  openGraph: {
    title: 'สอนเทรด Forex โดยอาจารย์เนส',
    description: 'สอนเทรดข่าวฟอเร็ก คอร์สเทรด Forex',
    url: 'https://forex-bykrunet.vercel.app/',
    siteName: 'CoachNest',
    images: [
      {
        url: 'https://www.startrader.com/th/wp-content/uploads/sites/3/2023/04/What-is-Forex-20230426.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'th-TH',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'สอนเทรด Forex โดยอาจารย์เนส',
    description: 'สอนเทรดข่าวฟอเร็ก คอร์สเทรด Forex',
    images: ['https://www.startrader.com/th/wp-content/uploads/sites/3/2023/04/What-is-Forex-20230426.jpg'],
  },
}


const poppins = Anuphan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Custom>
                <div>{children}</div>
              </Custom>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  const { data: session } = useSession()
  console.log("🚀 ~ file: layout.tsx:56 ~ session:", session)

  useEffect(() => {
    socketId.on("connection", () => {});
  }, []);

  return <div>{(isLoading && session) ? <Loader /> : <div>{children} </div>}</div>;
  // return <div>{children} </div>
};
