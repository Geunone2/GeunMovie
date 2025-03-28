import React from 'react';
import Link from "next/link";
import {IoHome} from "react-icons/io5";
import {MdLockOutline} from "react-icons/md";
import {FaUserPlus} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {DarkModeButton} from "@/app/components/DarkMode";


export default function Header() {
    return (
        <>
            <header className='flex justify-between items-center p-4 px-10'>
                <Link href="/">
                    <h1 className='text-5xl font-bold text-red-500 mt-5'>GëunMovië</h1>
                </Link>
                <nav className='text-sm flex gap-2 max-h-1 py-10 text-center'>
                    <DarkModeButton/>
                    <Link href="/"> <IoHome className='text-xl mx-7'/>홈</Link>
                    <Link href="/login"><MdLockOutline className='text-xl mx-7'/>로그인</Link>
                    <Link href="/signup"><FaUserPlus className='text-xl mx-7'/>회원가입</Link>
                    <Link href="/mypage"><FaUser className='text-xl mx-7'/>My Movie</Link>
                </nav>
            </header>
            <div className="w-[100%] border-[1px] border-lightGray/30"></div>
        </>
    );
}