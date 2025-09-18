import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="All Dogs Training Co Logo"
              width={150}
              height={75}
              className="h-16 w-auto"
            />
            <p className="text-white/80 leading-relaxed">
              Professional dog training services in Houston and Austin. Locally owned and operated with proven results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-blue-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <div>
                  <div className="text-sm text-white/80">Austin</div>
                  <a href="tel:5126484510" className="text-white hover:text-blue-400 transition-colors">
                    (512) 648-4510
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <div>
                  <div className="text-sm text-white/80">Houston</div>
                  <a href="tel:7139097968" className="text-white hover:text-blue-400 transition-colors">
                    (713) 909-7968
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:info@alldogstrainingco.com"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  info@alldogstrainingco.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-white/80">Houston, TX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-white/80">Austin, TX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-white/80">7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 All Dogs Training Co. All rights reserved. |
            <span className="text-blue-400 font-medium"> Best Dog Training Houston TX</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
