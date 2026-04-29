import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Ajay Kannan — Software Engineer',
  description:
    'Ajay Kannan — Software Engineer at PG&E. Building production data platforms, ML pipelines, and generative AI systems.',
  keywords: ['Ajay Kannan', 'Software Engineer', 'Machine Learning Engineer', 'Backend Engineer', 'Generative AI', 'Data Platform'],
  authors: [{ name: 'Ajay Kannan' }],
  openGraph: {
    title: 'Ajay Kannan — Software Engineer',
    description: 'Production data platforms, ML pipelines, generative AI.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0a0908',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="grain-overlay">{children}</body>
    </html>
  );
}
