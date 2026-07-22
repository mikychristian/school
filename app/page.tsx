'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Star, Play } from 'lucide-react';

// Images
const IMAGES = {
  logo: '/logo.jpeg',
  hero: '/hero.jpeg',
  classe: '/classe.jpeg',
  cuisine: '/cuisine.jpeg',
  technicien: '/technicien.jpeg',
  mercredi: '/mercredi.jpeg',
  galerie1: '/galerie1.jpeg',
  galerie2: '/galerie2.jpeg',
  galerie3: '/galerie3.jpeg',
  galerie4: '/galerie 4.jpeg',
  galerie5: '/galerie 5.jpeg',
};

// Navbar
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <Image src={IMAGES.logo} alt="Logo" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-blue-600">IFP-MTC AFES</h1>
              <p className="text-xs text-gray-500">Formation Professionnelle</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</a>
            <a href="#filières" className="text-gray-700 hover:text-blue-600 font-medium">Filières</a>
            <a href="#galerie" className="text-gray-700 hover:text-blue-600 font-medium">Galerie</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <a href="https://wa.me/237675311138" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
              WhatsApp
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#accueil" className="block text-gray-700 hover:text-blue-600 py-2">Accueil</a>
            <a href="#filières" className="block text-gray-700 hover:text-blue-600 py-2">Filières</a>
            <a href="#galerie" className="block text-gray-700 hover:text-blue-600 py-2">Galerie</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image src={IMAGES.hero} alt="Hero" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white max-w-3xl px-4"
      >
        <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40">
          <span className="text-sm font-semibold">✨ Rentrée 12 Octobre 2026</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Formez-vous aux métiers d'avenir avec
          <span className="text-orange-400"> IFP-MTC AFES</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 mb-8">
          Une institution professionnelle qui transforme les talents en savoir-faire concrets, opérationnels et recherchés par les entreprises.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="#filières" className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition transform hover:scale-105">
            Découvrir nos Filières
          </a>
          <a href="#temoignages" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Parcourir les Témoignages
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center">
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-sm text-gray-200">Étudiants Formés</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">18</h3>
            <p className="text-sm text-gray-200">Filières</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="text-sm text-gray-200">Insertion Pro</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// About Section
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={IMAGES.classe} alt="About" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">À Propos de l'Institut</h2>
            <p className="text-lg text-gray-600 mb-4">
              IFP-MTC AFES est un institut de formation professionnelle spécialisé dans la formation aux métiers techniques et culinaires.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Notre mission est de transformer les talents en professionnels opérationnels et recherchés par les entreprises, offrant une formation pratique de qualité supérieure.
            </p>
            <ul className="space-y-3">
              {['Formation pratique et innovante', 'Formateurs expérimentés', 'Insertion professionnelle garantie', 'Certifications reconnues'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <ChevronRight className="text-orange-500" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Filières Section
function Filières() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const formations = {
    techniques: [
      'Électricité Bâtiments',
      'Froid et Climatisation',
      'Tôlerie Industrielle',
      'Géomètre Topographe',
      'Énergie Solaire',
      'Chaudronnerie',
      'Plomberie Sanitaire',
      'Maintenance Informatique',
      'Marketing Digital',
      'Programmation',
      'Infographie 2D/3D',
      'Secrétariat Bureautique',
    ],
    hoteliers: [
      'Cuisine & Bar',
      'Boulangerie Pâtisserie',
      'Hébergement',
      'Service Traiteur',
      'Cuisine Internationale',
    ],
  };

  return (
    <section id="filières" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos Filières de Formation</h2>
          <p className="text-xl text-gray-600">Découvrez nos 18 formations professionnelles</p>
        </motion.div>

        {/* Filières Techniques */}
        <div className="mb-16">
          <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
            <h3 className="text-3xl font-bold mb-2">🏭 FILIÈRES TECHNIQUES</h3>
            <p className="text-blue-100">13 formations pour maîtriser les métiers techniques</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formations.techniques.map((formation, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-300 hover:shadow-lg hover:border-blue-600 transition cursor-pointer group"
              >
                <p className="text-2xl mb-2">⚙️</p>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition">{formation}</h4>
                <p className="text-sm text-gray-600 mt-2">6-12 mois</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filières Hôtelières */}
        <div>
          <div className="bg-orange-500 text-white p-6 rounded-lg mb-8">
            <h3 className="text-3xl font-bold mb-2">🍽️ FILIÈRES HÔTELIÈRES</h3>
            <p className="text-orange-100">5 formations pour l'hôtellerie et la restauration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {formations.hoteliers.map((formation, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-300 hover:shadow-lg hover:border-orange-600 transition cursor-pointer group"
              >
                <p className="text-2xl mb-2">🍳</p>
                <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition">{formation}</h4>
                <p className="text-sm text-gray-600 mt-2">6-12 mois</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Vidéo Section
function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Découvrez Notre Institut</h2>
          <p className="text-xl text-gray-600">Regardez la présentation de l'IFP-MTC AFES</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl group cursor-pointer"
        >
          <Image src={IMAGES.hero} alt="Video" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex items-center justify-center">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition transform">
              <Play size={40} className="text-white ml-1" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Galerie Section
function Galerie() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    { img: IMAGES.classe, title: 'Classe Interactive' },
    { img: IMAGES.cuisine, title: 'Laboratoire Culinaire' },
    { img: IMAGES.technicien, title: 'Atelier Technique' },
    { img: IMAGES.mercredi, title: 'Événement Étudiant' },
    { img: IMAGES.galerie1, title: 'Formation en Groupe' },
  ];

  return (
    <section id="galerie" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre Galerie</h2>
          <p className="text-xl text-gray-600">Découvrez l'ambiance de notre institut</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-lg overflow-hidden shadow-lg group cursor-pointer ${i === 0 || i === 4 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className={`relative ${i === 0 || i === 4 ? 'h-96' : 'h-64'} w-full`}>
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition duration-300" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-center justify-center">
                <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Témoignages Section
function Temoignages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      text: 'Excellent programme! Les formateurs sont expérimentés et j\'ai trouvé un emploi directement après.',
      author: 'Moulime Jean',
      role: 'Promo 2024',
      rating: 5,
    },
    {
      text: 'La formation IFP-MTC m\'a donné les compétences pratiques pour réussir dans mon métier.',
      author: 'Nadia Koumsinga',
      role: 'Promo 2023',
      rating: 5,
    },
    {
      text: 'Institution très professionnelle avec une très bonne insertion professionnelle. Je recommande!',
      author: 'Pierre Kamgue',
      role: 'Promo 2024',
      rating: 5,
    },
  ];

  return (
    <section id="temoignages" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Témoignages Étudiants</h2>
          <p className="text-xl text-gray-600">Ce que disent nos anciens étudiants</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Actualités Section
function Actualites() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const news = [
    {
      date: 'Oct 2026',
      title: 'Rentrée Académique 2026-2027',
      desc: 'Ouverture des inscriptions pour la rentrée de octobre 2026 dans toutes nos filières.',
      icon: '📚',
    },
    {
      date: 'Sep 2026',
      title: 'Journée Portes Ouvertes',
      desc: 'Venez découvrir nos installations et rencontrer notre équipe pédagogique.',
      icon: '🚪',
    },
    {
      date: 'Aug 2026',
      title: 'Réduction de 20% pour les Premiers Inscrits',
      desc: 'Bénéficiez d\'une réduction exclusive sur tous les programmes de formation.',
      icon: '🎁',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Actualités</h2>
          <p className="text-xl text-gray-600">Restez informé de nos dernières nouvelles</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition"
            >
              <p className="text-3xl mb-4">{item.icon}</p>
              <p className="text-sm text-blue-600 font-bold mb-2">{item.date}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Nous Contacter</h2>
          <p className="text-xl text-gray-600">Posez-nous vos questions</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-center"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Téléphone</h3>
            <p className="text-gray-600">+237 675 311 138</p>
            <p className="text-gray-600">+237 641 224 718</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600">institutifpmtc@gmail.com</p>
            <p className="text-gray-600">info@ifp-mtc.cm</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">Localisation</h3>
            <p className="text-gray-600">Douala, Cameroun</p>
            <p className="text-gray-600">Bonabéri garage</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">IFP-MTC AFES</h3>
            <p className="text-gray-400">Institut de formation professionnelle d'excellence</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#accueil" className="hover:text-white transition">Accueil</a></li>
              <li><a href="#filières" className="hover:text-white transition">Filières</a></li>
              <li><a href="#galerie" className="hover:text-white transition">Galerie</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Horaires</h3>
            <p className="text-gray-400">Lun-Ven: 08h-18h</p>
            <p className="text-gray-400">Sam: 09h-16h</p>
            <p className="text-gray-400">Dim: Fermé</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Réseaux</h3>
            <a href="https://wa.me/237675311138" className="text-gray-400 hover:text-white transition">WhatsApp</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 IFP-MTC AFES. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Filières />
      <VideoSection />
      <Galerie />
      <Temoignages />
      <Actualites />
      <Contact />
      <Footer />
    </main>
  );
}
