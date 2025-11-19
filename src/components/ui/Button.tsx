
const Button = ({ text, className }: { text: string, className?: string }) => {
    return (
        <button className={`${className} px-6 py-3 text-white font-semibold cursor-pointer`}>
            {text}
        </button>
    )
}

export default Button