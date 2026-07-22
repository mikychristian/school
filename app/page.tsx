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
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <a href="#" className="flex items-center gap-4">
            <div className="w-14 h-14 relative rounded-2xl overflow-hidden shadow-md">
              <Image src={IMAGES.logo} alt="Logo" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">IFP-MTC AFES</h1>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Formation professionnelle</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-slate-700 hover:text-slate-900 font-semibold transition">Accueil</a>
            <a href="#filières" className="text-slate-700 hover:text-slate-900 font-semibold transition">Filières</a>
            <a href="#galerie" className="text-slate-700 hover:text-slate-900 font-semibold transition">Galerie</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 font-semibold transition">Contact</a>
            <a href="https://wa.me/237675311138" className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg">
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
        <div className="inline-flex items-center gap-2 mb-4 px-5 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">✨ Rentrée 12 Octobre 2026</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-[-0.04em] text-white">
          Découvrez l'excellence technique et hôtelière
          <span className="block text-orange-300">d'IFP-MTC AFES</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-100/90 mb-8">
          Des programmes premium, une pédagogie immersive et un accompagnement vers l'emploi durable pour chaque étudiant.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center">
          <a href="#filières" className="inline-flex items-center justify-center px-10 py-4 bg-orange-500 text-white font-bold rounded-full shadow-xl hover:bg-orange-600 transition transform hover:-translate-y-0.5">
            Voir les formations
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-slate-900 font-semibold rounded-full shadow-lg hover:bg-slate-100 transition">
            Contactez-nous
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto text-center">
          <div className="rounded-[2rem] bg-white/10 border border-white/20 p-7 shadow-2xl backdrop-blur-md">
            <h3 className="text-4xl font-extrabold text-white">500+</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">Étudiants formés</p>
          </div>
          <div className="rounded-[2rem] bg-white/10 border border-white/20 p-7 shadow-2xl backdrop-blur-md">
            <h3 className="text-4xl font-extrabold text-white">18</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">Programmes disponibles</p>
          </div>
          <div className="rounded-[2rem] bg-white/10 border border-white/20 p-7 shadow-2xl backdrop-blur-md">
            <h3 className="text-4xl font-extrabold text-white">95%</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">Insertion professionnelle</p>
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

  const formations = [
    { title: 'Électricité Bâtiments', image: '/formations/electricite-batiments.jpeg', category: 'Technique' },
    { title: 'Froid et Climatisation', image: '/formations/froid-et-climatisation.jpeg', category: 'Technique' },
    { title: 'Tôlerie Industrielle', image: '/formations/tolerie-industrielle.jpeg', category: 'Technique' },
    { title: 'Géomètre Topographe', image: '/formations/geometre-topographe.jpeg', category: 'Technique' },
    { title: 'Énergie Solaire', image: '/formations/energie-solaire.jpeg', category: 'Technique' },
    { title: 'Chaudronnerie', image: '/formations/chaudronnerie.jpeg', category: 'Technique' },
    { title: 'Plomberie Sanitaire', image: '/formations/plomberie-sanitaire.jpeg', category: 'Technique' },
    { title: 'Maintenance Informatique', image: '/formations/maintenance-informatique.jpeg', category: 'Technique' },
    { title: 'Marketing Digital', image: '/formations/marketing-digital.jpeg', category: 'Pro Digital' },
    { title: 'Programmation', image: '/formations/programmation.jpeg', category: 'Pro Digital' },
    { title: 'Infographie 2D/3D', image: '/formations/infographie-2d-3d.jpeg', category: 'Créatif' },
    { title: 'Secrétariat Bureautique', image: '/formations/secretariat-bureautique.jpeg', category: 'Bureau' },
    { title: 'Cuisine & Bar', image: '/formations/cuisine-bar.jpeg', category: 'Hôtellerie' },
    { title: 'Boulangerie Pâtisserie', image: '/formations/boulangerie-patisserie.jpeg', category: 'Hôtellerie' },
    { title: 'Hébergement', image: '/formations/hebergement.jpeg', category: 'Hôtellerie' },
    { title: 'Service Traiteur', image: '/formations/service-traiteur.jpeg', category: 'Hôtellerie' },
    { title: 'Cuisine Internationale', image: '/formations/cuisine-internationale.jpeg', category: 'Hôtellerie' },
    { title: 'Soudure Industrielle', image: '/technicien.jpeg', category: 'Technique' },
  ];

  return (
    <section id="filières" ref={ref} className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300 mb-4">Programme d'excellence</p>
          <h2 className="text-5xl font-bold mb-4">Nos formations spécialisées</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">Des parcours métiers conçus pour former rapidement des professionnels opérationnels, avec des images et expériences adaptées à chaque filière.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {formations.map((formation, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:shadow-[0_35px_90px_-35px_rgba(15,23,42,0.85)]"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image src={formation.image} alt={formation.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute left-5 bottom-5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm border border-white/15">
                  {formation.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{formation.title}</h3>
                <p className="text-slate-400">6 à 12 mois d’accompagnement intensif avec projets réels, stages et insertion.</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.2em] text-orange-300">Niveau pratique</span>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs text-slate-200">Programme 2026</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Innovation Section
function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-orange-500">Innovation pédagogique</p>
            <h2 className="text-4xl font-bold text-slate-900">Une pédagogie dynamique et adaptée</h2>
            <p className="text-lg text-slate-600">Chaque programme combine ateliers pratiques, immersions professionnelles et technologies actuelles pour garantir une entrée rapide sur le marché du travail.</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Ateliers en conditions réelles',
                'Accompagnement vers l’insertion',
                'Partenariats professionnels',
                'Référentiels actualisés',
              ].map((item, index) => (
                <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-[0_45px_120px_-45px_rgba(15,23,42,0.75)]"
          >
            <Image src={IMAGES.hero} alt="Innovation" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-orange-500/20" />
            <div className="absolute left-8 bottom-8 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md text-white max-w-xs">
              <p className="text-xs uppercase tracking-[0.3em] text-orange-300">Focus réussite</p>
              <h3 className="mt-3 text-2xl font-bold">Programme intensif</h3>
              <p className="mt-3 text-slate-200">Préparez-vous à travailler avec des experts et à être opérationnel dès la fin de la formation.</p>
            </div>
          </motion.div>
        </div>
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
    { img: IMAGES.galerie2, title: 'Projets collaboratifs' },
  ];

  return (
    <section id="galerie" ref={ref} className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-orange-300 mb-4">Ambiance campus</p>
          <h2 className="text-5xl font-bold mb-4">Galerie des formations</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">Découvrez les espaces, ateliers et moments forts qui caractérisent notre institut.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.9)]"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-6 left-6">
                <p className="text-base font-semibold text-white">{item.title}</p>
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
      text: 'Une formation transformante, très structurée et directement liée au marché. Je recommande à tout jeune professionnel.',
      author: 'Moulime Jean',
      role: 'Promo 2024',
      rating: 5,
    },
    {
      text: 'La pédagogie pratique m\'a permis de progresser rapidement et d\'être prêt pour mon premier emploi.',
      author: 'Nadia Koumsinga',
      role: 'Promo 2023',
      rating: 5,
    },
    {
      text: 'Environnement très professionnel, équipes disponibles et formation adaptée aux besoins des entreprises.',
      author: 'Pierre Kamgue',
      role: 'Promo 2024',
      rating: 5,
    },
  ];

  return (
    <section id="temoignages" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500 mb-4">Avis de nos élèves</p>
          <h2 className="text-5xl font-bold mb-4 text-slate-900">Ils parlent de nous</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">Des retours sincères qui montrent l’impact réel de nos formations sur l’employabilité.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[2rem] border border-slate-200/30 bg-slate-950 text-white p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.9)]"
            >
              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg leading-8 text-slate-200 italic mb-8">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
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
    <section id="contact" ref={ref} className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-orange-300 mb-4">Contact officiel</p>
          <h2 className="text-4xl font-bold mb-4 text-white">Entrons en contact</h2>
          <p className="text-lg text-slate-300">Nous répondons rapidement à toutes vos demandes d’inscription et de partenariat.</p>
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

// Map Section
function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-orange-300 mb-4">Localisation</p>
          <h2 className="text-4xl font-bold mb-4">Trouvez-nous sur la carte</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Visitez notre campus à Douala et découvrez l’environnement de formation qui inspire nos étudiants.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-8">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.2831539364335!2d9.71389027595249!3d4.051749397048292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610f4783e9d37d%3A0x63f519c574b4edb5!2sDouala%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1718707536904!5m2!1sfr!2sfr"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-950/95 border border-white/10 p-8 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Adresse principale</p>
              <h3 className="text-2xl font-semibold text-white mt-4">Bonabéri garage, Douala</h3>
              <p className="mt-4 text-slate-300">Notre institut se trouve dans un quartier accessible, proche des axes principaux et facilement desservi par les transports locaux.</p>
            </div>
            <div className="rounded-3xl bg-slate-950/95 border border-white/10 p-8 shadow-2xl grid gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Téléphone</p>
                <p className="mt-2 text-white font-semibold">+237 675 311 138</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Email</p>
                <p className="mt-2 text-white font-semibold">institutifpmtc@gmail.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-orange-300">WhatsApp</p>
                <a href="https://wa.me/237675311138" className="mt-2 inline-flex items-center gap-2 text-white font-semibold underline">Envoyer un message</a>
              </div>
            </div>
          </div>
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
      <MapSection />
      <Footer />
    </main>
  );
}
