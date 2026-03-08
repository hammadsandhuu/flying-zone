import React from "react";

const BookingArrowIcon = ({ width = 27, height = 15, className = "", fill = "currentColor" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 27 15"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z"
                fill={fill}
            />
        </svg>
    );
};

export default BookingArrowIcon;
