'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, CircleDot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const vehicles = [
  {
    name: 'Alto LXI',
    price: '₹3000',
    features: ['Power Steering', 'Practical Road Training', 'Beginner Friendly'],
    image: '/images/services/alto.webp',
    popular: false,
  },
  {
    name: 'WagonR',
    price: '₹3000',
    features: ['Power Steering', 'Spacious Learning Vehicle', 'Easy Handling'],
    image: '/images/services/wagonr.webp',
    popular: false,
  },
  {
    name: 'Swift Dzire',
    price: '₹3500',
    features: ['Power Steering', 'Sedan Driving Experience', 'Advanced Practice'],
    image: '/images/services/swift.webp',
    popular: true,
  },
  {
    name: 'Hyundai Aura',
    price: '₹3500',
    features: ['Power Steering', 'Premium Training Vehicle', 'Smooth Driving Experience'],
    image: '/images/services/hyundi.webp',
    popular: false,
  },
];

export default function Vehicles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vehicles" className="py-12 lg:py-28 bg-white">
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
            Our Vehicles
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Choose Your <span className="text-gradient">Training Vehicle</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            All vehicles come with power steering for easy learning and comfortable driving experience.
          </p>
        </motion.div>

        {/* Vehicle Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`glass rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${
                vehicle.popular ? 'border-orange-300 ring-2 ring-orange-200' : 'border-slate-100'
              }`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  {vehicle.popular && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-slate-500 text-sm">Course Fee</span>
                    <p className="text-2xl font-bold text-slate-900">{vehicle.price}</p>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {vehicle.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact">
                    <Button
                      variant="outline"
                      className={`w-full ${
                        vehicle.popular
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 border-0'
                          : 'border-blue-200 text-white-600 hover:bg-blue-500'
                      }`}
                    >
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Power Steering Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium">
            <CircleDot className="w-4 h-4" />
            All Vehicles Equipped with Power Steering
          </div>
        </motion.div>
      </div>
    </section>
  );
}
