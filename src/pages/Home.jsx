import { Check } from 'lucide-react'
import { ButtonPrimary, ButtonOutline } from '../components/Button'
import SectionLabel from '../components/SectionLabel'
import FadeIn from '../components/FadeIn'
import CTASection from '../components/CTASection'
import { appRoutes } from '../config'

const heroProofs = [
  'Free forever plan',
  'Offline-ready mobile app',
  'AI-powered scheduling',
  'Set up in under 5 minutes',
]

const trades = ['\u2744\ufe0f HVAC', '\ud83d\udd28 Handyman', '\u26a1 Electrical', '\ud83d\udebf Plumbing', '\ud83c\udf3f Landscaping', '\ud83e\uddf9 Cleaning', '\ud83c\udfd7\ufe0f Roofing', '\ud83c\udfa8 Painting']

const features = [
  { icon: '\ud83d\udccb', title: 'Smart Quoting', desc: 'Create professional quotes in seconds. AI suggests pricing based on job type, materials, and your history. Clients approve with one tap.', color: 'bg-purple-500/10' },
  { icon: '\ud83d\udcc5', title: 'AI Scheduling', desc: 'Drag-and-drop calendar with AI-powered auto-assignment. Matches technicians by skill, location, and availability. No more double-bookings.', color: 'bg-cyan-500/10' },
  { icon: '\ud83d\uddfa\ufe0f', title: 'Route Optimization', desc: 'Real turn-by-turn routing with multi-stop optimization. Traffic-aware ETAs. Your crew saves hours and fuel every week.', color: 'bg-green-500/10' },
  { icon: '\ud83d\udcb0', title: 'Invoicing & Payments', desc: 'Auto-generate invoices from completed jobs. Accept cards, ACH, Apple Pay, Google Pay. Clients pay online in your branded portal.', color: 'bg-yellow-500/10' },
  { icon: '\ud83d\udc65', title: 'Client CRM', desc: 'Full client profiles with service history, lifetime value, communication log, and satisfaction scores. Know every customer like your best one.', color: 'bg-red-500/10' },
  { icon: '\ud83d\udcf1', title: 'Offline-First Mobile', desc: "Your crew works everywhere \u2014 even without signal. Full job details, forms, and photos cached offline. Auto-syncs when connectivity returns.", color: 'bg-orange-500/10' },
  { icon: '\ud83d\udcac', title: 'Two-Way SMS', desc: 'Text clients and crew from one dashboard. Automated appointment reminders, on-my-way alerts, and follow-ups \u2014 included in every plan.', color: 'bg-blue-500/10' },
  { icon: '\ud83d\udcca', title: 'Real Analytics', desc: "Not basic pie charts. Custom dashboards, revenue trends, technician scorecards, job profitability \u2014 the insights your business actually needs.", color: 'bg-violet-500/10' },
  { icon: '\ud83c\udf10', title: 'Client Portal', desc: 'A branded self-serve portal where your customers approve quotes, track their technician in real-time, pay invoices, and book services 24/7.', color: 'bg-teal-500/10' },
]

const aiFeatures = [
  { icon: '\ud83e\udde0', title: 'Smart Dispatch', desc: 'Auto-assigns the right technician to every job based on skills, proximity, current workload, and customer preference.' },
  { icon: '\u26a1', title: 'Predictive Estimates', desc: 'Upload a job photo and get an AI-generated quote based on your pricing history, materials database, and job complexity.' },
  { icon: '\ud83d\udcc8', title: 'Revenue Intelligence', desc: 'Ask questions in plain English \u2014 "What\'s my most profitable service?" "Which tech has the best close rate?" Instant answers.' },
  { icon: '\ud83d\udd04', title: 'Auto Follow-Up', desc: 'AI detects when estimates go cold and triggers personalized follow-up sequences via SMS, email, and push notifications.' },
]

const stats = [
  { num: '3.2hrs', label: 'Average time saved per day' },
  { num: '47%', label: 'Faster estimate-to-close' },
  { num: '$15k', label: 'Avg annual fuel savings' },
  { num: '99.9%', label: 'Uptime guarantee' },
]

const testimonials = [
  {
    text: '"We switched from Jobber and saved $200/month. The AI scheduling alone paid for itself \u2014 my team runs 2 more jobs per day now."',
    initials: 'JR', name: 'Jake Rodriguez', role: 'Owner, ProFlow Plumbing \u00b7 8 employees',
  },
  {
    text: '"The offline mode is a game-changer. My guys work in basements and rural areas all day. With our old software, they were flying blind."',
    initials: 'TM', name: 'Tanya Mitchell', role: 'GM, Summit HVAC \u00b7 12 employees',
  },
  {
    text: '"I was paying $29/user on another platform. NexJob gives me more features for less. The client portal makes my one-man show look like a big operation."',
    initials: 'DK', name: 'Derek Kim', role: 'Solo handyman \u00b7 1 employee',
  },
]

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Glows */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] hero-glow pointer-events-none" />
        <div className="absolute top-0 right-[-100px] w-[400px] h-[400px] hero-glow-cyan pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-nx-purple-light bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-nx-green rounded-full animate-pulse-dot" />
            Now in Early Access
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            Run Your Entire<br />
            Field Service on <span className="gradient-text">Autopilot</span>
          </h1>

          <p className="text-lg text-nx-muted max-w-xl mx-auto mb-10 leading-relaxed">
            AI-powered scheduling, dispatching, invoicing, and client management \u2014 built for trade pros who want to grow without the growing pains.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-10">
            <ButtonPrimary size="lg" href={appRoutes.signup}>Start Free \u2014 No Card Required \u2192</ButtonPrimary>
            <ButtonOutline size="lg" to="/features">See How It Works</ButtonOutline>
          </div>

          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">
            {heroProofs.map((proof) => (
              <div key={proof} className="flex items-center gap-1.5 text-sm text-nx-muted">
                <Check size={16} className="text-nx-green" />
                {proof}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOGO/TRADE BAR ===== */}
      <section className="border-y border-nx-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-medium text-nx-muted2 uppercase tracking-widest mb-6">
            Trusted by service businesses across every trade
          </p>
          <div className="flex justify-center items-center flex-wrap gap-8 opacity-50">
            {trades.map((t) => (
              <span key={t} className="text-sm font-bold text-nx-muted tracking-wide">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Features</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
            Everything to run your<br />service business
          </h2>
          <p className="text-nx-muted text-lg max-w-xl leading-relaxed">
            From the first quote to the final invoice \u2014 and every job, route, and payment in between.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-nx-border border border-nx-border rounded-2xl overflow-hidden mt-12">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 50}>
                <div className="bg-nx-surface p-8 hover:bg-nx-surface2 transition-colors cursor-default h-full">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${f.color}`}>
                    {f.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-nx-muted leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI SECTION ===== */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-nx-bg via-purple-500/[0.03] to-nx-bg pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionLabel>AI Engine</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
              Your business runs itself.<br />
              <span className="text-nx-purple-light">AI handles the rest.</span>
            </h2>
            <p className="text-nx-muted text-lg max-w-lg leading-relaxed mb-8">
              NexJob's AI engine doesn't just make suggestions \u2014 it takes action. Smart dispatching, predictive scheduling, and automated follow-ups that work 24/7.
            </p>
            <div className="space-y-4">
              {aiFeatures.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm bg-nx-purple-glow">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5">{f.title}</h4>
                    <p className="text-xs text-nx-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="bg-nx-surface border border-nx-border rounded-2xl p-6">
            <div className="bg-nx-bg rounded-xl p-5 font-mono text-sm leading-loose">
              <p className="text-nx-muted2">{'// NexJob AI \u2014 Live dispatch optimization'}</p>
              <p className="mt-2"><span className="text-nx-purple-light">nexjob&gt;</span> <span className="text-nx-cyan-light">optimize_schedule</span>(date: &quot;today&quot;)</p>
              <p className="text-nx-green-light mt-2">\u2713 Analyzing 12 jobs across 4 technicians...</p>
              <p className="text-nx-green-light">\u2713 Rerouted Mike: saved 47 min drive time</p>
              <p className="text-nx-green-light">\u2713 Swapped Job #1847 \u2192 Sarah (closer + certified)</p>
              <p className="text-nx-green-light">\u2713 Flagged: Client Martinez hasn't viewed estimate</p>
              <p className="text-nx-green-light">&nbsp; \u2192 Auto-SMS follow-up scheduled for 2:00 PM</p>
              <p className="mt-3"><span className="text-nx-purple-light">nexjob&gt;</span> <span className="text-nx-cyan-light">revenue_query</span>(&quot;best month this quarter&quot;)</p>
              <p className="text-nx-green-light mt-2">\u2713 February: $48,720 (+22% vs Jan)</p>
              <p className="text-nx-green-light">&nbsp; Top service: HVAC maintenance ($18,400)</p>
              <p className="text-nx-green-light">&nbsp; Top closer: Sarah K. (94% win rate)</p>
              <p className="text-nx-muted2 mt-3">\u2588 Ready for next command...</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-y border-nx-border py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold tracking-tight gradient-text-static">{s.num}</div>
              <div className="text-sm text-nx-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-4xl font-extrabold tracking-tight">Service pros love NexJob</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {testimonials.map((t) => (
              <FadeIn key={t.name}>
                <div className="bg-nx-surface border border-nx-border rounded-2xl p-7 hover:border-nx-purple transition-colors h-full flex flex-col">
                  <p className="text-yellow-400 text-sm tracking-widest mb-4">\u2605\u2605\u2605\u2605\u2605</p>
                  <p className="text-sm text-nx-text2 leading-relaxed flex-1 mb-5">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-nx-surface3 flex items-center justify-center text-xs font-bold text-nx-purple-light">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-nx-muted2">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection />
    </>
  )
}
