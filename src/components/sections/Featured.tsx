import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../ui/Button'
import Circle from '../ui/Circle'

const Featured = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const cardsRef = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 50,
                stagger: 0.15,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                },
            })
        }, containerRef)

        return () => {
            ctx.revert()
            ScrollTrigger.getAll().forEach(s => s.kill())
        }
    }, [])

    const products = [
        { title: 'Fermented Cocoa Beans', desc: 'Deeply aromatic and perfect for fine chocolate production.', img: '/images/fermented.svg' },
        { title: 'Raw Cocoa Nibs', desc: 'Crunchy, nutrient-dense, and rich in antioxidants.', img: '/images/raw.svg' },
        { title: 'Cocoa Husk', desc: 'Ideal for brewing cocoa tea or natural infusions.', img: '/images/husk.svg' },
    ]

    return (
        <section id="products" ref={containerRef} className="py-16 px-4 lg:px-8 w-full max-w-[1920px]">
            <div className="max-w-6xl mx-auto text-center mb-2">
                <h2 className="text-3xl md:text-[50px] font-extrabold text-gray-900">Featured Cocoa Products</h2>
                <p className="text-gray-600 text-[22px] ">Explore Our Cocoa Range</p>
            </div>

            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-auto">
                {products.map((p, i) => (
                    <article
                        key={p.title}
                        ref={(el) => { cardsRef.current[i] = el as HTMLDivElement | null }}
                        className="bg-primary/10 h-[700px] 2xl:h-[765px] w-full overflow-hidden rounded-[20px] transition-transform transform flex justify-between items-center flex-col pt-20 pb-12 px-2 lg:px-6 mx-auto"
                    >
                        <Circle />
                        <div className="h-82 2xl:h-[413px] flex items-center justify-center">
                            <img src={p.img} alt={p.title} className="max-h-full object-contain" />
                        </div>
                        <div className='w-full px-6 flex flex-col 2xl:flex-row items-end justify-between gap-2'>
                            <div className='w-full'>
                                <h3 className="text-2xl 2xl:text-[30px] font-semibold mt-6 text-primary">{p.title}</h3>
                                <p className="text-[18px] max-w-[300px] text-gray-600 mt-2">{p.desc}</p>
                            </div>

                            <div className="flex justify-end w-full 2xl:w-auto">
                                <button className="bg-secondary text-white p-3 rounded-lg w-full 2xl:w-max">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className='mt-14 lg:mt-24 mx-auto flex justify-center items-center'>
                <Button text="View All Products" className="bg-primary mt-10 rounded-lg" />
            </div>

        </section>
    )
}

export default Featured