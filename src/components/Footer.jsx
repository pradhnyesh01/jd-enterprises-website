import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-16 pb-8 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            J.D. Enterprises
          </h3>
          <p className="text-sm mb-2">
            Government Registered Contractor
          </p>
          <p className="text-sm mb-2">
            Established 2017
          </p>
          <p className="text-sm">
            GST No: 27AJTPD1488P1ZD
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-white transition">
                Audio Systems
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                CCTV Surveillance
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                LCD Projectors
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Lighting Systems
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex items-start gap-2">
              <MapPin size={16} />
              <span>
                Pune - 411016
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+919422317544" className="hover:text-white transition">
                +91 94223 17544
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:jcd5175@gmail.com" className="hover:text-white transition">
                jcd5175@gmail.com
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-blue-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} J.D. Enterprises. All Rights Reserved.
      </div>

    </footer>
  );
}
