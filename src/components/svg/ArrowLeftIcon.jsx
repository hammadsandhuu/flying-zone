import React from "react";

const ArrowLeftIcon = ({
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
                d="M53 6.5L1 6.5M1 6.5L7 12M1 6.5L7 0.999996"
                stroke={stroke}
            />
        </svg>
    );
};

export default ArrowLeftIcon;
