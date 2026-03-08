import React from "react";

const UserCircleIcon = ({
    width = 54,
    height = 54,
    className = "",
    fill = "none",
    stroke = "currentColor",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 27 27"
            fill={fill}
            className={className}
        >
            <path
                d="M26 13.5C26 20.4036 20.4035 26 13.5 26C6.59632 26 1 20.4036 1 13.5C1 6.59632 6.59632 1 13.5 1C20.4035 1 26 6.59632 26 13.5Z"
                stroke={stroke}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.5001 11.8333C18.5001 14.5947 16.2616 16.8333 13.5001 16.8333C10.7384 16.8333 8.5 14.5947 8.5 11.8333C8.5 9.07189 10.7384 6.8333 13.5001 6.8333C16.2616 6.8333 18.5001 9.07189 18.5001 11.8333Z"
                stroke={stroke}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.04297 23.5324C6.44287 19.7667 9.62917 16.8333 13.5008 16.8333C17.3725 16.8333 20.5588 19.7669 20.9585 23.5325"
                stroke={stroke}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default UserCircleIcon;
