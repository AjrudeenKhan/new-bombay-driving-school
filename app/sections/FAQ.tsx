'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How many days is the course?',
    answer: 'Our complete driving course is 21 days long, including 15 days of driving classes and 6 days of vehicle maintenance classes.',
  },
  {
    question: 'How many kilometers do students drive daily?',
    answer: 'Students get 8 KM of daily driving practice on various road types including city roads and highways.',
  },
  {
    question: 'Are maintenance classes included?',
    answer: 'Yes, vehicle maintenance classes are included in the course. They are held every Sunday from 10:00 AM to 11:00 AM.',
  },
  {
    question: 'Can I choose my class timing?',
    answer: 'Yes, we offer flexible timings. You can choose morning, afternoon, or evening slots based on your availability.',
  },
  {
    question: 'Which vehicles are available?',
    answer: 'We offer Alto LXI, WagonR, Swift Dzire, and Hyundai Aura for training. All vehicles are equipped with power steering.',
  },
  {
    question: 'Are all vehicles power steering?',
    answer: 'Yes, all our training vehicles come with power steering to make learning easier and more comfortable for beginners.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Got questions? We have answers. If you cannot find what you are looking for, feel free to contact us.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl border border-slate-200 px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-slate-900 font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
