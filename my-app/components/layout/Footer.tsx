// components/layout/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">HSDF</h3>
            <p className="text-gray-300 text-sm">
              Help Social Development Foundation has been serving thalassemia children since 2003.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/thalassemia" className="hover:text-primary">About Thalassemia</Link></li>
              <li><Link href="/donate" className="hover:text-primary">Donate</Link></li>
              <li><Link href="/transparency" className="hover:text-primary">Transparency</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <span>0314-2834582, 0310-2581868</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <span>info@hsdf.org.pk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>R-406, Ahsanabad No.5, Karachi</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
              />
              <button type="submit" className="btn-primary text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Help Social Development Foundation. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1 mt-2">
            Made with <Heart size={16} className="shrink-0 text-red-500" /> for thalassemia children
          </p>
        </div>
      </div>
    </footer>
  );
}