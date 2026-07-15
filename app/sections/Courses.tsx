'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Calendar, Clock, Route, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const courseFeatures = [
  { icon: Route, text: '15 Days Driving Classes' },
  { icon: Wrench, text: '6 Days Vehicle Maintenance Classes' },
  { icon: Route, text: '8 KM Daily Driving Practice' },
  { icon: Clock, text: 'Customer Preferred Timing' },
  { icon: Calendar, text: 'Sunday Maintenance Class (10 AM - 11 AM)' },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="courses" className="py-20 lg:py-28 bg-slate-50">
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
            Our Courses
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Complete <span className="text-gradient">Driving Course</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A comprehensive 21-day program designed to take you from beginner to
            confident driver.
          </p>
        </motion.div>

        {/* Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                Most Popular
              </div>
            </div>

            <div className="glass rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              {/* Image */}
              <div className="relative h-64 sm:h-80">
                <Image
                  src="/images/services/driving-course.webp"
                  alt="Student practicing driving on open road"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    21 Days Complete Driving Course
                  </h3>
                  <p className="text-white/80">
                    Everything you need to become a confident driver
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {courseFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/50"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-between pt-6 border-t border-slate-200">
                  <div>
                    <span className="text-slate-500 text-sm">Starting from</span>
                    <p className="text-3xl font-bold text-slate-900">₹3,000</p>
                  </div>
                  <a href="#contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl shadow-blue-500/25 px-8"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Free Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
