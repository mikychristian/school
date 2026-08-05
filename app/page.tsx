'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Star, Play } from 'lucide-react';

const VIEW_OPTIONS = { once: true, amount: 0 };

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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 border-b border-slate-200/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <a href="#accueil" className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-3xl shadow-lg shadow-slate-900/10">
            <Image src={IMAGES.logo} alt="Logo IFP-MTC AFES" fill className="object-cover" sizes="56px" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-600">IFP-MTC AFES</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Formation professionnelle</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#accueil" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:text-slate-900">Accueil</a>
          <a href="#apropos" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:text-slate-900">À propos</a>
          <a href="#filiere" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:text-slate-900">Filières</a>
          <a href="#galerie" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:text-slate-900">Galerie</a>
          <a href="#contact" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:text-slate-900">Contact</a>
          <a href="https://wa.me/237675311138" className="inline-flex items-center rounded-full bg-[#F5B800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e0a500]">
            WhatsApp
          </a>
        </div>

        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)} aria-label="Menu mobile">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200/70 bg-white/95 px-4 pb-6 md:hidden">
          <div className="flex flex-col gap-3 py-4">
            {[
              { href: '#accueil', label: 'Accueil' },
              { href: '#apropos', label: 'À propos' },
              { href: '#filiere', label: 'Filières' },
              { href: '#galerie', label: 'Galerie' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#0B1F3A] text-white">
      <div className="absolute inset-0">
        <Image src={IMAGES.hero} alt="Campus IFP-MTC AFES" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-[#0B1F3A]/75" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[660px] max-w-7xl flex-col justify-center px-6 py-20 sm:min-h-[760px] sm:px-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#F5B800] bg-[#F5B800]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#F5B800]">
            Institut professionnel IFP-MTC AFES
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-6xl">
            L’excellence professionnelle, sculptée au cœur de Douala
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
            Formation technique, digitale et hôtelière avec un parcours pratique aligné sur les besoins réels du marché camerounais.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#filiere" className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-[#F5B800] px-8 py-4 text-base font-semibold text-[#0B1F3A] shadow-lg shadow-[#0B1F3A]/20 transition hover:bg-[#e0a200]">
              Nos Filières
            </a>
            <a href="#contact" className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-[#F5B800] bg-transparent px-8 py-4 text-base font-semibold text-[#F5B800] transition hover:bg-white/10">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '500+', label: 'Étudiants formés' },
    { value: '18', label: 'Filières actives' },
    { value: '95%', label: 'Insertion professionnelle' },
  ];

  return (
    <section className="bg-[#102A4C] py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
              <p className="text-4xl font-extrabold tracking-tight text-[#F5B800]">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.26em] text-slate-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_OPTIONS);

  return (
    <section id="apropos" ref={ref} className="relative overflow-hidden bg-[#0B1F3A] text-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,184,0,0.14),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-[0_40px_120px_-55px_rgba(0,0,0,0.7)]"
          >
            <div className="relative h-80 sm:h-[420px] w-full">
              <Image src={IMAGES.classe} alt="Salle de classe IFP-MTC AFES" fill className="object-cover" sizes="(max-width: 640px) 100vw, 640px" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-[#F5B800]">Notre promesse d’excellence</p>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Un institut <span className="text-[#F5B800]">à taille humaine</span> pour une insertion professionnelle rapide.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-200">
              IFP-MTC AFES prépare chaque apprenant aux métiers techniques, au digital et à l’hôtellerie en combinant <span className="font-semibold">cours pratiques</span>, stages en entreprise et pédagogie de terrain.
            </p>

            <div className="space-y-4">
              <p className="text-base leading-8 text-slate-200">
                Avec un accompagnement personnalisé, nous donnons aux jeunes les clés pour devenir des professionnels <span className="font-semibold">opérationnels</span> et recherchés sur le marché local.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Parcours certifiés', 'Encadrement expert', 'Ateliers réels', 'Insertion prioritaire'].map((item) => (
                  <span key={item} className="inline-flex rounded-full border border-[#F5B800]/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#F5B800] bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#F5B800] transition hover:bg-white/10">
              En savoir plus
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Filiere() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_OPTIONS);

  const techniqueFormations = [
    { title: 'Froid et Climatisation', image: '/formations/froid-et-climatisation.jpeg', label: 'Technique' },
    { title: 'Électricité Bâtiment & Industrielle', image: '/formations/electricite-batiments.jpeg', label: 'Technique' },
    { title: 'Plomberie et Installation Sanitaire', image: '/formations/plomberie-sanitaire.jpeg', label: 'Technique' },
    { title: 'Fabrication Mécanique', image: '/formations/fabrication-mecanique.jpeg', label: 'Technique' },
    { title: 'Chaudronnerie', image: '/formations/chaudronnerie.jpeg', label: 'Technique' },
    { title: 'Géomètre Topographe', image: '/formations/geometre-topographe.jpeg', label: 'Technique' },
    { title: 'Maintenance Informatique', image: '/formations/maintenance-informatique.jpeg', label: 'Technique' },
    { title: 'Énergie Solaire', image: '/formations/energie-solaire.jpeg', label: 'Technique' },
    { title: 'Infographie 2D & 3D', image: '/formations/infographie-2d-3d.jpeg', label: 'Technique' },
    { title: 'Marketing Digital', image: '/formations/marketing-digital.jpeg', label: 'Technique' },
    { title: 'Secrétariat Bureautique', image: '/formations/secretariat-bureautique.jpeg', label: 'Technique' },
    { title: 'Programmation', image: '/formations/programmation.jpeg', label: 'Technique' },
    { title: 'Dessin Assisté par Ordinateur (DAO)', image: '/formations/dessin-assiste-par-ordinateur.jpeg', label: 'Technique' },
  ];

  const hotellerieFormations = [
    { title: 'Cuisine - Bar - Restauration', image: '/formations/cuisine-bar.jpeg', label: 'Hôtellerie' },
    { title: 'Boulangerie Pâtisserie', image: '/formations/boulangerie-patisserie.jpeg', label: 'Hôtellerie' },
    { title: 'Hébergement', image: '/formations/hebergement.jpeg', label: 'Hôtellerie' },
    { title: 'Service Traiteur', image: '/formations/service-traiteur.jpeg', label: 'Hôtellerie' },
    { title: 'Cuisine Internationale', image: '/formations/cuisine-internationale.jpeg', label: 'Hôtellerie' },
  ];

  return (
    <section id="filiere" ref={ref} className="relative overflow-hidden bg-[#F4F6F8] py-24 text-[#0B1F3A]">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B1F3A]/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.32em] text-[#F5B800]">Nos filières</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1F3A] sm:text-5xl">
            Parcours métiers structurés pour l’emploi.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Des programmes robustes et tournés vers les besoins réels des entreprises, déployés en filières techniques et hôtelières.
          </p>
        </div>

        <div className="grid gap-12">
          {[
            { title: 'Filières Techniques', subtitle: 'Programmes concrets pour les métiers du bâtiment, de l’énergie et du digital.', formations: techniqueFormations, accent: 'bg-[#0B1F3A]' },
            { title: 'Filières Hôtelières', subtitle: 'Formations en cuisine, service et accueil pour des carrières dans l’hôtellerie.', formations: hotellerieFormations, accent: 'bg-[#1E8449]' },
          ].map((section) => (
            <div key={section.title} className="rounded-[2.5rem] bg-white shadow-[0_30px_90px_-60px_rgba(0,0,0,0.25)] p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-3xl font-semibold text-[#0B1F3A]">{section.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{section.subtitle}</p>
                </div>
                <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-white ${section.accent}`}>
                  {section.formations.length} programmes
                </span>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {section.formations.map((formation, index) => (
                  <motion.div
                    key={formation.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ delay: index * 0.04, duration: 0.5 }}
                    className={`group overflow-hidden rounded-[2rem] border ${index % 2 === 0 ? 'border-slate-200 bg-white' : 'border-transparent bg-[#EAF3FF]'} shadow-[0_20px_60px_-35px_rgba(15,23,42,0.2)]`}
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                      <Image src={formation.image} alt={formation.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 320px" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 inline-flex rounded-full bg-[#F5B800] px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#0B1F3A] shadow-lg shadow-[#0B1F3A]/20">
                        {formation.label}
                      </span>
                    </div>
                    <div className="space-y-4 p-6">
                      <h4 className="text-xl font-semibold text-[#0B1F3A]">{formation.title}</h4>
                      <p className="text-sm leading-6 text-slate-600">Formation pratique, encadrement expert et insertion rapide sur le terrain.</p>
                      <button className="inline-flex items-center rounded-full bg-[#F5B800] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e0a200]">
                        En savoir plus
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_OPTIONS);

  return (
    <section ref={ref} className="py-24 bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-[#F5B800]">Innovation pédagogique</p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">Une pédagogie dynamique et adaptée</h2>
            <p className="text-lg text-slate-200">Chaque programme combine ateliers pratiques, immersions professionnelles et technologies actuelles pour garantir une entrée rapide sur le marché du travail.</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Ateliers en conditions réelles',
                'Accompagnement vers l’insertion',
                'Partenariats professionnels',
                'Référentiels actualisés',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
                  <p className="font-semibold text-white">{item}</p>
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
            <div className="relative h-96 w-full">
              <Image src={IMAGES.hero} alt="Pédagogie IFP-MTC AFES" fill className="object-cover" sizes="(max-width: 640px) 100vw, 640px" />
            </div>
            <div className="absolute left-6 bottom-6 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md text-white max-w-xs">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F5B800]">Focus réussite</p>
              <h3 className="mt-3 text-2xl font-bold">Programme intensif</h3>
              <p className="mt-3 text-slate-200">Préparez-vous à travailler avec des experts et à être opérationnel dès la fin de la formation.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Galerie() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_OPTIONS);

  const images = [
    { img: IMAGES.classe, title: 'Classe Interactive' },
    { img: IMAGES.cuisine, title: 'Laboratoire Culinaire' },
    { img: IMAGES.technicien, title: 'Atelier Technique' },
    { img: IMAGES.mercredi, title: 'Événement Étudiant' },
    { img: IMAGES.galerie1, title: 'Formation en Groupe' },
    { img: IMAGES.galerie2, title: 'Projets collaboratifs' },
  ];

  return (
    <section id="galerie" ref={ref} className="py-24 bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#F5B800] mb-4">Ambiance campus</p>
          <h2 className="text-5xl font-bold mb-4">Galerie des formations</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">Découvrez les espaces, ateliers et moments forts qui caractérisent notre institut.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.6)]"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-6 left-6">
                <p className="text-base font-semibold text-white">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#F5B800] px-8 py-4 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e0a200]">
            Voir plus
          </a>
        </div>
      </div>
    </section>
  );
}

function Temoignages() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_OPTIONS);

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
    <section id="temoignages" ref={ref} className="py-24 bg-[#F4F6F8] text-[#0B1F3A]">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#F5B800] mb-4">Avis de nos élèves</p>
          <h2 className="text-5xl font-bold mb-4">Ils parlent de nous</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">Des retours sincères qui montrent l’impact réel de nos formations sur l’employabilité.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.18)]"
            >
              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-[#F5B800] text-[#F5B800]" />
                ))}
              </div>
              <p className="text-lg leading-8 text-slate-700 italic mb-8">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-[#0B1F3A] text-lg">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Actualites() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_OPTIONS);
  const [activePage, setActivePage] = useState(1);

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

  const pageSize = 2;
  const totalPages = Math.ceil(news.length / pageSize);
  const currentItems = news.slice((activePage - 1) * pageSize, activePage * pageSize);

  return (
    <section ref={ref} className="py-24 bg-white text-[#0B1F3A]">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-[#F5B800] mb-4">Actualités</p>
          <h2 className="text-4xl font-bold mb-4">Dernières nouvelles</h2>
          <p className="text-xl text-slate-600">Restez informé de nos événements, offres et dates importantes.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {currentItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[2rem] border border-slate-200 bg-[#F8FBFF] p-8 shadow-sm"
            >
              <p className="text-3xl mb-4">{item.icon}</p>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#0B1F3A] mb-3">{item.date}</p>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 items-center justify-between rounded-[2rem] border border-slate-200 bg-[#F4F6F8] p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-11 min-w-[110px] items-center justify-center rounded-full border border-[#0B1F3A]/10 bg-white px-4 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#F5F5F5] disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
              disabled={activePage === 1}
            >
              Précédent
            </button>
            <button
              className="inline-flex h-11 min-w-[110px] items-center justify-center rounded-full border border-[#0B1F3A]/10 bg-white px-4 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#F5F5F5] disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
              disabled={activePage === totalPages}
            >
              Suivant
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setActivePage(index + 1)}
                className={`h-11 min-w-[44px] rounded-full px-4 text-sm font-semibold transition ${activePage === index + 1 ? 'bg-[#F5B800] text-[#0B1F3A]' : 'bg-white text-[#0B1F3A] ring-1 ring-slate-200'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_OPTIONS);

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#102A4C] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#F5B800] mb-4">Contactez notre équipe</p>
          <h2 className="text-4xl font-bold mb-4">Une question ? Inscrivez-vous aujourd’hui</h2>
          <p className="text-lg text-slate-300">Nous sommes disponibles pour vous accompagner dans votre projet de formation professionnelle.</p>
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
              bg: 'bg-[#F5B800]/10',
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

function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_OPTIONS);

  return (
    <section ref={ref} className="py-24 bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#F5B800] mb-4">Localisation</p>
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
              <p className="text-sm uppercase tracking-[0.28em] text-[#F5B800]">Adresse</p>
              <h3 className="text-2xl font-semibold text-white mt-4">Bonabo Garage</h3>
              <p className="mt-4 text-slate-300">Sur le prolongement du Boulevard de la République, Douala. Un accès facile pour les étudiants et les visiteurs.</p>
            </div>
            <div className="rounded-[2rem] bg-[#102A4C] p-8 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)]">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#F5B800]">Téléphone</p>
                  <p className="mt-2 text-white font-semibold">+237 675 311 138</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#F5B800]">Email</p>
                  <p className="mt-2 text-white font-semibold">institutifpmtc@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#F5B800]">WhatsApp</p>
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

function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-lg mb-4">IFP-MTC AFES</h3>
            <p className="text-slate-300">Institut de formation professionnelle à Douala. Un parcours pratique pour préparer l’emploi.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navigation rapide</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#accueil" className="hover:text-white transition">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-white transition">À propos</a></li>
              <li><a href="#filiere" className="hover:text-white transition">Filières</a></li>
              <li><a href="#galerie" className="hover:text-white transition">Galerie</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-slate-300">+237 675 311 138</p>
            <p className="text-slate-300">institutifpmtc@gmail.com</p>
            <p className="text-slate-300">Bonabo garage, Douala</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-slate-400">
          <p>&copy; 2026 IFP-MTC AFES. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Filiere />
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
