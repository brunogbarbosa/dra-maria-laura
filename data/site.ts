export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };
export type Result = { image: string; label: string; alt: string; orientation: 'horizontal' | 'vertical' | 'single'; beforeShare: number; comparisonRatio: number };

export const site = {
  name: 'Maria Laura',
  fullName: 'Maria Laura Nascimento',
  monogram: 'ML',
  headline: 'Seu sorriso. Seus traços. Sua essência.',
  cro: 'CRO 155071',
  bio: 'Sou Maria Laura Nascimento, dentista, com atendimento em Franca, SP. Meu universo reúne odontologia e estética, com um olhar para os detalhes que fazem parte da sua identidade. Vamos conversar sobre o que você procura?',
  education: [] as string[],
  specialties: ['Odontologia', 'Estética'],
  phone: '+55 (16) 99430-6692',
  whatsapp: '5516994306692',
  whatsappUrl: 'https://wa.me/5516994306692?text=Ol%C3%A1%2C%20Dra.%20Maria%20Laura!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.',
  address: 'Atendimento em Franca, SP',
  professionalPhilosophy: 'Sua identidade em cada detalhe.',
  instagram: 'https://www.instagram.com/dra.marialauranasc/',
  instagramHandle: '@dra.marialauranasc',
  philosophy: ['SEUS TRAÇOS.', 'SEU SORRISO.', 'SUA ESSÊNCIA.'],
  images: { hero: '/images/maria-laura-hero.webp', essence: '/images/maria-laura-essencia.webp', about: '/images/maria-laura-sobre.webp', beauty: '/images/maria-laura-experiencia.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [{"image": "/images/resultado-01.jpg", "label": "A delicadeza do sorriso", "alt": "Comparação do sorriso, com o primeiro registro acima e o segundo abaixo.", "orientation": "vertical", "beforeShare": 0.5, "comparisonRatio": 0.8640646029609691}, {"image": "/images/resultado-02.jpg", "label": "Expressão em equilíbrio", "alt": "Comparação da região entre as sobrancelhas, com o primeiro registro acima e o segundo abaixo.", "orientation": "vertical", "beforeShare": 0.5, "comparisonRatio": 0.785625}, {"image": "/images/resultado-03.jpg", "label": "Leveza no olhar", "alt": "Comparação da testa e do olhar, com o primeiro registro acima e o segundo abaixo.", "orientation": "vertical", "beforeShare": 0.5, "comparisonRatio": 0.775625}, {"image": "/images/resultado-04.jpg", "label": "Um sorriso, sua identidade", "alt": "Comparação de dois registros do sorriso dispostos um acima do outro.", "orientation": "vertical", "beforeShare": 0.5, "comparisonRatio": 0.8040075140889167}, {"image": "/images/resultado-05.jpg", "label": "Contornos em detalhe", "alt": "Comparação do perfil dos lábios, com o primeiro registro acima e o segundo abaixo.", "orientation": "vertical", "beforeShare": 0.5, "comparisonRatio": 0.793125}, {"image": "/images/resultado-06.jpg", "label": "Cuidado com a expressão", "alt": "Comparação da região frontal, com o primeiro registro acima e o segundo abaixo.", "orientation": "vertical", "beforeShare": 0.5, "comparisonRatio": 0.789375}] as Result[] },
  seo: { title: 'Dra. Maria Laura | Odontologia e Estética em Franca', description: 'Conheça a Dra. Maria Laura Nascimento. Odontologia e estética em Franca, SP. Veja os registros reais e agende sua avaliação pelo WhatsApp.', url: '' },
};
export const appointmentUrl = site.whatsappUrl;
