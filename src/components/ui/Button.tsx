import React from 'react'
const Button = ({ text, className, onClick }: { text: string, className?: string, onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
        <button
            className={`${className} px-6 py-3 text-white font-semibold cursor-pointer`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button