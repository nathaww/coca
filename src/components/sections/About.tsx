import Blur from "../ui/Blur"
import Button from "../ui/Button"

const About = () => {
    return (
        <section id="about" className="py-4 sm:py-16 px-4 bg-white relative w-screen overflow-x-clip">
            <Blur className="hidden sm:flex absolute top-0 -left-[55%] bg-secondary" />
            <Blur className="hidden sm:flex absolute bottom-0  bg-secondary -right-[45%]" />
            <div className="mx-auto max-w-[1440px] flex flex-col items-center">
                <div className="my-4 sm:my-20 w-full">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Why Choose Our Cocoa</h2>
                    <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center w-max">
                        <div className="flex items-center gap-4">
                            <div className="w-[60px] sm:w-20 h-[60px] sm:h-20 bg-primary/20 flex items-center justify-center rounded-[15px]">
                                <img src="/images/source.svg" alt="Minimal Processing" className="w-11 sm:w-16 h-11 sm:h-16 bg-secondary p-2 rounded-[15px]" />
                            </div>
                            <span className="text-gray-700 text-[18px]">Ethically Sourced</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-[60px] sm:w-20 h-[60px] sm:h-20 bg-primary/20 flex items-center justify-center rounded-[15px]">
                                <img src="/images/process.svg" alt="Minimal Processing" className="w-11 sm:w-16 h-11 sm:h-16 bg-secondary p-2 rounded-[15px]" />
                            </div>
                            <span className="text-gray-700 text-[18px]">Minimal Processing</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-[60px] sm:w-20 h-[60px] sm:h-20 bg-primary/20 flex items-center justify-center rounded-[15px]">
                                <img src="/images/quality.svg" alt="Minimal Processing" className="w-11 sm:w-16 h-11 sm:h-16 bg-secondary p-2 rounded-[15px]" />
                            </div>
                            <span className="text-gray-700 text-[18px]">Single Origin Quality</span>
                        </div>
                    </div>
                    <hr className="mt-6 border-t border-gray-200" />
                </div>


                <div className="flex flex-col sm:flex-row justify-evenly gap-12 sm:gap-24 w-full">
                    {/* Left: images */}
                    <div className="flex w-full justify-evenly sm:w-[765px] h-auto sm:h-[645px] gap-2 relative">
                        <img
                            src="/images/aboutBg2.png"
                            alt="Cocoa image 1"
                            className="w-1/2 sm:w-[341px] object-contain h-auto sm:h-[558px] mt-4 sm:mt-auto"
                        />
                        <img
                            src="/images/aboutBg.png"
                            alt="Cocoa image 2"
                            className="w-1/2 sm:w-[341px] object-contain h-auto sm:h-[558px] mb-4 sm:mb-auto"
                        />

                        <img
                            src="/images/cocoa2.svg"
                            alt="Cocoa pods"
                            className="w-28 lg:w-[360px] object-cover absolute bottom-0 right-0"
                        />
                    </div>

                    {/* Right: text */}
                    <div className="flex justify-center flex-col">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 sm:mb-6">About us</h2>
                        <h3 className="text-xl sm:text-[30px] mb-2 text-primary">From the Earth to Your Craft</h3>
                        <p className="text-gray-500 mb-8 sm:mb-12 w-full sm:max-w-[624px] text-sm lg:text-[20px]">
                            Our cocoa begins in the rich soils of trusted farms, where generations of farmers have honed the art of
                            cultivation. We focus on building long-term partnerships with these growers to ensure every bean we deliver
                            is traceable, high-quality, and responsibly sourced.
                        </p>
                        <Button text="Read More About us" className="bg-primary text-white px-6 py-3 rounded-lg w-max font-semibold" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About