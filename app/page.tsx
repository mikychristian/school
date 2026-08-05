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
    
    <nav className="backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
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
    <section id="accueil" className="relative overflow-hidden">
      <Image src={IMAGES.hero} alt="Hero" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-6 py-24 sm:min-h-screen sm:px-10"
      >
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            Institut professionnel IFP-MTC AFES
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-6xl">
            L’excellence professionnelle, sculptée au cœur de Douala
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-100 sm:text-xl">
            Formation technique, digitale et hôtelière avec un design de parcours inspiré par les meilleurs codes africains du futur.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#filières" className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600">
              Nos Filières
            </a>
            <a href="#contact" className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20">
              Contactez-nous
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { value: '500+', label: 'Étudiants formés' },
              { value: '18', label: 'Filières actives' },
              { value: '95%', label: 'Insertion professionnelle' },
            ].map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-[0_20px_50px_-30px_rgba(0,0,0,0.45)]">
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-300">{item.label}</p>
              </div>
            ))}
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

  const techniqueFormations = [
    { title: 'Froid et Climatisation', image: '/formations/froid-et-climatisation.jpeg' },
    { title: 'Électricité Bâtiment & Industrielle', image: '/formations/electricite-batiments.jpeg' },
    { title: 'Plomberie et Installation Sanitaire', image: '/formations/plomberie-sanitaire.jpeg' },
    { title: 'Fabrication Mécanique', image: '/formations/fabrication-mecanique.jpeg' },
    { title: 'Chaudronnerie', image: '/formations/chaudronnerie.jpeg' },
    { title: 'Géomètre Topographe', image: '/formations/geometre-topographe.jpeg' },
    { title: 'Maintenance Informatique', image: '/formations/maintenance-informatique.jpeg' },
    { title: 'Énergie Solaire', image: '/formations/energie-solaire.jpeg' },
    { title: 'Infographie 2D & 3D', image: '/formations/infographie-2d-3d.jpeg' },
    { title: 'Marketing Digital', image: '/formations/marketing-digital.jpeg' },
    { title: 'Secrétariat Bureautique', image: '/formations/secretariat-bureautique.jpeg' },
    { title: 'Programmation', image: '/formations/programmation.jpeg' },
    { title: 'Dessin Assisté par Ordinateur (DAO)', image: '/formations/dessin-assiste-par-ordinateur.jpeg' },
  ];

  const hotellerieFormations = [
    { title: 'Cuisine - Bar - Restauration', image: '/formations/cuisine-bar.jpeg' },
    { title: 'Boulangerie Pâtisserie', image: '/formations/boulangerie-patisserie.jpeg' },
    { title: 'Hébergement', image: '/formations/hebergement.jpeg' },
    { title: 'Service Traiteur', image: '/formations/service-traiteur.jpeg' },
    { title: 'Cuisine Internationale', image: '/formations/cuisine-internationale.jpeg' },
  ];

  return (
    <section id="filières" ref={ref} className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(13,71,161,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,111,0,0.15),transparent_35%),#070b17] text-white py-24">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#0D47A1]/15 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#FF6F00]/15 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0D47A1]/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#FF6F00] mb-4">Nos filières</p>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Formations professionnelles</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Apprenez avec des parcours métiers conçus pour les besoins du Cameroun, entre pratique et insertion rapide.
          </p>
        </motion.div>

        <div className="grid gap-12">
          <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-8 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Filières Techniques</h3>
                <p className="mt-2 max-w-xl text-slate-300">Des formations techniques solides pour les métiers du bâtiment, de l'industrie, de l'énergie et du digital.</p>
              </div>
              <span className="inline-flex rounded-full bg-[#FF6F00] px-4 py-2 text-sm font-semibold text-white">13 programmes</span>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {techniqueFormations.map((formation, i) => (
                <motion.div
                  key={formation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)]"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image src={formation.image} alt={formation.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-orange-500/95 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-lg">
                      Technique
                    </div>
                  </div>
                  <div className="space-y-4 p-6 bg-slate-950/95">
                    <h4 className="text-lg font-semibold text-white">{formation.title}</h4>
                    <p className="text-sm leading-6 text-slate-400">Formation pratique, encadrement expert et insertion rapide sur le terrain.</p>
                    <button className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                      En savoir plus
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Filières Hôtelières</h3>
                <p className="mt-2 max-w-xl text-slate-600">Des formations en cuisine, pâtisserie, hébergement et service traiteur pour des carrières d’excellence.</p>
              </div>
              <span className="inline-flex rounded-full bg-[#0D47A1] px-4 py-2 text-sm font-semibold text-white">5 programmes</span>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {hotellerieFormations.map((formation, i) => (
                <motion.div
                  key={formation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)]"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image src={formation.image} alt={formation.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-[#0D47A1]/95 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-lg">
                      Hôtellerie
                    </div>
                  </div>
                  <div className="space-y-4 p-6 bg-slate-950/95">
                    <h4 className="text-lg font-semibold text-white">{formation.title}</h4>
                    <p className="text-sm leading-6 text-slate-400">Une formation moderne pour les métiers de cuisine, service et accueil à haute exigence.</p>
                    <button className="inline-flex items-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                      En savoir plus
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
    <section id="contact" ref={ref} className="py-20 bg-[#0D47A1] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#FF6F00] mb-4">Contactez notre équipe</p>
          <h2 className="text-4xl font-bold mb-4">Une question ? Inscrivez-vous aujourd’hui</h2>
          <p className="text-lg text-slate-200">Nous sommes disponibles pour vous accompagner dans votre projet de formation professionnelle.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Phone size={28} className="text-white" />,
              title: 'Téléphone',
              lines: ['+237 675 311 138', '+237 641 224 718'],
              bg: 'bg-white/10',
            },
            {
              icon: <Mail size={28} className="text-white" />,
              title: 'Email',
              lines: ['institutifpmtc@gmail.com', 'info@ifp-mtc.cm'],
              bg: 'bg-[#FF6F00]/10',
            },
            {
              icon: <MapPin size={28} className="text-white" />,
              title: 'Localisation',
              lines: ['Bonabo garage', 'Douala, Cameroun'],
              bg: 'bg-white/10',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)]"
            >
              <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-slate-200">{line}</p>
              ))}
            </motion.div>
          ))}
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
    <section ref={ref} className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#FF6F00] mb-4">Localisation</p>
          <h2 className="text-4xl font-bold mb-4">Bonabéri Garage, Douala</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Retrouvez-nous facilement grâce à cette carte et venez visiter notre institut de formation.</p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_40px_120px_-55px_rgba(0,0,0,0.7)]">
            <iframe
              src="https://maps.google.com/maps?q=Bonabo%20Garage%20Douala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white/5 border border-white/10 p-8 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)]">
              <p className="text-sm uppercase tracking-[0.28em] text-[#FF6F00]">Adresse</p>
              <h3 className="text-2xl font-semibold text-white mt-4">Bonabo Garage</h3>
              <p className="mt-4 text-slate-300">Sur le prolongement du Boulevard de la République, Douala. Un accès facile pour les étudiants et les visiteurs.</p>
            </div>
            <div className="rounded-[2rem] bg-[#0D47A1] p-8 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)]">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#FF6F00]">Téléphone</p>
                  <p className="mt-2 text-white font-semibold">+237 675 311 138</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#FF6F00]">Email</p>
                  <p className="mt-2 text-white font-semibold">institutifpmtc@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#FF6F00]">WhatsApp</p>
                  <a href="https://wa.me/237675311138" className="mt-2 inline-flex items-center gap-2 text-white font-semibold underline">Envoyer un message</a>
                </div>
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
    <footer className="bg-slate-950 text-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-lg mb-4">IFP-MTC AFES</h3>
            <p className="text-slate-400">Institut de formation professionnelle à Douala. Un parcours pratique pour préparer l’emploi.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navigation rapide</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#accueil" className="hover:text-white transition">Accueil</a></li>
              <li><a href="#filières" className="hover:text-white transition">Filières</a></li>
              <li><a href="#galerie" className="hover:text-white transition">Galerie</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-slate-400">+237 675 311 138</p>
            <p className="text-slate-400">institutifpmtc@gmail.com</p>
            <p className="text-slate-400">Bonabo garage, Douala</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-slate-500">
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
