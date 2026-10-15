import type { Metadata } from 'next';
import { site } from '@/data/site';
import './globals.css';
import './signature.css';
import './campaign.css';
import './essence.css';
import './brand-base.css';
import './identity.css';
const metadataBase = new URL(site.seo.url || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'));
export const metadata: Metadata = {
  metadataBase,
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/maria-laura-og.jpg', width: 1672, height: 941, alt: 'Dra. Maria Laura Nascimento — Odontologia Estética em Franca, CRO 155071' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
    images: ['/images/maria-laura-og.jpg'],
  },
  ...(site.seo.url ? { alternates: { canonical: '/' } } : {}),
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
