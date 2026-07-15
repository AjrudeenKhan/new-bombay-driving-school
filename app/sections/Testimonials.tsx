'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  UserCircle2,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    review:
      'Best driving school in Jaipur! The instructors are very patient and professional. I learned to drive confidently within 3 weeks. Highly recommended!',
    vehicle: 'Swift Dzire',
  },
  {
    name: 'Priya Patel',
    rating: 5,
    review:
      'As a beginner, I was nervous about driving. But the friendly environment and step-by-step training made it so easy. The maintenance classes are a great bonus!',
    vehicle: 'Alto LXI',
  },
  {
    name: 'Amit Gupta',
    rating: 5,
    review:
      'Flexible timings were perfect for my work schedule. The instructors are experienced and the vehicles are well-maintained. Worth every rupee!',
    vehicle: 'WagonR',
  },
  {
    name: 'Sneha Verma',
    rating: 5,
    review:
      'I completed my course last month and now drive confidently on highways too. The practical road training really made a difference. Thank you Vijayvergiya!',
    vehicle: 'Hyundai Aura',
  },
  {
    name: 'Vikram Singh',
    rating: 5,
    review:
      'The vehicle maintenance knowledge I gained here is invaluable. Now I can handle minor issues myself. Professional training with personal attention.',
    vehicle: 'Swift Dzire',
  },
  {
    name: 'Meera Joshi',
    rating: 5,
    review:
      'My entire family learned driving here. From my parents to my younger brother, everyone had a great experience. The best driving school near Gopalpura!',
    vehicle: 'Alto LXI',
  },
];

export default function Testimonials() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-white"
    >
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
            Testimonials
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            What Our{' '}
            <span className="text-gradient">
              Students Say
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Real stories from real students who transformed their driving skills with us.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl">
                    <div className="flex flex-col lg:flex-row items-center gap-8">

                      {/* User Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-4 border-blue-100">
                            <UserCircle2 className="w-16 h-16 text-blue-600" />
                          </div>

                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <Quote className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center lg:text-left flex-1">
                        <div className="flex items-center justify-center lg:justify-start gap-1 mb-3">
                          {Array.from({
                            length: testimonial.rating,
                          }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-orange-400 fill-orange-400"
                            />
                          ))}
                        </div>

                        <p className="text-slate-700 text-lg leading-relaxed mb-4">
                          "{testimonial.review}"
                        </p>

                        <div>
                          <p className="font-bold text-slate-900">
                            {testimonial.name}
                          </p>

                          <p className="text-sm text-slate-500">
                            Trained on {testimonial.vehicle}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">

            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentIndex(index)
                  }
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}