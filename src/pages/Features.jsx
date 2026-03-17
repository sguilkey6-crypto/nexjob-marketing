import { Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import FadeIn from '../components/FadeIn'
import CTASection from '../components/CTASection'

const featureSections = [
  {
    label: 'Scheduling',
    title: 'AI-Powered Scheduling & Dispatching',
    desc: "Drag-and-drop calendar meets AI brain. NexJob doesn't just show you the schedule \u2014 it builds the optimal one.",
    points: [
      { bold: 'Smart auto-assign', text: '\u2014 matches technician skills, certifications, and proximity to each job' },
      { bold: 'Conflict detection', text: '\u2014 prevents double-bookings and warns about overlapping drive times' },
      { bold: 'Blackout dates', text: '\u2014 per-technician vacation, training, and PTO management built-in' },
      { bold: 'Drag-and-drop rescheduling', text: '\u2014 move jobs between techs or days instantly' },
      { bold: 'Real-time GPS tracking', text: '\u2014 see where every team member is right now' },
    ],
    visual: 'scheduling',
  },
  {
    label: 'Quoting & Invoicing',
    title: 'From Quote to Cash in Fewer Clicks',
    desc: 'Professional quotes that convert. Invoices that get paid. A payment experience your clients will actually enjoy.',
    points: [
      { bold: 'AI-suggested pricing', text: '\u2014 based on your history, materials, and market rates' },
      { bold: 'Custom email domain', text: '\u2014 quotes@yourbusiness.com, not a generic sender clients ignore' },
      { bold: 'Triple-channel delivery', text: '\u2014 email + SMS + push notification for every estimate' },
      { bold: 'One-tap approval', text: '\u2014 clients approve and pay deposits from their phone' },
      { bold: 'Auto follow-up', text: '\u2014 AI detects stale estimates and sends personalized reminders' },
      { bold: 'Payment flexibility', text: '\u2014 credit cards, ACH, Apple Pay, Google Pay, payment plans' },
    ],
    visual: 'quoting',
    reverse: true,
  },
  {
    label: 'Client Experience',
    title: 'A Branded Portal That Wins Repeat Business',
    desc: 'Give your clients a self-serve experience that makes your one-person operation look like a Fortune 500 service department.',
    points: [
      { bold: 'Real-time tech tracking', text: '\u2014 Uber-style "your technician is 8 minutes away"' },
      { bold: 'Job photo stream', text: '\u2014 before/during/after photos shared with clients automatically' },
      { bold: 'Online booking', text: '\u2014 clients self-schedule from your website or the portal' },
      { bold: 'Service history', text: '\u2014 visual timeline of every service, payment, and note' },
      { bold: 'White-label branding', text: '\u2014 your logo, colors, and domain from day one' },
    ],
    visual: 'portal',
  },
  {
    label: 'Analytics',
    title: 'Dashboards That Actually Help You Grow',
    desc: 'Not basic pie charts. Real business intelligence designed for service businesses.',
    points: [
      { bold: 'Revenue dashboards', text: '\u2014 daily, weekly, monthly trends with drill-down by service, tech, or client' },
      { bold: 'Technician scorecards', text: '\u2014 jobs completed, revenue generated, customer ratings, on-time rate' },
      { bold: 'Job profitability', text: '\u2014 real-time cost tracking against estimates to see true margins' },
      { bold: 'Custom reports', text: '\u2014 build and save your own reports, schedule email delivery' },
      { bold: 'Natural-language queries', text: '\u2014 ask "What was my best week this year?" and get an instant answer' },
    ],
    visual: 'analytics',
    reverse: true,
  },
]

function SchedulingVisual() {
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <div className="flex-1 bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
          <p className="text-[10px] text-nx-muted2">MON 9:00 AM</p>
          <p className="text-sm font-semibold mt-0.5">HVAC Install \u2014 Johnson</p>
          <p className="text-xs text-nx-green mt-1">\u2713 Mike T. (auto-assigned)</p>
        </div>
        <div className="flex-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
          <p className="text-[10px] text-nx-muted2">MON 10:30 AM</p>
          <p className="text-sm font-semibold mt-0.5">Plumbing Repair \u2014 Davis</p>
          <p className="text-xs text-nx-cyan mt-1">\u2713 Sarah K. (3 min away)</p>
        </div>
      </div>
      <div className="bg-nx-bg rounded-lg p-3 border border-green-500/20">
        <p className="text-[10px] text-nx-green font-semibold">\ud83e\udde0 AI OPTIMIZATION</p>
        <p className="text-xs text-nx-muted mt-1">Swapped 2 jobs between Mike & Sarah. Saved 52 min of drive time total. Estimated fuel savings: $14.20 today.</p>
      </div>
    </div>
  )
}

function QuotingVisual() {
  return (
    <div className="bg-nx-bg rounded-xl p-5 border border-nx-border">
      <div className="flex justify-between items-center mb-4">
        <span className="text-base font-bold">Quote #1847</span>
        <span className="text-[10px] font-semibold text-nx-green bg-green-500/10 px-2 py-0.5 rounded">APPROVED</span>
      </div>
      <p className="text-xs text-nx-muted mb-3">Client: Maria Santos</p>
      <div className="border-t border-nx-border pt-3 space-y-1.5">
        {[
          ['AC Unit Installation', '$3,200'],
          ['Ductwork Modification', '$850'],
          ['Thermostat (Smart)', '$320'],
        ].map(([item, price]) => (
          <div key={item} className="flex justify-between text-sm">
            <span className="text-nx-muted">{item}</span>
            <span>{price}</span>
          </div>
        ))}
        <div className="flex justify-between text-base font-bold pt-3 border-t border-nx-border mt-2">
          <span>Total</span>
          <span className="text-nx-green">$4,370</span>
        </div>
      </div>
      <p className="text-[10px] text-nx-purple-light mt-3">\ud83d\udca1 AI note: Price is 8% above your avg for this job type. Client approved in 2.3 hrs (your avg: 1.8 days).</p>
    </div>
  )
}

function PortalVisual() {
  return (
    <div className="bg-nx-bg rounded-xl p-4 border border-nx-border">
      <p className="text-[10px] text-nx-muted2 uppercase tracking-widest text-center mb-3">Your client sees</p>
      <div className="bg-cyan-500/5 border border-cyan-500/15 rounded-lg p-3 mb-3">
        <p className="text-sm font-semibold">\ud83d\ude90 Mike is on his way!</p>
        <p className="text-xs text-nx-muted mt-1">Estimated arrival: 10:23 AM (8 min)</p>
        <div className="bg-nx-surface3 rounded h-1.5 mt-2 overflow-hidden">
          <div className="bg-nx-cyan h-full rounded w-[72%]" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-nx-surface2 rounded-lg p-3 text-center">
          <p className="text-[10px] text-nx-muted2">Next Service</p>
          <p className="text-sm font-semibold mt-0.5">Mar 22</p>
        </div>
        <div className="bg-nx-surface2 rounded-lg p-3 text-center">
          <p className="text-[10px] text-nx-muted2">Open Invoice</p>
          <p className="text-sm font-semibold text-yellow-400 mt-0.5">$450</p>
        </div>
      </div>
      <button className="w-full bg-nx-purple text-white text-sm font-semibold py-2 rounded-lg">
        Pay Invoice \u2192
      </button>
    </div>
  )
}

function AnalyticsVisual() {
  const bars = [
    { label: 'Jan', h: '45%' },
    { label: 'Feb', h: '68%' },
    { label: 'Mar', h: '52%' },
    { label: 'Apr', h: '78%' },
    { label: 'May', h: '90%' },
    { label: 'Jun', h: '85%' },
  ]
  return (
    <div className="bg-nx-bg rounded-xl p-5 border border-nx-border">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-bold">Revenue Trend</span>
        <span className="text-[10px] text-nx-green font-semibold bg-green-500/10 px-2 py-0.5 rounded">+22% \u2191</span>
      </div>
      <div className="flex items-end gap-3 h-32">
        {bars.map((b) => (
          <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full bg-purple-500/20 rounded-t" style={{ height: b.h }}>
              <div className="w-full h-full bg-gradient-to-t from-nx-purple to-nx-purple-light rounded-t opacity-80" />
            </div>
            <span className="text-[10px] text-nx-muted2">{b.label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-nx-border">
        <div className="text-center">
          <p className="text-sm font-bold text-nx-purple-light">$48.7k</p>
          <p className="text-[10px] text-nx-muted2">Revenue</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-nx-green">142</p>
          <p className="text-[10px] text-nx-muted2">Jobs</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-nx-cyan">94%</p>
          <p className="text-[10px] text-nx-muted2">Close Rate</p>
        </div>
      </div>
    </div>
  )
}

const visuals = {
  scheduling: SchedulingVisual,
  quoting: QuotingVisual,
  portal: PortalVisual,
  analytics: AnalyticsVisual,
}

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Features</SectionLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Built for the field.<br />
            <span className="text-nx-purple-light">Designed for growth.</span>
          </h1>
          <p className="text-lg text-nx-muted max-w-xl mx-auto leading-relaxed">
            Every tool your service business needs \u2014 quoting to payments, scheduling to analytics \u2014 in one platform that works online and off.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      {featureSections.map((section, i) => {
        const Visual = visuals[section.visual]
        return (
          <section key={section.label} className="py-20 px-6 border-t border-nx-border">
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${section.reverse ? 'lg:[direction:rtl]' : ''}`}>
                <FadeIn className={section.reverse ? 'lg:[direction:ltr]' : ''}>
                  <SectionLabel>{section.label}</SectionLabel>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3">
                    {section.title}
                  </h2>
                  <p className="text-nx-muted text-base leading-relaxed mb-6">{section.desc}</p>
                  <div className="space-y-3">
                    {section.points.map((p) => (
                      <div key={p.bold} className="flex gap-2.5 items-start">
                        <Check size={16} className="text-nx-green mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-nx-muted">
                          <strong className="text-nx-text">{p.bold}</strong> {p.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
                <FadeIn delay={100} className={section.reverse ? 'lg:[direction:ltr]' : ''}>
                  <div className="bg-nx-surface border border-nx-border rounded-2xl p-6">
                    <Visual />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <CTASection
        title="See every feature in action"
        subtitle="Start your free trial today. No credit card. No contracts. Just a better way to run your business."
      />
    </>
  )
}
