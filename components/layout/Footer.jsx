'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#3d3d3d' }} className="text-neutral-300 border-t border-neutral-600">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-bar rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <span className="text-xl font-bold gradient-text">KASCOOM</span>
              </div>
              <p className="text-sm text-neutral-300">
                Leading provider of professional corporate solutions.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services#fabrication" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    Fabrication & Erection
                  </Link>
                </li>
                <li>
                  <Link href="/services#valve-repairing" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    Valve Repairing
                  </Link>
                </li>
                <li>
                  <Link href="/services#machining" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    Machining Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@kascoom.com" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    info@kascoom.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-sm text-neutral-300 hover:text-accent-yellow transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-600 text-center">
            <p className="text-sm text-neutral-300">
              © 2024 KASCOOM. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}