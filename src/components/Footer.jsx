import { Link } from 'react-router-dom'

const footerLinks = {
  Product: [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Industries', path: '/industries' },
    { label: 'Changelog', path: '/changelog' },
  ],
  Resources: [
    { label: 'FAQ', path: '/faq' },
    { label: 'Help Center', path: '#' },
    { label: 'Status Page', path: '#' },
  ],
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Contact', href: 'mailto:steve@nexjob.app' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-nx-border mt-16">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-extrabold text-lg">
              <span className="w-2 h-2 bg-nx-purple rounded-full" />
              NexJob
            </Link>
            <p className="text-sm text-nx-muted mt-3 max-w-[280px] leading-relaxed">
              AI-powered field service management for trade professionals. Schedule, dispatch, invoice, and grow — all from one platform.
            </p>
            <a
              href="mailto:steve@nexjob.app"
              className="inline-block mt-4 text-xs text-nx-muted2 hover:text-nx-text transition-colors"
            >
              steve@nexjob.app
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-nx-muted uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map(({ label, path, href }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-nx-muted2 hover:text-nx-text transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        to={path}
                        className="text-sm text-nx-muted2 hover:text-nx-text transition-colors"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-nx-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-nx-muted2">© 2026 NexJob, LLC — Delaware County, Ohio. All rights reserved.</p>
          <p className="text-xs text-nx-muted2">Made with 🤖 + ☕ for trade pros everywhere</p>
        </div>
      </div>
    </footer>
  )
}
