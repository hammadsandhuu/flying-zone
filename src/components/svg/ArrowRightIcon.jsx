import React from "react";

const ArrowRightIcon = ({
    width = 53,
    height = 13,
    className = "",
    stroke = "currentColor",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 53 13"
            className={className}
            fill="none"
        >
            <path
                d="M0 6.5H52M52 6.5L46 1M52 6.5L46 12"
                stroke={stroke}
            />
        </svg>
    );
};

export default ArrowRightIcon;
