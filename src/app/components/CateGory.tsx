import React from 'react';
import {IoIosSearch} from "react-icons/io";
import Link from "next/link";


export default function CateGory() {
    return (
        <>
            <section className='flex m-4 justify-between items-center text-2xl whitespace-nowrap overflow-auto'>
                <div className='flex font-bold gap-16'>
                    <Link href='../movies' className='hover:scale-105'>영화</Link>
                    <Link href='../theaters' className='hover:scale-105'>극장</Link>
                    <Link className='text-red-500 hover:scale-105' href='../reserve'>예매</Link>
                    <Link href='../store' className='hover:scale-105'>스토어</Link>
                    <Link href='../events' className='hover:scale-105'>이벤트</Link>
                    <Link href='../benefits' className='hover:scale-105'>혜택</Link>
                </div>
                <div className='mx-4'>
                    <form className='flex items-center gap-2'>
                        <input className='w-full border-2 rounded-lg outline-none c' type="text" name="Search"
                               size={30}/>
                        <IoIosSearch/>
                    </form>
                </div>
            </section>
            <div className="w-[100%] my-3 border-[1px] border-lightGray/30"></div>
        </>
    );
}