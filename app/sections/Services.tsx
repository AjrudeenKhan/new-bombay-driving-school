'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  GraduationCap,
  Trophy,
  Settings,
  Route,
  ParkingCircle,
  ShieldAlert,
  FileText,
  Shield,
  RefreshCw,
  UserRound,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const services = [
  {
    icon: GraduationCap,
    title: 'Beginner Driving Lessons',
    image: '/images/services/beginer.webp',
    description: 'Perfect for those starting their driving journey with patient instructors.',
    skills: [
      'Understanding basic car controls and dashboard',
      'Mastering clutch, brake, and steering coordination',
      'Building confidence for first-time drivers on the road',
    ],
  },
  {
    icon: Trophy,
    title: 'Advanced Driving Training',
    image: '/images/services/advanced.webp',
    description: 'Master advanced techniques and improve your driving skills to the next level.',
    skills: [
      'Real traffic handling and complex road situations',
      'Precise speed control and lane management',
      'Defensive driving strategies for urban and highway conditions',
    ],
  },
  {
    icon: Settings,
    title: 'Manual Car Driving Practice',
    image: '/images/services/2.webp',
    description: 'Learn and practice manual transmission driving with expert guidance.',
    skills: [
      'Mastering clutch balance and smooth gear shifting',
      'Perfecting hill start and smooth acceleration techniques',
      'Building expertise in manual transmission driving',
    ],
  },
  // {
  //   icon: Route,
  //   title: 'Highway Driving Practice',
  //   image: '/images/services/3.webp',
  //   description: 'Build confidence driving on highways with high-speed maneuvers.',
  //   skills: [
  //     'Maintaining lane discipline and proper following distance',
  //     'Safe overtaking rules and lane change protocols',
  //     'High-speed safety and smooth merging techniques',
  //   ],
  // },
  {
    icon: ParkingCircle,
    title: 'Parking Training',
    image: '/images/services/4.webp',
    description: 'Master reverse parking, parallel parking, and tight space maneuvers.',
    skills: [
      'Expert reverse parking and parallel parking techniques',
      'Navigating tight parking spaces with precision',
      'Using mirrors effectively and spatial awareness',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Traffic Rules & Safety',
    image: '/images/services/traffic-rules.webp',
    description: 'Learn essential traffic rules and road safety practices for responsible driving.',
    skills: [
      'Understanding road signs, signals, and traffic rules',
      'Legal driving behavior and RTO compliance',
      'Safe driving practices for all road conditions',
    ],
  },
  // {
  //   icon: FileText,
  //   title: 'License Assistance',
  //   image: '/images/services/license.webp',
  //   description: 'Complete assistance for learner and permanent driving license acquisition.',
  //   skills: [
  //     'Learner license documentation and application support',
  //     'RTO process guidance and test preparation',
  //     'Permanent license acquisition assistance',
  //   ],
  // },
  // {
  //   icon: Shield,
  //   title: 'Defensive Driving Techniques',
  //   image: '/images/services/defensive.webp',
  //   description: 'Learn defensive techniques to anticipate and avoid road hazards.',
  //   skills: [
  //     'Accident prevention through hazard anticipation',
  //     'Emergency handling and quick response techniques',
  //     'Developing safe driving habits for all situations',
  //   ],
  // },
  // {
  //   icon: RefreshCw,
  //   title: 'Refresher Course',
  //   image: '/images/services/refresher.webp',
  //   description: 'Brush up your skills if you haven\'t driven for a while.',
  //   skills: [
  //     'Confidence rebuilding after long driving breaks',
  //     'Practice on modern traffic and road conditions',
  //     'Skill refresh and muscle memory recovery',
  //   ],
  // },
  {
    icon: UserRound,
    title: 'Female Driving Training',
    image: '/images/services/female.webp',
    description: 'Special programs designed specifically for women learners.',
    skills: [
      'Comfortable and patient learning environment',
      'Female instructor options for personalized guidance',
      'Confidence building and empowerment in driving',
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
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
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Driving <span className="text-gradient">Training Programs</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tailored to your needs with expert guidance and practical training.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-2 mb-5">
                    {service.skills.map((skill, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 text-xs leading-relaxed">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://wa.me/919251504685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300"
                    >
                      Inquire Now
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
