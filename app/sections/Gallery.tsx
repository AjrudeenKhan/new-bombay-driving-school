'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/services/m1.webp',
    alt: 'Indian Cop learning driving with instructor',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/services/m4.webp',
    alt: 'Female student driving after session',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/services/m2.webp',
    alt: 'Instructor training young man on road',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/services/m3.webp',
    alt: 'Manual tarining with trainer',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/services/m5.webp',
    alt: 'Student success celebration after course',
    span: 'col-span-1 row-span-1',
  },
 
];
   

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
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
            Student Gallery
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Moments from Our <span className="text-gradient">Training</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Glimpses of our students learning and growing into confident drivers.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 1 ? 'row-span-2' : ''
              }`}
              onClick={() => setLightboxImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
