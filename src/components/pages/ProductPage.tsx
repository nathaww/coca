import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowLeft, Award, Check, Leaf, Package, ShieldCheck } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../lib/SEO'
import Button from '../ui/Button'
import { useNavigate, useLocation } from 'react-router-dom'

interface ProductData {
    id: string
    title: string
    subtitle: string
    heroImage: string
    icon: string
    description: string
    longDescription: string
    benefits: string[]
    specifications: {
        origin: string
        processing: string
        moisture: string
        purity: string
        packaging: string
        shelfLife: string
    }
    features: Array<{
        icon: React.ReactNode
        title: string
        description: string
    }>
    applications: string[]
    gallery: string[]
    certifications: string[]
    nutritionalHighlights: string[]
}

const productsData: Record<string, ProductData> = {
    'fermented-cocoa-beans': {
        id: 'fermented-cocoa-beans',
        title: 'Fermented Cocoa Beans',
        subtitle: 'Premium Single-Origin Excellence',
        heroImage: '/images/aboutBg.png',
        icon: '/images/fermented.svg',
        description: 'Deeply aromatic and perfect for fine chocolate production.',
        longDescription: 'Our fermented cocoa beans represent the pinnacle of artisanal cocoa processing. Through careful fermentation and sun-drying, we develop complex flavor profiles that range from fruity and floral to deeply chocolatey with nutty undertones. Each batch is sourced from single-origin farms and processed using traditional methods passed down through generations.',
        benefits: [
            'Rich, complex flavor profile with fruity and floral notes',
            'Optimal fermentation brings out natural chocolate aromas',
            'Perfect acidity balance for premium chocolate making',
            'High cocoa butter content for smooth texture',
            'Consistent quality with batch-to-batch traceability',
            'Sustainably sourced from certified organic farms'
        ],
        specifications: {
            origin: 'Ivory Coast',
            processing: 'Traditional 5-7 day fermentation',
            moisture: '6-7%',
            purity: '99.9% pure cocoa',
            packaging: '50kg jute bags or 25kg boxes',
            shelfLife: '18-24 months'
        },
        features: [
            {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Organic Certified',
                description: 'Grown without synthetic pesticides or fertilizers, certified organic by international standards.'
            },
            {
                icon: <Award className="w-8 h-8" />,
                title: 'Premium Grade',
                description: 'Top-tier quality beans selected for their size, fermentation, and flavor potential.'
            },
            {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Traceable Origin',
                description: 'Full transparency from farm to delivery with batch-specific documentation.'
            },
            {
                icon: <Package className="w-8 h-8" />,
                title: 'Careful Handling',
                description: 'Temperature-controlled storage and shipping to preserve optimal flavor profiles.'
            }
        ],
        applications: [
            'Fine chocolate and bean-to-bar production',
            'Artisanal confectionery and pralines',
            'Premium baking and pastry applications',
            'Craft chocolate making and workshops',
            'Gourmet food manufacturing'
        ],
        gallery: ['/images/aboutBg.png', '/images/aboutBg2.png', '/images/2.jpg', '/images/3.jpg'],
        certifications: ['USDA Organic', 'Fair Trade Certified', 'Rainforest Alliance', 'ISO 22000'],
        nutritionalHighlights: [
            'Rich in antioxidants and flavonoids',
            'Natural source of magnesium and iron',
            'Contains theobromine for natural energy',
            'High in dietary fiber'
        ]
    },
    'raw-cocoa-nibs': {
        id: 'raw-cocoa-nibs',
        title: 'Raw Cocoa Nibs',
        subtitle: 'Pure Crunchy Superfood',
        heroImage: '/images/aboutBg2.png',
        icon: '/images/raw.svg',
        description: 'Crunchy, nutrient-dense, and rich in antioxidants.',
        longDescription: 'Our raw cocoa nibs are simply crushed cocoa beans with the shell removed – nothing added, nothing taken away. These crunchy pieces deliver an intense, pure chocolate flavor along with maximum nutritional benefits. Minimally processed to preserve natural enzymes, antioxidants, and minerals, they\'re a superfood favorite among health-conscious consumers and culinary professionals.',
        benefits: [
            'Maximum antioxidant content from minimal processing',
            'Intense, pure chocolate flavor without sweetness',
            'Crunchy texture perfect for toppings and inclusions',
            'Natural energy boost from theobromine',
            'High in magnesium, iron, and fiber',
            'Versatile ingredient for both sweet and savory dishes'
        ],
        specifications: {
            origin: 'Ivory Coast',
            processing: 'Cold-pressed, minimal processing',
            moisture: '4-5%',
            purity: '100% pure cocoa nibs',
            packaging: '1kg, 5kg, or 25kg vacuum-sealed bags',
            shelfLife: '24 months'
        },
        features: [
            {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Superfood Status',
                description: 'Packed with antioxidants, minerals, and natural compounds that support wellness.'
            },
            {
                icon: <Award className="w-8 h-8" />,
                title: 'Raw & Unroasted',
                description: 'Minimally processed to retain maximum nutritional benefits and enzyme activity.'
            },
            {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Purity Guaranteed',
                description: 'No additives, no sugar, no processing aids – just pure cocoa nibs.'
            },
            {
                icon: <Package className="w-8 h-8" />,
                title: 'Freshness Sealed',
                description: 'Vacuum-sealed packaging locks in freshness and protects from oxidation.'
            }
        ],
        applications: [
            'Smoothie bowls and health drinks',
            'Granola, energy bars, and trail mixes',
            'Baking and dessert toppings',
            'Savory dishes and mole sauces',
            'Coffee and tea blends',
            'Dietary supplements and wellness products'
        ],
        gallery: ['/images/aboutBg2.png', '/images/aboutBg.png', '/images/3.jpg', '/images/4.jpg'],
        certifications: ['USDA Organic', 'Non-GMO Project Verified', 'Vegan', 'Gluten-Free'],
        nutritionalHighlights: [
            '700+ antioxidant compounds',
            'Excellent source of magnesium',
            'Natural mood enhancers',
            'Low glycemic index'
        ]
    },
    'cocoa-husk': {
        id: 'cocoa-husk',
        title: 'Cocoa Husk',
        subtitle: 'Sustainable Aromatic Infusions',
        heroImage: '/images/2.jpg',
        icon: '/images/husk.svg',
        description: 'Ideal for brewing cocoa tea or natural infusions.',
        longDescription: 'Cocoa husk, the outer shell of the cocoa bean, is a fragrant and sustainable by-product that has been transformed into a premium ingredient. Rich in theobromine and carrying delicate chocolate notes, our cocoa husks are perfect for brewing aromatic teas, creating natural infusions, or developing innovative beverage products. We\'ve turned what was once waste into a sought-after ingredient.',
        benefits: [
            'Natural chocolate aroma without caffeine',
            'Gentle theobromine for relaxed energy',
            'Zero waste, sustainable ingredient',
            'Low calorie alternative to chocolate drinks',
            'Rich in antioxidants and minerals',
            'Unique flavor profile for innovative products'
        ],
        specifications: {
            origin: 'Ivory Coast',
            processing: 'Cleaned, dried, and sorted',
            moisture: '8-10%',
            purity: 'Food-grade, contaminant-free',
            packaging: '10kg or 25kg bags',
            shelfLife: '12-18 months'
        },
        features: [
            {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Eco-Friendly',
                description: 'Upcycled ingredient that reduces waste and supports circular economy principles.'
            },
            {
                icon: <Award className="w-8 h-8" />,
                title: 'Aromatic Quality',
                description: 'Carefully selected husks with optimal aroma and minimal shell fragments.'
            },
            {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: 'Food Safe',
                description: 'Rigorously tested for contaminants and processed in certified facilities.'
            },
            {
                icon: <Package className="w-8 h-8" />,
                title: 'Versatile Format',
                description: 'Available in various particle sizes for different brewing and application needs.'
            }
        ],
        applications: [
            'Cocoa shell tea and herbal infusions',
            'Functional beverage development',
            'Natural flavoring for spirits and liqueurs',
            'Garden mulch and composting',
            'Animal feed supplements',
            'Natural cosmetic ingredients'
        ],
        gallery: ['/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg'],
        certifications: ['Food Grade', 'Organic Certified', 'Sustainable Sourcing', 'Zero Waste'],
        nutritionalHighlights: [
            'Natural source of theobromine',
            'Polyphenols and antioxidants',
            'Dietary fiber content',
            'Minimal calories'
        ]
    }
}

const ProductPage = () => {
    const { productId } = useParams<{ productId: string }>()
    const heroRef = useRef<HTMLDivElement | null>(null)
    const featuresRef = useRef<HTMLDivElement | null>(null)
    const galleryRef = useRef<HTMLDivElement | null>(null)

    const product = productId ? productsData[productId] : null
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Hero animation
            gsap.from(heroRef.current?.children || [], {
                opacity: 0,
                y: 50,
                stagger: 0.15,
                duration: 1,
                ease: 'power3.out',
            })

            // Features animation
            gsap.from('.feature-card', {
                opacity: 0,
                y: 40,
                stagger: 0.1,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: featuresRef.current,
                    start: 'top 80%',
                }
            })

            // Gallery animation
            gsap.from('.gallery-item', {
                opacity: 0,
                scale: 0.9,
                stagger: 0.1,
                duration: 0.6,
                ease: 'back.out(1.3)',
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top 85%',
                }
            })
        })

        return () => {
            ctx.revert()
            ScrollTrigger.getAll().forEach(s => s.kill())
        }
    }, [productId])

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <SEO 
                    title="Product Not Found | SWB Enterprises"
                    description="The requested cocoa product was not found. Browse our range of premium cocoa beans, raw nibs, and cocoa husk."
                    canonicalUrl="https://yourdomain.com/"
                />
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
                    <Link to="/#products">
                        <Button text="Back to Products" className="bg-primary rounded-lg" />
                    </Link>
                </div>
            </div>
        )
    }

    const seoData = {
        'fermented-cocoa-beans': {
            title: 'Premium Fermented Cocoa Beans | G2 Grade GF & FF | SWB Enterprises',
            description: 'Buy premium fermented cocoa beans from Ivory Coast. G2 grade (GF & FF) beans perfect for fine chocolate production. 95-127+ beans per 100g, 8% moisture, organically certified.',
            keywords: 'fermented cocoa beans, G2 cocoa beans, GF beans, FF beans, premium cocoa, single origin cocoa, chocolate making beans, Ivory Coast cocoa, organic cocoa beans'
        },
        'raw-cocoa-nibs': {
            title: 'Raw Cocoa Nibs | Organic Superfood | Antioxidant-Rich | SWB Enterprises',
            description: 'Premium raw cocoa nibs from Ivory Coast. 100% pure, unroasted cocoa superfood packed with antioxidants. Perfect for smoothies, baking, and health foods. Vacuum-sealed freshness.',
            keywords: 'raw cocoa nibs, organic cocoa nibs, superfood cocoa, antioxidant cocoa, unroasted cocoa, cocoa nibs bulk, Ivory Coast cocoa nibs, health food ingredient, crunchy cocoa'
        },
        'cocoa-husk': {
            title: 'Cocoa Husk for Tea & Infusions | Sustainable Cocoa By-Product | SWB',
            description: 'Premium food-grade cocoa husk from Ivory Coast. Ideal for cocoa tea brewing, natural infusions, and sustainable applications. Aromatic, eco-friendly, zero-waste ingredient.',
            keywords: 'cocoa husk, cocoa shell tea, cocoa tea, sustainable cocoa, eco-friendly cocoa, cocoa infusion, cocoa by-product, zero waste cocoa, natural tea'
        }
    }

    const currentSEO = seoData[product.id as keyof typeof seoData]

    return (
        <div className="min-h-screen bg-primary pt-42 w-full">
            <SEO 
                title={currentSEO.title}
                description={currentSEO.description}
                keywords={currentSEO.keywords}
                ogImage={`https://yourdomain.com${product.heroImage}`}
                ogType="product"
                canonicalUrl={`https://yourdomain.com/products/${product.id}`}
            />
            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4">
                <Link to="/#products" className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium">Back to Products</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative pb-6 px-4 overflow-hidden">

                <div ref={heroRef} className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-extrabold text-white">{product.title}</h1>
                                    <p className="text-xl text-secondary font-semibold mt-2">{product.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-200 mb-6 leading-relaxed">{product.longDescription}</p>
                            <div className="flex flex-wrap gap-4">
                                <Button text="Request Quote" className="bg-primary rounded-lg" />
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={product.icon}
                                alt={product.title}
                                className="w-full h-[400px] lg:h-[500px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                <Check className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                                <span className="text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section ref={featuresRef} className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center">Product Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {product.features.map((feature, index) => (
                            <div key={index} className="feature-card bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="py-16 px-4 bg-linear-to-br from-primary/5 to-secondary/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">Technical Specifications</h2>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <div key={key} className="border-b border-gray-200 pb-4">
                                    <div className="text-sm font-semibold text-secondary uppercase tracking-wide mb-1">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </div>
                                    <div className="text-lg text-gray-800 font-medium">{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">Applications & Uses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {product.applications.map((app, index) => (
                            <div key={index} className="bg-white border-l-4 border-secondary p-4 rounded-lg shadow-sm">
                                <p className="text-gray-700 font-medium">{app}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nutritional & Certifications */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Nutritional Highlights</h3>
                        <div className="space-y-3">
                            {product.nutritionalHighlights.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-gray-200">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
                        <div className="flex flex-wrap gap-3">
                            {product.certifications.map((cert, index) => (
                                <span key={index} className="bg-secondary/30 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Order {product.title}?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Contact our team to discuss quantities, pricing, and delivery options for your specific needs.
                    </p>
                    {/* Get Quote CTA (works with BrowserRouter) */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => {
                                if (location.pathname === '/') {
                                    const el = document.getElementById('get-quote')
                                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                                } else {
                                    navigate('/')
                                    setTimeout(() => {
                                        const el = document.getElementById('get-quote')
                                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                                    }, 150)
                                }
                            }}
                            className="border-white border rounded-lg"
                        >
                            <Button text="Get a Quote" className="border-white border rounded-lg" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage
