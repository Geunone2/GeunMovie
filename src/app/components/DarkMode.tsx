'use client';
import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import {FaMoon, FaSun} from "react-icons/fa";

export const DarkModeButton = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <div className='flex -mx-2 mt-2.5'>
                <button className='items-center flex text-xl mt-4'
                        onClick={(e) => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
                    {theme === 'dark' ? <FaMoon className='text-yellow-300'/> : <FaSun className='text-red-500'/>}
                </button>
                <p className='text-xs mt-3 font-semibold'>Mode</p>
            </div>
        </>);
}