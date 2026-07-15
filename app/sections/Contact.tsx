'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


export default function Contact() {
  const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [city, setCity] = useState('');
const [course, setCourse] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const message = `
  I want to learn driving. Here are my details:
Name: ${name}
Phone: ${phone}
City: ${city}
Course: ${course}
`;

  const whatsappUrl =
    `https://wa.me/919251504685?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Book Your <span className="text-gradient">Driving Class Today</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Get in touch with us to start your driving journey. We are here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Business Info Card */}
              <div className="glass rounded-2xl p-6 border border-slate-200 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Vijayvergiya Motor Driving School
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Address</p>
                      <p className="text-slate-600 text-sm">
                        15B, Gandhi Vihar Rd, Manyawas, Mansarovar, Jaipur, Rajasthan 302021
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <a href="tel:09982299987" className="text-slate-600 text-sm hover:text-blue-600 transition-colors">
                        09251504685
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Timing</p>
                      <p className="text-slate-600 text-sm">Flexible timings available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
               <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d75.75!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA3NcKwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="New Bombay Motor Driving School Location"
/>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919251504685"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow cursor-pointer flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Chat on WhatsApp</p>
                    <p className="text-green-100 text-sm">Quick response guaranteed</p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Book Your Free Demo Class
              </h3>
            <form onSubmit={handleSubmit} className="space-y-5">

  <div>
    <Label>Full Name</Label>
    <Input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your full name"
      required
    />
  </div>

  <div>
    <Label>Phone Number</Label>
    <Input
      type="tel"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      placeholder="Enter your phone number"
      required
    />
  </div>

  <div>
    <Label>City</Label>
    <Input
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter your city"
      required
    />
  </div>

  <div>
    <Label>Course Interested In</Label>

    <Select onValueChange={setCourse}>
      <SelectTrigger>
        <SelectValue placeholder="Select Course" />
      </SelectTrigger>

      <SelectContent>

        <SelectItem value="Alto LXI = 3000 ₹">
          Alto LXI = 3000 ₹
        </SelectItem>

        <SelectItem value="Wagon R = 3000 ₹">
          Wagon R = 3000 ₹
        </SelectItem>

        <SelectItem value="Swift Dezire = 3500 ₹">
          Swift Dezire = 3500 ₹
        </SelectItem>

        <SelectItem value="Hyundai Aura = 3500 ₹">
          Hyundai Aura = 3500 ₹
        </SelectItem>

      </SelectContent>
    </Select>
  </div>

  <Button
    type="submit"
    className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
  >
    Submit on WhatsApp
  </Button>

</form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
