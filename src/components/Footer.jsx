import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-6">
      {/* Top section */}
      <div className="container-x grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Brand column — spans both columns on mobile */}
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <img
            src="/images/opeans-logo.png"
            alt="OPEANS Nigeria Limited"
            className="w-36 mb-4"
          />
          <p className="text-sm text-white/80 leading-relaxed mb-5">
            Training People.
            <br />
            Safer Workplaces.
            <br />
            A Better Tomorrow.
          </p>

          {/* Social / quick actions */}
          <div className="flex gap-2">
            <a
              href="tel:+2348033123456"
              aria-label="Call OPEANS"
              className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white hover:text-brand-dark transition"
            >
              <Phone size={15} />
            </a>
            <a
              href="mailto:info@opeansafety.com"
              aria-label="Email OPEANS"
              className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white hover:text-brand-dark transition"
            >
              <Mail size={15} />
            </a>
            <a
              href="https://wa.me/2348033123456"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp OPEANS"
              className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white hover:text-brand-dark transition"
            >
              <MessageCircle size={15} />
            </a>
            <a
              href="https://www.opeansafety.com"
              target="_blank"
              rel="noreferrer"
              aria-label="OPEANS Website"
              className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/80 hover:bg-white hover:text-brand-dark transition"
            >
              <Globe size={15} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <Link to="/about" className="block text-sm text-white/80 my-2 hover:text-white">
            About Us
          </Link>
          <Link to="/training" className="block text-sm text-white/80 my-2 hover:text-white">
            Trainings
          </Link>
          <Link to="/facilities" className="block text-sm text-white/80 my-2 hover:text-white">
            Facilities
          </Link>
          <Link to="/clients" className="block text-sm text-white/80 my-2 hover:text-white">
            Clients
          </Link>
          <Link to="/contact" className="block text-sm text-white/80 my-2 hover:text-white">
            Contact Us
          </Link>
        </div>

        {/* Our Trainings */}
        <div>
          <h4 className="text-sm uppercase tracking-wider mb-4">Our Trainings</h4>
          <Link to="/training/bosiet" className="block text-sm text-white/80 my-2 hover:text-white">
            BOSIET
          </Link>
          <Link to="/training/huet" className="block text-sm text-white/80 my-2 hover:text-white">
            HUET
          </Link>
          <Link to="/training/survival-at-sea" className="block text-sm text-white/80 my-2 hover:text-white">
            Survival at Sea
          </Link>
          <Link to="/training/basic-fire-fighting" className="block text-sm text-white/80 my-2 hover:text-white">
            Fire Fighting
          </Link>
          <Link to="/training/basic-first-aid-cpr" className="block text-sm text-white/80 my-2 hover:text-white">
            First Aid
          </Link>
        </div>

        {/* Contact — spans both columns on mobile */}
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <h4 className="text-sm uppercase tracking-wider mb-4">Contact</h4>

          <p className="flex items-start gap-2 text-sm text-white/80 my-2 leading-relaxed">
            <MapPin size={15} className="shrink-0 mt-1" />
            <span>
              32 Jessy &amp; Jenny Road,
              <br />
              off Odidli Road, Trans-Amadi Industrial Layout,
              <br />
              P.O. Box 2243, Port Harcourt, Rivers State
            </span>
          </p>

          <p className="flex items-center gap-2 text-sm text-white/80 my-2">
            <Phone size={15} className="shrink-0" />
            <a href="tel:+2348033123456" className="hover:text-white transition">
              +234 803 312 3456
            </a>
          </p>

          <p className="flex items-center gap-2 text-sm text-white/80 my-2">
            <Mail size={15} className="shrink-0" />
            <a
              href="mailto:info@opeansafety.com"
              className="hover:text-white transition"
            >
              info@opeansafety.com
            </a>
          </p>

          <p className="flex items-center gap-2 text-sm text-white/80 my-2">
            <Globe size={15} className="shrink-0" />
            <a
              href="https://www.opeansafety.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              www.opeansafety.com
            </a>
          </p>

          <p className="flex items-start gap-2 text-sm text-white/80 my-2 leading-relaxed">
            <Clock size={15} className="shrink-0 mt-1" />
            <span>
              Mon – Fri: 8:00 AM – 5:00 PM
              <br />
              Saturday: By appointment
            </span>
          </p>
        </div>
      </div>


      {/* Bottom bar */}
      <div className="container-x mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:justify-between gap-3 text-[11px] text-white/60">
        <span>© {year} OPEANS Nigeria Limited. All rights reserved.</span>
        <div className="flex flex-wrap gap-4 md:gap-5">
          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition">
            Terms
          </Link>
          <Link to="/training-policy" className="hover:text-white transition">
            Training Policy
          </Link>
          <Link to="/faq" className="hover:text-white transition">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}