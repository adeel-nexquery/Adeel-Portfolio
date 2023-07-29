import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'; 


const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateMousePosition);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return (
        <div className="cursor">
            <div className="cursor__ball" style={{ left: position.x, top: position.y }}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" />
                </svg>
                
            </div>
        </div>
    )
}

export default Cursor
