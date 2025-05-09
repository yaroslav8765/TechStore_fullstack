import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function GoodsCard(props) {

    const [isMousedOver, setMouseOver] = useState(false);

    function onClickHandler() {

    }

    function mouseOverHandler() {
        setMouseOver(true);
    }

    function mouseOutHandler() {
        setMouseOver(false);
    }

    return (
        <div className="mt-2 ml-2 mr-2 mb-2">
            <form className="flex flex-col items-center bg-[#08112e] w-[220px] h-[420px] rounded-2xl shadow-lg p-4">
                {/* Picture */}
                <img 
                src={props.img}
                alt={props.producName}
                className="w-[150px] h-[180px] object-cover gap-y-2 mt-5 rounded-xl"
                />

                {/* Name */}
                <p className="text-white text-2xl font-semibold mt-3 min-h-[52px]">{props.producName}</p>

                {/* Price */}
                <p className="text-white text-lg font-bold mb-2">{props.price} ₴</p>

                {/* Rating */}
                <div className="flex items-center">
                    <Rating 
                    name="half-rating-read" 
                    value={props.rating} 
                    precision={0.5} 
                    readOnly 
                    icon={<StarIcon style={{ color: '#f59e0b' }} />} 
                    emptyIcon={<StarIcon style={{ color: '#6f7787' }} />} 
                    />

                    <p className="text-white ml-1 text-lg">({props.voted})</p>
                </div>

                {/* Button */}
                <div 
                    className="relative w-full mt-4"
                    onMouseEnter={mouseOverHandler}
                    onMouseLeave={mouseOutHandler}
                    >
                    <button 
                        className={`relative z-10 text-white font-medium py-2 px-5 rounded-lg gradient-background hover:bg-blue-700 transition-colors w-full text-lg ${isMousedOver ? 'filter grayscale' : ''}`}
                        onClick={onClickHandler}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default GoodsCard;
