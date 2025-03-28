import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {Providers} from "@/app/components/Providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "영화가 보고 싶다면, GeunMovie",
    description: "현재 상영중인 영화 목록들을 보여줍니다.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className='flex flex-col w-full max-w-screen-2xl mx-auto bg-g-pattern '>
        <Providers>
            <Header/>
            <main className='grow'>
                {children}</main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
