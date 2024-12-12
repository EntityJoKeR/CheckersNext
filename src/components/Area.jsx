
'use client'
import { useState } from 'react';
import Checker from './Checker';

const Area = ({visibleChecker, color, checkerColor}) => {
    const [visChecker, setVisibleChecker] = useState(visibleChecker)
    const [areaColor, setColor] = useState(color)
    const blackStyles = 'w-[80px] h-[80px] bg-black flex items-center justify-center'
    const whiteStyles = 'w-[80px] h-[80px] bg-orange-200 flex items-center justify-center'
    return (
        <div className={color==='black'?blackStyles:whiteStyles}>
            <Checker color={checkerColor} queen={true}></Checker>
        </div>
    );
};

export default Area;    