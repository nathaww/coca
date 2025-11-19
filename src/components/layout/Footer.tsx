
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-primary border-t border-white/30 flex justify-center items-center py-8 w-full text-white">
            © {currentYear} Copyright. All rights reserved.
        </footer>
    )
}

export default Footer