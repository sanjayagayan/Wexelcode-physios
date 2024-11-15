import React from 'react'

const Button = () => {
    return (
        <a
            className="btn btn-play font-sm-bold popup-youtube hover-up"
        >
            Get Started Now
            <svg
                className="w-6 h-6 icon-16 ml-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>
        </a>
    )
}

export default Button