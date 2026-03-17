import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'
import { ButtonPrimary } from '../components/Button'

const values = [
  {
    icon: '\ud83c\udfaf',
    title: 'Field-First Design',
    desc: "Every feature is tested in the field, not just the office. If it doesn't work in a basement with no signal, it doesn't ship.",
  },
  {
    icon: '\ud83e\udd16',
    title: 'AI That Works For You',
    desc: 'Not AI for the sake of AI. Every automation saves real time, earns real money, or prevents a real mistake.',
  },
  {
    icon: '\ud83d\udcb0',
    title: 'Fair Pricing, Always',
    desc: "No punitive per-user fees. No paywalling essential features. You grow, your price stays reasonable.",
  },
  {
    icon: '\ud83d\udd13',
    title: 'Your Data, Your Business',
    desc: 'Export everything, anytime. No lock-in. We earn your business every month, not through contracts.',
  },
]

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', company: '', size: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>About</SectionLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Built by a trade pro.<br />
            <span className="text-nx-purple-light">For trade pros.</span>
          </h1>
          <p className="text-lg text-nx-muted max-w-xl mx-auto leading-relaxed">
            NexJob was born from frustration with software that doesn't understand how field service actually works.
          </p>
        </div>
      </section>

      {/* Content + Form */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Story + Values */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Why NexJob Exists</h3>
            <div className="space-y-4 text-nx-muted leading-relaxed">
              <p>
                Every field service platform promises to \"simplify your business.\" But when you're knee-deep in a crawl space with no cell signal, or your dispatcher just double-booked your best tech, or 60% of your estimates are landing in spam folders \u2014 \"simple\" feels like a lie.
              </p>
              <p>
                NexJob is different because it was built by someone who's lived the problem. We know that offline access isn't a \"nice-to-have\" \u2014 it's a requirement. That route optimization isn't a luxury \u2014 it's money in your pocket. That AI scheduling isn't the future \u2014 it's overdue.
              </p>
              <p>
                We're building the platform we wished existed: powerful enough for a 50-person operation, simple enough for a solo handyman, and priced fairly for everyone in between.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {values.map((v) => (
                <div key={v.title} className="bg-nx-surface border border-nx-border rounded-xl p-5">
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h4 className="text-sm font-semibold mb-1">{v.title}</h4>
                  <p className="text-xs text-nx-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="bg-nx-surface border border-nx-border rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6">Get in Touch</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">\ud83c\udf89</div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-sm text-nx-muted">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-nx-muted mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-nx-bg border border-nx-border rounded-lg px-4 py-2.5 text-sm text-nx-text outline-none focus:border-nx-purple transition-colors placeholder:text-nx-muted2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-nx-muted mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@yourbusiness.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-nx-bg border border-nx-border rounded-lg px-4 py-2.5 text-sm text-nx-text outline-none focus:border-nx-purple transition-colors placeholder:text-nx-muted2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-nx-muted mb-1.5">Company</label>
                    <input
                      type="text"
                      placeholder="Smith Plumbing LLC"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-nx-bg border border-nx-border rounded-lg px-4 py-2.5 text-sm text-nx-text outline-none focus:border-nx-purple transition-colors placeholder:text-nx-muted2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-nx-muted mb-1.5">Team Size</label>
                    <select
                      value={form.size}
                      onChange={(e) => setForm({ ...form, size: e.target.value })}
                      className="w-full bg-nx-bg border border-nx-border rounded-lg px-4 py-2.5 text-sm text-nx-text outline-none focus:border-nx-purple transition-colors"
                    >
                      <option value="">Select...</option>
                      <option>Just me</option>
                      <option>2-5 people</option>
                      <option>6-15 people</option>
                      <option>16-50 people</option>
                      <option>50+ people</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-nx-muted mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your business and what you're looking for..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-nx-bg border border-nx-border rounded-lg px-4 py-2.5 text-sm text-nx-text outline-none focus:border-nx-purple transition-colors resize-y placeholder:text-nx-muted2"
                    />
                  </div>
                  <ButtonPrimary size="lg" className="w-full justify-center">
                    Send Message \u2192
                  </ButtonPrimary>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
