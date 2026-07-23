import { useState, useMemo } from 'react'
import { Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import CTASection from '../components/CTASection'
import { appRoutes } from '../config'

// Prices mirror the app repo's config/content.yml (single source of truth).
// Annual figures are per-month billed annually. No plan has per-user fees
// or an enforced seat cap — keep this copy cap-free.
const plans = [
  {
    name: 'Solo',
    monthly: 39,
    annual: 32,
    period: '1 user',
    cta: 'Start Free Trial',
    ctaStyle: 'outline',
    href: `${appRoutes.signup}?plan=solo&trial=true`,
    features: [
      'Unlimited active jobs',
      'Invoicing & payments',
      'Job scheduling & calendar',
      'SMS notifications',
      'AI Quote Advisor',
      'Online booking widget',
      'Customer & job import',
      'Email support',
    ],
  },
  {
    name: 'Crew',
    monthly: 69,
    annual: 57,
    period: 'For small crews',
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
    featured: true,
    badge: 'Most Popular',
    href: `${appRoutes.signup}?plan=crew&trial=true`,
    features: [
      'Everything in Solo',
      'Quotes & estimates',
      'Leads & pipeline',
      'Recurring jobs',
      'Time & mileage tracking',
      'GPS clock-in',
      'QuickBooks sync',
      'Automated reminders',
      'Email + chat support',
    ],
  },
  {
    name: 'Ops',
    monthly: 149,
    annual: 119,
    period: 'For established teams',
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
    href: `${appRoutes.signup}?plan=ops&trial=true`,
    features: [
      'Everything in Crew',
      'Inventory + predictive AI',
      'Purchase orders & suppliers',
      'Equipment & maintenance',
      'Full AI suite + AI Receptionist',
      'Dispatch & live map',
      'Email & SMS campaigns',
      'Reports & analytics',
      'API access & webhooks',
      'Priority email + chat support',
    ],
  },
  {
    name: 'Pro',
    monthly: 249,
    annual: 199,
    period: 'Unlimited users · flat rate',
    cta: 'Start Free Trial',
    ctaStyle: 'outline',
    href: `${appRoutes.signup}?plan=pro&trial=true`,
    features: [
      'Everything in Ops',
      'Offline mode',
      'Fleet GPS & full dispatch',
      'Multi-location support',
      'Stripe Connect (collect payments)',
      'Autonomous AI agent suite',
      'Advanced reporting (profitability, A/R aging + portfolio intelligence)',
      'Priority phone support',
    ],
  },
]

const verticalPlans = [
  {
    name: 'NexJob Roofing',
    monthly: 219,
    annual: 179,
    tagline: 'Roofing companies · unlimited users · flat rate',
    description:
      'Ops power, payments, and the full roofing vertical — inspections, estimating, insurance claims, distributor ordering — at one flat rate.',
    href: `${appRoutes.signup}?plan=roofing&trial=true`,
  },
  {
    name: 'NexJob Roofing Pro',
    monthly: 299,
    annual: 249,
    tagline: 'Roofing companies · unlimited users · everything included',
    description:
      'Everything in NexJob Roofing plus the Pro power features — offline mode, multi-location, and advanced reporting.',
    href: `${appRoutes.signup}?plan=roofing_pro&trial=true`,
  },
  {
    name: 'NexJob Electrical',
    monthly: 179,
    annual: 149,
    tagline: 'Electrical contractors · unlimited users · flat rate',
    description:
      'Ops power, payments, and the electrical toolkit — panel & circuit asset registry with printable schedules — at one flat rate.',
    href: `${appRoutes.signup}?plan=electrical&trial=true`,
  },
  {
    name: 'NexJob Electrical Pro',
    monthly: 259,
    annual: 215,
    tagline: 'Electrical contractors · unlimited users · everything included',
    description:
      'Everything in NexJob Electrical plus the Pro power features — offline mode, multi-location, and advanced reporting.',
    href: `${appRoutes.signup}?plan=electrical_pro&trial=true`,
  },
]

const comparisonRows = [
  { feature: 'Per-user fees', jobber: '$29/user/mo', nexjob: '✓ None — flat plan pricing', nexjobWin: true, jobberPartial: true },
  { feature: 'GPS Tracking', jobber: 'Connect plan ($119)', nexjob: '✓ Included', nexjobWin: true, jobberPartial: true },
  { feature: 'Two-Way SMS', jobber: 'Grow plan ($199)', nexjob: '✓ Ops plan ($149)', nexjobWin: true, jobberPartial: true },
  { feature: 'Automated Reminders', jobber: 'Connect plan ($119)', nexjob: '✓ Included', nexjobWin: true, jobberPartial: true },
  { feature: 'Offline Mode', jobber: '✗ Not available', nexjob: '✓ Pro plan ($249)', nexjobWin: true, jobberNo: true },
  { feature: 'AI Scheduling', jobber: '✗ Basic Copilot only', nexjob: '✓ Full AI dispatch — Ops plan ($149)', nexjobWin: true, jobberNo: true },
  { feature: 'Route Optimization', jobber: '✗ "Connect the dots" map', nexjob: '✓ Real routing — Ops plan ($149)', nexjobWin: true, jobberNo: true },
  { feature: 'Advanced Analytics', jobber: 'Plus plan ($599)', nexjob: 'Ops plan ($149)', nexjobWin: true, jobberPartial: true },
  { feature: 'Job Costing', jobber: 'Grow plan ($199)', nexjob: 'Ops plan ($149)', nexjobWin: false, jobberPartial: true },
]

const jobberPlans = {
  core: { base: 39, included: 1, extra: 29, label: 'Core ($39/mo · 1 user)' },
  connect: { base: 119, included: 5, extra: 29, label: 'Connect ($119/mo · 5 users)' },
  grow: { base: 199, included: 10, extra: 29, label: 'Grow ($199/mo · 10 users)' },
  plus: { base: 599, included: 15, extra: 29, label: 'Plus ($599/mo · 15 users)' },
}

const nexjobCalcPlans = {
  solo: { price: 39, label: 'Solo ($39/mo · 1 user)' },
  crew: { price: 69, label: 'Crew ($69/mo)' },
  ops: { price: 149, label: 'Ops ($149/mo)' },
  pro: { price: 249, label: 'Pro ($249/mo · unlimited users)' },
}

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [calcUsers, setCalcUsers] = useState(8)
  const [calcPlan, setCalcPlan] = useState('grow')
  const [calcNexjobPlan, setCalcNexjobPlan] = useState('crew')

  const calcResults = useMemo(() => {
    const p = jobberPlans[calcPlan]
    const jobberCost = p.base + Math.max(0, calcUsers - p.included) * p.extra
    const nexjobCost = nexjobCalcPlans[calcNexjobPlan].price
    const savings = (jobberCost - nexjobCost) * 12
    return { jobberCost, nexjobCost, savings }
  }, [calcUsers, calcPlan, calcNexjobPlan])

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Simple pricing.<br />
            <span className="text-nx-purple-light">Seriously powerful.</span>
          </h1>
          <p className="text-lg text-nx-muted max-w-xl mx-auto leading-relaxed">
            No hidden fees. No per-user fees. Flat-rate plans starting at $39/mo &mdash; and every plan starts with a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-nx-surface border border-nx-border rounded-xl p-1 mt-6">
            <button
              onClick={() => setBilling('monthly')}
              className={`text-sm font-medium px-5 py-2 rounded-lg transition-all ${
                billing === 'monthly' ? 'bg-nx-purple text-white' : 'text-nx-muted hover:text-nx-text'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`text-sm font-medium px-5 py-2 rounded-lg transition-all ${
                billing === 'annual' ? 'bg-nx-purple text-white' : 'text-nx-muted hover:text-nx-text'
              }`}
            >
              Annual <span className="text-[10px] font-bold text-nx-green ml-1">Save up to 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-nx-surface border rounded-2xl p-6 transition-all hover:-translate-y-1 ${
                plan.featured
                  ? 'border-nx-purple glow-purple'
                  : 'border-nx-border hover:border-nx-purple'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nx-purple text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                  {plan.badge}
                </div>
              )}
              <p className="text-xs font-semibold text-nx-muted uppercase tracking-wider mb-2">{plan.name}</p>
              <p className="text-5xl font-extrabold tracking-tight">
                ${billing === 'monthly' ? plan.monthly : plan.annual}
                <span className="text-base font-normal text-nx-muted">/mo</span>
              </p>
              <p className="text-xs text-nx-muted2 mt-1 mb-6">
                {plan.period}
                {billing === 'annual' && ' · billed annually'}
              </p>

              <a
                href={plan.href}
                className={`block w-full text-sm font-semibold py-2.5 rounded-lg mb-6 transition-all text-center ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-nx-purple text-white hover:bg-nx-purple-dark'
                    : 'border border-nx-border2 text-nx-text2 hover:border-nx-purple hover:text-nx-text'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 items-start text-xs text-nx-muted">
                    <Check size={14} className="text-nx-green flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical Plans */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight">Built for your trade</h2>
            <p className="text-nx-muted text-sm mt-2">
              All-in plans for roofing and electrical contractors &mdash; Ops power plus the full trade toolkit, unlimited users, one flat rate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {verticalPlans.map((plan) => (
              <div
                key={plan.name}
                className="bg-nx-surface border border-nx-border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-nx-purple"
              >
                <p className="text-xs font-semibold text-nx-muted uppercase tracking-wider mb-2">{plan.name}</p>
                <p className="text-4xl font-extrabold tracking-tight">
                  ${billing === 'monthly' ? plan.monthly : plan.annual}
                  <span className="text-base font-normal text-nx-muted">/mo</span>
                </p>
                <p className="text-xs text-nx-muted2 mt-1 mb-4">
                  {plan.tagline}
                  {billing === 'annual' && ' · billed annually'}
                </p>
                <p className="text-xs text-nx-muted leading-relaxed mb-6">{plan.description}</p>
                <a
                  href={plan.href}
                  className="block w-full text-sm font-semibold py-2.5 rounded-lg transition-all text-center border border-nx-border2 text-nx-text2 hover:border-nx-purple hover:text-nx-text"
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight">NexJob vs Jobber</h2>
            <p className="text-nx-muted text-sm mt-2">See what you get at every price point.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-nx-border">
                  <th className="text-left text-xs font-semibold text-nx-muted uppercase tracking-wider py-3 px-4">Feature</th>
                  <th className="text-left text-xs font-semibold text-nx-muted uppercase tracking-wider py-3 px-4">Jobber ($119–$199/mo)</th>
                  <th className="text-left text-xs font-semibold text-nx-purple-light uppercase tracking-wider py-3 px-4 bg-purple-500/5">NexJob Crew ($69/mo)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-nx-border hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-medium">{row.feature}</td>
                    <td className={`py-3 px-4 ${row.jobberNo ? 'text-nx-muted2' : row.jobberPartial ? 'text-yellow-400 font-medium' : ''}`}>
                      {row.jobber}
                    </td>
                    <td className={`py-3 px-4 bg-purple-500/5 ${row.nexjobWin ? 'text-nx-green font-medium' : ''}`}>
                      {row.nexjob}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="px-6 py-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold tracking-tight">Switching Cost Calculator</h2>
            <p className="text-nx-muted text-sm mt-2">See how much you'd save switching from Jobber to NexJob.</p>
          </div>
          <div className="bg-nx-surface border border-nx-border rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-nx-muted mb-2">How many team members?</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={calcUsers}
                  onChange={(e) => setCalcUsers(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-nx-bg border border-nx-border rounded-lg px-4 py-2.5 text-base text-nx-text outline-none focus:border-nx-purple transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-nx-muted mb-2">Jobber plan you'd need</label>
                <select
                  value={calcPlan}
                  onChange={(e) => setCalcPlan(e.target.value)}
                  className="w-full bg-nx-bg border border-nx-border rounded-lg px-4 py-2.5 text-base text-nx-text outline-none focus:border-nx-purple transition-colors"
                >
                  {Object.entries(jobberPlans).map(([key, p]) => (
                    <option key={key} value={key}>{p.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-nx-muted mb-2">NexJob plan you'd choose</label>
                <select
                  value={calcNexjobPlan}
                  onChange={(e) => setCalcNexjobPlan(e.target.value)}
                  className="w-full bg-nx-bg border border-nx-border rounded-lg px-4 py-2.5 text-base text-nx-text outline-none focus:border-nx-purple transition-colors"
                >
                  {Object.entries(nexjobCalcPlans).map(([key, p]) => (
                    <option key={key} value={key}>{p.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-nx-border">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-red-400">${calcResults.jobberCost}</p>
                <p className="text-xs text-nx-muted mt-1">Jobber Monthly Cost</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-nx-purple-light">${calcResults.nexjobCost}</p>
                <p className="text-xs text-nx-muted mt-1">NexJob Monthly Cost</p>
              </div>
              <div className="text-center">
                <p className={`text-3xl font-extrabold ${calcResults.savings > 0 ? 'text-nx-green' : 'text-nx-muted'}`}>
                  {calcResults.savings > 0 ? `$${calcResults.savings.toLocaleString()}/yr` : '$0/yr'}
                </p>
                <p className="text-xs text-nx-muted mt-1">Your Annual Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Try NexJob free for 14 days"
        subtitle="No credit card required. Full access to every feature. Cancel anytime."
      />
    </>
  )
}
