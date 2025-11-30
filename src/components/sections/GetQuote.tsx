import { useState } from 'react'
import { Info } from 'lucide-react'

const WEB3FORMS_ACCESS_KEY = '57c1ab62-d9f8-40ec-8784-e5b0a2ddd506'

const beanTypes = {
    GF: {
        label: 'G2 (GF) Beans',
        specs: [
            { label: 'Beans per 100g', value: '95-100 beans' },
            { label: 'Moisture', value: '8%' },
            { label: 'Moldy + Infested', value: '3-8%' },
            { label: 'Slaty', value: '3-8%' },
            { label: 'Defective', value: '3-6%' },
            { label: 'Foreign Matter', value: '0.2-1.5%' }
        ]
    },
    FF: {
        label: 'G2 (FF) Beans',
        specs: [
            { label: 'Beans per 100g', value: '105-127+ beans' },
            { label: 'Moisture', value: '8%' },
            { label: 'Moldy + Infested', value: 'Up to 5%' },
            { label: 'Slaty', value: '3-8%' },
            { label: 'Defective', value: '3-6%' },
            { label: 'Foreign Matter', value: '0.2-1.5%' }
        ]
    }
}

export default function GetQuote() {
    const [metricTons, setMetricTons] = useState<number | ''>('')
    const [frequency, setFrequency] = useState('monthly')
    const [beanType, setBeanType] = useState<'GF' | 'FF'>('GF')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [showTooltip, setShowTooltip] = useState<'GF' | 'FF' | null>(null)

    const validateEmail = (e: string) => /\S+@\S+\.\S+/.test(e)

    async function handleSubmit(ev: React.FormEvent) {
        ev.preventDefault()
        if (!metricTons || Number(metricTons) <= 0) {
            alert('Please enter a valid number of metric tons.')
            return
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.')
            return
        }

        setStatus('sending')

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: 'New Quote Request from Cocoa Website',
                    from_name: name || 'Website Visitor',
                    email: email,
                    message: `New Quote Request:

Bean Type: ${beanTypes[beanType].label}
Metric Tons: ${metricTons}
Frequency: ${frequency}
Customer Name: ${name || 'Not provided'}
Customer Email: ${email}

Please respond to this quote request.`,
                    // Additional fields for better organization
                    bean_type: beanTypes[beanType].label,
                    metric_tons: metricTons,
                    frequency: frequency,
                    customer_name: name || 'Not provided',
                    customer_email: email,
                }),
            })

            const data = await res.json()

            if (data.success) {
                setStatus('success')
                // Reset form
                setMetricTons('')
                setFrequency('monthly')
                setBeanType('GF')
                setEmail('')
                setName('')
            } else {
                console.error('Form submission error:', data)
                setStatus('error')
            }
        } catch (err) {
            console.error('Network error:', err)
            setStatus('error')
        }
    }

    return (
        <section id="get-quote" className="w-full mx-auto py-12 px-4 bg-primary">
            <div className="bg-white rounded-2xl max-w-6xl mx-auto p-6 sm:p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">Get a Quote</h3>
                <p className="text-sm text-gray-600 mb-6">Tell us how much you need and how often — we’ll email a tailored quote.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Bean Type Selection */}
                    <div className="col-span-12">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Bean Type</label>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {(['GF', 'FF'] as const).map((type) => (
                                <div key={type} className="relative flex-1">
                                    <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all hover:border-secondary/50 has-checked:border-secondary has-checked:bg-secondary/5">
                                        <input
                                            type="radio"
                                            name="beanType"
                                            value={type}
                                            checked={beanType === type}
                                            onChange={(e) => setBeanType(e.target.value as 'GF' | 'FF')}
                                            className="w-5 h-5 text-secondary accent-secondary"
                                        />
                                        <span className="flex-1 font-medium text-gray-900">{beanTypes[type].label}</span>
                                        <button
                                            type="button"
                                            onMouseEnter={() => setShowTooltip(type)}
                                            onMouseLeave={() => setShowTooltip(null)}
                                            className="relative p-1 text-gray-400 hover:text-secondary transition-colors"
                                        >
                                            <Info className="w-5 h-5" />

                                            {/* Tooltip */}
                                            {showTooltip === type && (
                                                <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-primary border-gray-700 border text-white text-xs rounded-lg shadow-xl p-4">
                                                    <div className="font-semibold mb-3 text-sm border-b border-gray-700 pb-2">
                                                        {beanTypes[type].label} Specifications
                                                    </div>
                                                    <div className="space-y-2">
                                                        {beanTypes[type].specs.map((spec, idx) => (
                                                            <div key={idx} className="flex justify-between gap-4">
                                                                <span className="text-gray-300">{spec.label}:</span>
                                                                <span className="font-medium">{spec.value}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {/* Tooltip arrow */}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                                        <div className="border-8 border-transparent border-t-gray-900"></div>
                                                    </div>
                                                </div>
                                            )}
                                        </button>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div className="col-span-12 md:col-span-6 lg:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Metric Tons</label>
                            <input
                                type="number"
                                min="0"
                                step="0.1"
                                value={metricTons}
                                onChange={(e) => setMetricTons(e.target.value === '' ? '' : Number(e.target.value))}
                                className="w-full border rounded-lg px-3 py-2"
                                required
                            />
                        </div>

                        <div className="col-span-12 md:col-span-6 lg:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                            <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full border rounded-lg px-3 py-2">
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="quarterly">Quarterly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>

                        <div className="col-span-12 md:col-span-6 lg:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-lg px-3 py-2" required />
                        </div>

                        <div className="col-span-12 md:col-span-6 lg:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name (optional)</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <button type="submit" disabled={status === 'sending'} className="bg-primary text-white px-8 py-3 rounded-lg shadow disabled:opacity-60 font-semibold hover:bg-primary/90 transition-colors">
                            {status === 'sending' ? 'Sending...' : 'Request Quote'}
                        </button>
                        {status === 'success' && <p className="text-green-600 font-medium">Quote request sent — we will get back to you shortly.</p>}
                        {status === 'error' && <p className="text-red-600">Something went wrong. Try again later.</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}
