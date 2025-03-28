'use client';

import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
    const [clicked, setClicked] = useState<Boolean[]>([false, false, false, false, false]);

    const handleStarClick = (index: number) => {
        let clickStates = [...clicked];

        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
    };

    const rating = clicked.filter(Boolean).length;

    return (
        <div className="flex flex-col -mt-4 mx-4 my-2">
            <div className="text-sm font-bold pt-5">평가하기</div>
            <div className="flex pt-15 gap-1">
                {ARRAY.map((el, idx) => (
                    <FaStar
                        key={idx}
                        size="20"
                        onClick={() => handleStarClick(el)}
                        className={clicked[el] ? 'text-yellow-400' : 'text-gray-300 cursor-pointer'}
                    />
                ))}
                <p className='text-sm mt-0.5 mx-1'>별점: {rating}점</p>
            </div>
        </div>
    );
}

export default Rating;
