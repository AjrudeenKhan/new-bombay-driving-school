'use client';

import { motion } from 'framer-motion';
import { Star, Users, Clock, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const trustCounters = [
  { icon: Users, label: '1000+ Students Trained', color: 'bg-blue-500' },
  { icon: Clock, label: '10+ Years Experience', color: 'bg-orange-500' },
  { icon: Award, label: 'Expert Instructors', color: 'bg-green-500' },
  { icon: Calendar, label: 'Flexible Timings', color: 'bg-purple-500' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/refresher.webp"
          alt="Driving instructor teaching student in modern car"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      {/* Animated Car Illustration */}
     

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
            <span className="text-white/90 text-sm font-medium">
              Trusted Driving School in Jaipur
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Learn Driving{' '}
            <span className="text-gradient-orange">with Confidence</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
          >
            Professional car driving classes with experienced instructors, flexible
            timings, practical training, and vehicle maintenance knowledge.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/25 px-8 py-6 text-base font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Demo Class
              </Button>
            </a>
            <a
              href="https://wa.me/919982299987"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-green-600 hover:bg-white/10 hover:text-white px-8 py-6 text-base font-semibold backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.414c-3.165 0-5.737 2.572-5.737 5.737 0 1.013.266 2.005.763 2.879l.804 1.436-1.436-.804A5.737 5.737 0 1017.472 5.968c0-.158-.008-.316-.023-.472A5.74 5.74 0 0011.68 2.968z" />
                </svg>
                WhatsApp Now
              </Button>
            </a>
          </motion.div>

          {/* Trust Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 "
          >
            {trustCounters.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-4 flex items-center gap-3 "
              >
                <div className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-sm font-semibold">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
