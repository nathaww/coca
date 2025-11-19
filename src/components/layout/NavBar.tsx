import { useEffect, useState } from 'react'
import Button from '../ui/Button'

const NavBar = () => {
    const [open, setOpen] = useState(false)

    // prevent body scroll when mobile sidebar is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [open])

    const links = [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Products', href: '#products' },
        { label: 'Contact Us', href: '#contact' },
    ]

    return (
        <div className="absolute top-0 z-50 max-w-[1440px] w-full flex items-center justify-between p-4">
            <img src="/images/logo.svg" alt="Cocoa Logo" className="w-28 sm:w-[251px] sm:h-[100px] object-contain z-50" />

            {/* Desktop links */}
            <ul className="sm:text-lg text-white flex-row gap-8 items-center hidden sm:flex">
                {links.map((l) => (
                    <li key={l.href}>
                        <a href={l.href} className="hover:underline">{l.label}</a>
                    </li>
                ))}

                <li>
                    <a href="#get-quote">
                        <Button text="Get A Quote" className="border border-white text-white p-4 rounded-lg" />
                    </a>
                </li>
            </ul>

            {/* Mobile hamburger */}
            <div className="sm:hidden z-50">
                <button
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                    className="p-2 rounded-md bg-black/40 text-white"
                >
                    {open ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile sidebar overlay + panel */}
            <div
                aria-hidden={!open}
                className={`fixed inset-0 z-40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* backdrop */}
                <button
                    onClick={() => setOpen(false)}
                    className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
                    aria-hidden
                />

                {/* panel */}
                <nav
                    className={`fixed right-0 top-0 h-full w-72 bg-white text-black shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="p-6 flex flex-col h-full">
                        <div className="mb-8">
                            <img src="/images/logo.svg" alt="logo" className="w-44 object-contain" />
                        </div>

                        <ul className="flex flex-col gap-6">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className="text-lg font-medium"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}

                            <li>
                                <a href="#get-quote" onClick={() => setOpen(false)}>
                                    <Button text="Get A Quote" className="w-full text-center" />
                                </a>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Cocoa</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar