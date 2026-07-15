'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Wrench, Clock, Car, Heart } from 'lucide-react';
import Image from 'next/image';

const features = [
  { icon: Award, label: 'Experienced Trainers' },
  { icon: Shield, label: 'Road Safety Education' },
  { icon: Wrench, label: 'Vehicle Maintenance Training' },
  { icon: Clock, label: 'Flexible Schedule' },
  { icon: Car, label: 'Modern Cars' },
  { icon: Heart, label: 'Friendly Environment' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50">
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
                src="/images/services/1.webp"
                alt="Professional driving instructor guiding student"
                width={800}
                height={600}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-8 bg-white rounded-2xl shadow-xl p-5 border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">10+</p>
                  <p className="text-sm text-slate-500">Years of Excellence</p>
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
              About Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Vijayvergiya Motor{' '}
              <span className="text-gradient">Driving School</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We provide professional driving lessons designed for beginners and
              experienced learners. Our goal is to make every student a confident
              and safe driver through practical road training and vehicle
              maintenance education.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
