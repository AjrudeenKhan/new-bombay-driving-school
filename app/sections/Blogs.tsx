'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, ArrowRight, User } from 'lucide-react';
import Image from 'next/image';

const blogs = [
  {
    title: 'How to Overcome Driving Anxiety as a Beginner',
    excerpt: 'Feeling nervous behind the wheel is completely normal. Learn proven techniques to build confidence, stay calm, and enjoy your driving journey from day one.',
    image: '/images/services/beginer-anxity.webp',
    author: 'Vijayvergiya Team',
    date: 'June 15, 2025',
    readTime: '5 min read',
    category: 'Beginners',
  },
  {
    title: 'Top 10 Road Safety Tips Every Driver Must Know',
    excerpt: 'Safety comes first on the road. Discover essential tips including defensive driving, maintaining safe distances, and handling emergency situations effectively.',
    image: '/images/services/seat-belt.webp',
    author: 'Vijayvergiya Team',
    date: 'June 10, 2025',
    readTime: '7 min read',
    category: 'Safety',
  },
  {
    title: 'Understanding Your Car: Basic Maintenance Guide',
    excerpt: 'Know your vehicle inside out. From checking oil levels to tyre pressure and battery health, learn the basics that keep your car running smoothly.',
    image: '/images/services/refresher.webp',
    author: 'Vijayvergiya Team',
    date: 'June 5, 2025',
    readTime: '6 min read',
    category: 'Maintenance',
  },
  {
    title: 'Why Manual Transmission Skills Still Matter in 2025',
    excerpt: 'Even with automatic cars everywhere, learning manual transmission gives you better control, understanding of vehicle mechanics, and versatility as a driver.',
    image: '/images/services/2.webp',
    author: 'Vijayvergiya Team',
    date: 'May 28, 2025',
    readTime: '4 min read',
    category: 'Skills',
  },
  {
    title: 'Highway Driving: Mastering Long Distance Travel',
    excerpt: 'Highway driving requires different skills than city roads. Learn about lane discipline, overtaking safely, managing fatigue, and high-speed vehicle control.',
    image: '/images/services/3.webp',
    author: 'Vijayvergiya Team',
    date: 'May 20, 2025',
    readTime: '8 min read',
    category: 'Advanced',
  },
  {
    title: 'Parking Like a Pro: Reverse, Parallel & Tight Spaces',
    excerpt: 'Parking is often the hardest part for new drivers. Get step-by-step guidance on reverse parking, parallel parking, and navigating tight spaces with ease.',
    image: '/images/services/5.webp',
    author: 'Vijayvergiya Team',
    date: 'May 15, 2025',
    readTime: '6 min read',
    category: 'Tips',
  },
];

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blogs" className="py-20 lg:py-28 bg-white">
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
            Our Blog
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Driving Tips & <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Expert advice, safety guides, and driving tips to help you become a better driver.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
  {blog.excerpt}
</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <User className="w-3.5 h-3.5" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 text-xs">
                      <span>{blog.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
