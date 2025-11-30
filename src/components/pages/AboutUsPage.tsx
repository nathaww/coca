import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../ui/Button'
import SEO from '../lib/SEO'

const AboutUsPage = () => {
    const heroRef = useRef<HTMLDivElement | null>(null)
    const timelineRef = useRef<HTMLDivElement | null>(null)
    const statsRef = useRef<HTMLDivElement | null>(null)
    const teamRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Hero section animation
            gsap.from(heroRef.current?.children || [], {
                opacity: 0,
                y: 60,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
            })

            // Timeline items animation
            gsap.from('.timeline-item', {
                opacity: 0,
                x: -50,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: 'top 80%',
                }
            })

            // Stats animation
            gsap.from('.stat-item', {
                opacity: 0,
                scale: 0.8,
                stagger: 0.15,
                duration: 0.6,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: 'top 85%',
                }
            })

            // Team cards animation
            gsap.from('.team-card', {
                opacity: 0,
                y: 40,
                stagger: 0.1,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: teamRef.current,
                    start: 'top 85%',
                }
            })
        })

        return () => {
            ctx.revert()
            ScrollTrigger.getAll().forEach(s => s.kill())
        }
    }, [])

    const stats = [
        { number: '25+', label: 'Years of Experience', desc: 'Decades of expertise in cocoa sourcing' },
        { number: '150+', label: 'Partner Farms', desc: 'Direct relationships with growers' },
        { number: '40+', label: 'Countries Served', desc: 'Global reach, local impact' },
        { number: '99.9%', label: 'Quality Assurance', desc: 'Consistently premium products' },
    ]

    const timeline = [
        { year: '1998', title: 'The Beginning', desc: 'Founded with a vision to bridge the gap between cocoa farmers and chocolate artisans worldwide.' },
        { year: '2005', title: 'Ethical Sourcing', desc: 'Established our first direct trade partnerships with smallholder farms in Ghana and Ecuador.' },
        { year: '2012', title: 'Global Expansion', desc: 'Opened processing facilities across three continents, maintaining quality at scale.' },
        { year: '2018', title: 'Sustainability Focus', desc: 'Launched comprehensive sustainability programs supporting farmer communities and environmental conservation.' },
        { year: '2023', title: 'Innovation Leader', desc: 'Pioneered new processing techniques that preserve the natural complexity of single-origin cocoa.' },
    ]

    return (
        <div className="min-h-screen bg-white">
            <SEO 
                title="About Us | Premium Cocoa Supplier Since 1998 | SWB Enterprises"
                description="Learn about SWB Enterprises' 25+ years of excellence in cocoa sourcing. We partner with 150+ farms globally, delivering premium single-origin cocoa with 99.9% quality assurance."
                keywords="about cocoa supplier, ethical cocoa sourcing, sustainable cocoa, cocoa company history, fair trade cocoa beans, organic cocoa supplier"
                ogImage="https://yourdomain.com/images/aboutBg.png"
                canonicalUrl="https://yourdomain.com/about"
            />
            {/* Hero Section */}
            <section className="relative pb-20 pt-42 px-4 bg-primary overflow-hidden w-full h-full">
                <div ref={heroRef} className="max-w-6xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
                        Crafting Excellence<br />
                        <span className="text-secondary">Bean by Bean</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                        For over two decades, we've been more than just a cocoa supplier. We're custodians of tradition, 
                        champions of sustainability, and partners in your creative journey.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={statsRef} className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
                        Impact by Numbers
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item text-center bg-white rounded-xl p-6 shadow-lg">
                                <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-lg font-semibold text-primary mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {stat.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section ref={timelineRef} className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
                        Our Journey
                    </h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/30 hidden md:block"></div>
                        
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item relative flex flex-col md:flex-row gap-6 mb-12">
                                <div className="md:w-32 shrink-0">
                                    <div className="inline-block bg-secondary text-white px-4 py-2 rounded-full font-bold text-lg">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg ml-0 md:ml-6">
                                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Values Section */}
            <section className="py-16 px-4 bg-primary text-white rounded-4xl w-full lg:w-max mx-auto">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/source.svg" alt="Integrity" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Integrity</h3>
                            <p className="text-white/90 leading-relaxed">
                                Transparent, honest relationships with farmers, customers, and communities guide every decision we make.
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/quality.svg" alt="Excellence" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Excellence</h3>
                            <p className="text-white/90 leading-relaxed">
                                Uncompromising quality standards from farm to final product, ensuring exceptional cocoa every time.
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                <img src="/images/process.svg" alt="Sustainability" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                            <p className="text-white/90 leading-relaxed">
                                Environmental responsibility and social impact are at the heart of our operations and growth strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                        Ready to Work Together?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join hundreds of chocolatiers, confectioners, and food manufacturers who trust us 
                        for their premium cocoa needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button text="Get Started" className="bg-primary rounded-lg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsPage