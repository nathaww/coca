import Button from "../ui/Button"
import GetQuote from "./GetQuote"

const Contact = () => {
    return (
        <section id="contact" className="w-full pt-16">
            {/* Hero with background image and overlay card */}
            <div className="relative h-72 sm:h-96 lg:h-[622px]">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/5.jpg')" }}
                />

                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/3 top-8 sm:top-12 lg:top-16 w-[90%] sm:w-3/4 lg:w-[1240px] h-[363px] bg-secondary rounded-xl p-8 lg:p-12 shadow-lg">
                    <div className="relative w-full h-full flex flex-col justify-center">

                        <img src="/images/contact.svg" alt="contact illustration" className="hidden sm:block absolute object-contain z-20 bottom-0 left-0 h-[223px]" />
                        <img src="/images/contact2.svg" alt="contact illustration" className="hidden sm:block absolute object-contain z-20 top-0 right-0 h-[223px]" />

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center">Let's Talk Cocoa</h2>
                        <p className="text-sm md:text-base text-white/90 text-center mt-3 max-w-lg mx-auto">Whether you're a chocolatier, supplier, or enthusiast, we're here to help you source the best. Let's connect.</p>
                        <div className="flex justify-center mt-6">
                            <Button text="Contact us" className="bg-primary rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            <GetQuote />


            {/* Newsletter / Subscribe section */}
            <div className="bg-primary text-white pb-20 lg:pb-28">
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h3 className="text-4xl md:text-[100px] font-extrabold">Stay in the Cocoa Loop</h3>
                    <p className="mt-4 text-sm md:text-[20px] text-white">Be the first to hear about our new harvests, sourcing stories, and product launches. No spam just pure cocoa insights.</p>

                    <form className="mt-8 flex items-center justify-between gap-4 bg-white rounded-full px-2">
                        <input aria-label="Email" type="email" placeholder="Enter your email to stay in the loop." className="w-80 sm:w-[480px] rounded-full px-3 py-6 text-blue-900" />
                        <Button text="Subscribe for updates" className="bg-primary px-5 py-3 rounded-full font-semibold" />
                    </form>

                    <div className="mt-20">
                        <img src="/images/logo.svg" alt="SWB logo" className="mx-auto w-64 sm:w-[400px]" />
                    </div>
                </div>
            </div>

            <div className="w-full bg-primary">
                <div className="border-t mx-auto border-white/30 bg-primary w-full max-w-[1440px] text-white">
                    <div className="flex flex-col lg:flex-row mx-auto px-4 py-6 gap-3 items-center justify-between">
                        <nav className="flex items-center gap-8">
                            <a className="opacity-90 hover:opacity-100" href="#home">Home</a>
                            <a className="opacity-90 hover:opacity-100" href="#about">About Us</a>
                            <a className="opacity-90 hover:opacity-100" href="#products">Products</a>
                            <a className="opacity-90 hover:opacity-100" href="#contact">Contact us</a>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button aria-label="facebook" className="w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center hover:bg-white/10 transition">

                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.84 8 9.74V15.5H7.5v-3H10V10c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 3H15v6.24c4.56-.9 8-4.9 8-9.74z" fill="currentColor" />
                                </svg>
                            </button>

                            <button aria-label="x" className="w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center hover:bg-white/10 transition">

                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5A4.5 4.5 0 0023 3z" fill="currentColor" />
                                </svg>
                            </button>

                            <button aria-label="instagram" className="w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center hover:bg-white/10 transition">

                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6-3a1 1 0 11-1 1 1 1 0 011-1z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact