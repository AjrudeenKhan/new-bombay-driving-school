'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BadgeCheck,
  Clock,
  MapPin,
  Wrench,
  Route,
  Wallet,
  Car,
  UserCheck,
} from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: BadgeCheck,
    title: 'Certified Driving Instructors',
    description: 'Learn from government-certified professional instructors with years of experience.',
    image: '/images/services/beginer.webp',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Choose class timings that suit your schedule - morning, afternoon, or evening.',
    image: '/images/services/timing.webp',
  },
  {
    icon: MapPin,
    title: 'Pickup & Drop Guidance',
    description: 'Convenient pickup and drop service for students within the training area.',
    image: '/images/services/2.webp',
  },
  {
    icon: Wrench,
    title: 'Vehicle Maintenance Knowledge',
    description: 'Learn essential vehicle maintenance skills including engine basics and troubleshooting.',
    image: '/images/services/maintainence.webp',
  },
  {
    icon: Route,
    title: 'Practical Road Experience',
    description: 'Real-world driving practice on highways, city roads, and traffic conditions.',
    image: '/images/services/3.webp',
  },
  {
    icon: Wallet,
    title: 'Affordable Fees',
    description: 'Competitive pricing with no hidden charges. Quality training at the best rates.',
    image: '/images/services/fee.webp',
  },
  {
    icon: Car,
    title: 'Modern Vehicles',
    description: 'Train on well-maintained modern cars with power steering for easy learning.',
    image: '/images/services/driving-course.webp',
  },
  {
    icon: UserCheck,
    title: 'Personalized Training',
    description: 'One-on-one attention with customized training plans based on your skill level.',
    image: '/images/services/m3.webp',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-white">
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
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We go beyond basic driving lessons to ensure you become a confident,
            safe, and responsible driver.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
