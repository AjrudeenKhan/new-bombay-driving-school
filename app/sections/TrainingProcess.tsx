'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardList, FileCheck, Settings, Route, Wrench, Award } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: ClipboardList,
    title: 'Registration',
    description: 'Sign up for the course and choose your preferred vehicle and timing.',
    image: '/images/services/registration.webp',
  },
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'Submit required documents for verification and course enrollment.',
    image: '/images/services/document.webp',
  },
  {
    icon: Settings,
    title: 'Basic Vehicle Controls',
    description: 'Learn steering, clutch, brake, gear, and accelerator controls.',
    image: '/images/services/m3.webp',
  },
  {
    icon: Route,
    title: 'Road Driving Practice',
    description: 'Practice on actual roads with increasing difficulty and traffic exposure.',
    image: '/images/services/3.webp',
  },
  {
    icon: Wrench,
    title: 'Vehicle Maintenance',
    description: 'Learn engine basics, tyre care, battery maintenance, and troubleshooting.',
    image: '/images/services/maintainence.webp',
  },
  {
    icon: Award,
    title: 'Become a Confident Driver',
    description: 'Graduate with the skills and confidence to drive safely on any road.',
    image: '/images/services/beginer.webp',
  },
];

export default function TrainingProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="training" className="py-20 lg:py-28 bg-slate-50">
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
            Training Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Your Journey to <span className="text-gradient">Becoming a Driver</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A structured step-by-step process designed to build your skills progressively.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-orange-200 to-blue-200 -translate-y-1/2 rounded-full" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    {/* Step Number */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Dot for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 z-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
