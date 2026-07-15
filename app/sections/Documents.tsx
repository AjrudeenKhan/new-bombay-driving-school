'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, FileText, Info } from 'lucide-react';

const documents = [
  {
    icon: Camera,
    title: '1 Passport Size Photograph',
    description: 'Recent passport size photo for student registration and records.',
  },
  {
    icon: FileText,
    title: 'Driving License Copy',
    description: 'A photocopy of your valid driving learner license.',
  },
];

export default function Documents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
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
            Required Documents
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Documents You Need to <span className="text-gradient">Bring</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Keep these documents ready for a smooth enrollment process.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="glass rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <doc.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{doc.title}</h3>
                <p className="text-slate-600">{doc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl p-6 border border-orange-200 flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Important Note</p>
              <p className="text-slate-600">
                Documents can be submitted directly to your driving instructor during the first class.
                No need to visit the office separately.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
