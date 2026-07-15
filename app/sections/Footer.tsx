'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Car } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Courses', href: '#courses' },
  { name: 'Vehicles', href: '#vehicles' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Car Driving Classes',
  'Vehicle Maintenance Training',
  'Road Safety Education',
  'Flexible Timing Classes',
  'Pickup & Drop Service',
  'License Assistance',
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                Ready to Start Driving?
              </h3>
              <p className="text-blue-100">
                Join 1000+ students who learned with us. Book your free demo class today!
              </p>
            </div>
            <div className="flex gap-4">
              <a href="tel:09982299987">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </a>
              <a
                href="https://wa.me/919982299987"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.414c-3.165 0-5.737 2.572-5.737 5.737 0 1.013.266 2.005.763 2.879l.804 1.436-1.436-.804A5.737 5.737 0 1017.472 5.968c0-.158-.008-.316-.023-.472A5.74 5.74 0 0011.68 2.968z" />
                  </svg>
                  WhatsApp
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/services/image.png"
                    alt="Vijayvergiya Motor Driving School Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Vijayvergiya</h4>
                  <p className="text-slate-400 text-sm">Motor Driving School</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Professional driving school in Jaipur with 10+ years of experience.
                Training 1000+ students to become confident and safe drivers.
              </p>
              <a
                href="https://www.instagram.com/vijayvergiyamotordrivingschool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Follow us on Instagram
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-slate-400">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm">
                    B-32, Gopalpura Bypass Rd, near Tilak Public School, Triveni Nagar, Jaipur, Rajasthan 302018
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <a href="tel:09982299987" className="text-slate-400 hover:text-white transition-colors">
                    099822 99987
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.414c-3.165 0-5.737 2.572-5.737 5.737 0 1.013.266 2.005.763 2.879l.804 1.436-1.436-.804A5.737 5.737 0 1017.472 5.968c0-.158-.008-.316-.023-.472A5.74 5.74 0 0011.68 2.968z" />
                  </svg>
                  <a
                    href="https://wa.me/919982299987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    WhatsApp: 099822 99987
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Vijayvergiya Motor Driving School. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-slate-500 text-sm">Best Driving School in Jaipur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
