'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';

const maintenanceTopics = [
  'Engine Basics',
  'Tyre Maintenance',
  'Battery Care',
  'Coolant Checking',
  'Oil Level Checking',
  'Emergency Handling',
  'Basic Troubleshooting',
];

export default function Maintenance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/services/vechile-traning.webp"
                alt="Car engine inspection and maintenance"
                width={800}
                height={600}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 lg:left-8 bg-white rounded-2xl shadow-xl p-5 border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Every Sunday</p>
                  <p className="text-lg font-bold text-slate-900">10:00 AM - 11:00 AM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Vehicle Maintenance Training
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Learn to Take Care of{' '}
              <span className="text-gradient">Your Vehicle</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our comprehensive maintenance training ensures you not only know how
              to drive but also how to keep your vehicle in top condition. Every
              Sunday, students gather for hands-on maintenance classes.
            </p>

            {/* Topics Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {maintenanceTopics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{topic}</span>
                </motion.div>
              ))}
            </div>

            {/* Schedule Card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">Maintenance Classes Schedule</p>
                  <p className="text-blue-100">Every Sunday, 10:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
