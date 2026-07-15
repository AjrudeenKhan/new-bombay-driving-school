import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vijayvergiya Motor Driving School | Best Driving School in Jaipur',
  description:
    'Professional car driving classes with experienced instructors, flexible timings, practical training, and vehicle maintenance knowledge. Trusted driving school in Jaipur with 1000+ students trained.',
  keywords: [
    'Best Driving School in Jaipur',
    'Driving School Near Me',
    'Car Driving Classes Jaipur',
    'Learn Car Driving',
    'Driving Training Institute Jaipur',
    'Driving Classes Near Me',
    'Professional Driving School Jaipur',
    'Driving Course Jaipur',
    'Car Training School Jaipur',
    'Driving Instructor Jaipur',
  ],
  metadataBase: new URL('https://vijayvergiyadrivingschool.com'),
  openGraph: {
    title: 'Vijayvergiya Motor Driving School | Best Driving School in Jaipur',
    description:
      'Professional car driving classes with experienced instructors, flexible timings, practical training, and vehicle maintenance knowledge.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
