import { useState } from 'react'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/solomonnathan065@gmail.com'

export default function GetQuote() {
    const [metricTons, setMetricTons] = useState<number | ''>('')
    const [frequency, setFrequency] = useState('monthly')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

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

        const formData = new FormData()
        formData.append('Metric Tons', String(metricTons))
        formData.append('Frequency', frequency)
        formData.append('Email', email)
        formData.append('Name', name)

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            })

            if (res.ok) {
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch (err) {
            console.log(err)
            setStatus('error')
        }
    }

    return (
        <section id="get-quote" className="w-full mx-auto py-12 px-4 bg-primary">
            <div className="bg-white rounded-2xl max-w-6xl mx-auto p-6 sm:p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">Get a Quote</h3>
                <p className="text-sm text-gray-600 mb-6">Tell us how much you need and how often — we’ll email a tailored quote.</p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
                    <div className="col-span-12 md:col-span-6">
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

                    <div className="col-span-12 md:col-span-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                        <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="w-full border rounded-lg px-3 py-2">
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-lg px-3 py-2" required />
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name (optional)</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-lg px-3 py-2" />
                    </div>

                    <div className="col-span-12 md:col-span-4 flex flex-col lg:flex-row items-center gap-4 mt-2 mx-auto">
                        <button type="submit" disabled={status === 'sending'} className="bg-primary text-white px-6 py-2 rounded-lg shadow disabled:opacity-60">
                            {status === 'sending' ? 'Sending...' : 'Request Quote'}
                        </button>
                        {status === 'success' && <p className="text-">Quote request sent — we will get back to you shortly.</p>}
                        {status === 'error' && <p className="text-red-600">Something went wrong. Try again later.</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}
