# Prompt pour GitHub Copilot — Refonte visuelle du site IFP-MTC AFES

*(À copier-coller directement dans Copilot Chat / Copilot Edits dans VS Code)*

---

## Rôle et contexte

Tu es un **architecte logiciel senior** et **ingénieur frontend expert**, spécialisé dans la conception de sites vitrines institutionnels (écoles, universités, centres de formation) avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

Je te fournis un **cahier des charges de design system** inspiré de la structure d'un site institutionnel de référence (une école d'ingénieurs bien conçue). Je veux que tu **restructures visuellement** mon site existant (`app/page.tsx` et ses composants) en appliquant ces principes de mise en page, **sans copier le contenu** de ce site de référence — je garde mon propre contenu (mes filières, mes photos, mes textes, mes coordonnées).

**Contrainte technique majeure :** mon site actuel souffre de bugs de responsive et d'animations cassées sur mobile (sections qui restent invisibles, header mal positionné, images mal cadrées). Corrige ces problèmes de fond en même temps que la refonte visuelle — ne te contente pas d'un habillage superficiel.

---

## 1. Système de couleurs (palette imposée)

Utilise **exclusivement** cette palette, à décliner en variables Tailwind ou CSS :

| Rôle | Couleur | Code hex approximatif |
|---|---|---|
| Bleu foncé principal (fond, header, sections sombres) | Bleu marine profond | `#0B1F3A` à `#102A4C` |
| Bleu foncé secondaire (dégradés, hover) | Bleu nuit légèrement plus clair | `#16324F` |
| Accent jaune (CTA, badges, highlights, chiffres clés) | Jaune doré/ambre | `#F5B800` à `#FFC93C` |
| Accent vert (validations, éléments secondaires, icônes) | Vert émeraude | `#1E8449` à `#2E9E5B` |
| Fond clair (sections alternées) | Blanc / gris très clair | `#FFFFFF` / `#F4F6F8` |
| Texte sur fond sombre | Blanc / gris clair | `#FFFFFF` / `#E2E8F0` |
| Texte sur fond clair | Bleu foncé / gris anthracite | `#0B1F3A` / `#1F2937` |

**Règle d'usage :**
- Le **bleu foncé** domine (headers, sections héro, sections "à propos", footer).
- Le **jaune** est réservé aux éléments d'action et de mise en valeur (boutons principaux, badges, chiffres, soulignements décoratifs) — jamais en fond de grande surface.
- Le **vert** est un accent secondaire discret (icônes de validation, petits détails, alternance ponctuelle dans les sections claires) — à ne pas surutiliser.
- Alterner les fonds entre sections : bleu foncé → blanc/gris clair → bleu foncé → blanc, pour créer un rythme visuel, exactement comme le fait le site de référence avec son alternance marron/blanc/orange.

---

## 2. Typographie

- Titres : police serif ou sans-serif grasse selon l'identité actuelle du site (garder la cohérence avec l'existant), toujours en fort contraste avec le fond.
- Petits labels/badges : majuscules, `letter-spacing` large (`tracking-widest`), taille réduite.
- Corps de texte : lisible, taille confortable (`text-base` à `text-lg` sur mobile), interligne aéré (`leading-relaxed`).
- Mots-clés importants dans les paragraphes : mise en gras ponctuelle pour guider la lecture.

---

## 3. Structure et composants à appliquer

### 3.1 Header / Navbar
- Fond blanc ou bleu foncé très légèrement transparent selon la section survolée (à défaut, fond blanc fixe).
- Logo à gauche, taille raisonnable, pas de texte superflu à côté.
- Menu hamburger + éventuellement une icône secondaire à droite.
- **Le header ne doit PAS être `sticky`/`fixed`** sauf demande explicite contraire — il défile normalement avec le contenu (sauf si je te demande plus tard de le rendre sticky avec une logique d'apparition au scroll vers le haut).

### 3.2 Section Hero
- Image de fond pleine largeur avec overlay bleu foncé semi-transparent (`bg-[#0B1F3A]/60` par exemple) pour garantir la lisibilité du texte quelle que soit la photo.
- **Hauteur responsive obligatoire** : ne jamais utiliser `min-h-screen` seul sur mobile — utiliser une hauteur adaptée (`min-h-[600px] sm:min-h-screen`) pour éviter l'effet de zoom excessif sur petits écrans.
- Contenu superposé aligné à gauche :
  1. Badge pill avec bordure jaune, texte jaune en majuscules
  2. Titre principal en blanc, gras, grande taille, sur 2-3 lignes
  3. Paragraphe descriptif en blanc/gris clair
  4. 2 boutons CTA : un plein (fond jaune, texte bleu foncé), un outline (bordure jaune, texte jaune, fond transparent)

### 3.3 Section chiffres clés (stats)
- Cartes avec effet glassmorphism (`backdrop-blur`, fond semi-transparent blanc ou bleu clair) sur fond bleu foncé.
- Chiffre en jaune ou blanc, très grand et gras.
- Libellé en dessous, majuscules, espacé, plus petit, en blanc/gris clair.

### 3.4 Section "À propos"
- Fond bleu foncé avec éventuellement une image d'illustration en arrière-plan (overlay bleu).
- Titre en 2 couleurs : une ligne blanche, une ligne jaune (ou verte en alternance).
- Paragraphe avec mots-clés en gras.
- Bouton outline jaune "En savoir plus".
- Image illustrative aux coins arrondis.

### 3.5 Section Accréditations / Partenaires (si applicable)
- Fond bleu foncé, titre centré avec soulignement jaune.
- Logos centrés et espacés.

### 3.6 Section Actualités
- Fond clair (blanc ou gris très clair).
- Titre en 2 couleurs (noir/bleu foncé + jaune ou vert pour le mot clé).
- Lien "Voir toutes les actualités" souligné, couleur jaune ou verte.
- Cartes d'actualités sur fond clair légèrement teinté (bleu très clair ou vert très clair), avec image, label, titre, description, métadonnées.
- **Pagination numérotée obligatoire** (1, 2, 3…) avec flèches précédent/suivant, au lieu d'empiler toutes les actualités d'un coup — évite les pages interminables.

### 3.7 Section Filières / Formations
- Fond avec image d'illustration + overlay bleu foncé.
- Titre centré, blanc/jaune, gras.
- Cartes empilées avec **alternance de fond** entre chaque carte (bleu foncé clair / gris clair semi-transparent / vert foncé en accent ponctuel), chacune avec : titre de filière en gras, image illustrative aux coins arrondis, paragraphe descriptif.
- Layout adaptatif : image + texte côte à côte sur desktop, empilés sur mobile.
- **Corrige le bug des animations `useInView`** : les sections avec de nombreuses cartes empilées (comme les filières) ne doivent PAS dépendre d'un seuil de visibilité élevé (`amount: 0.2` ou plus) qui empêche le déclenchement sur mobile — utilise `amount: 0` avec `once: true`, ou bascule ces sections vers une simple transition CSS (`opacity` + `transition`) déclenchée au montage plutôt qu'au scroll, pour garantir que le contenu s'affiche toujours, même si l'animation ne se déclenche pas parfaitement.

### 3.8 Galerie / "Explorer le campus"
- Fond bleu foncé avec image d'arrière-plan.
- Titre en 2 couleurs (blanc + jaune).
- Grille responsive : 1 colonne sur très petit mobile, 2 colonnes à partir de `sm:`, coins arrondis, espacement régulier (`gap-4`).
- Bouton "Voir plus" en pill jaune.

---

## 4. Règles techniques impératives (corrections de bugs)

1. **Responsive mobile-first strict** : chaque section doit être testée et fonctionnelle sur une largeur de 375px (iPhone standard) avant toute autre taille.
2. **Aucune section ne doit rester vide ou invisible** sur mobile à cause d'une animation qui ne se déclenche pas — privilégier la fiabilité de l'affichage à l'effet d'animation.
3. **Images avec `next/image`** : toujours renseigner soit `width`/`height`, soit `fill` accompagné de la prop `sizes` correcte, pour éviter les avertissements de performance et les mauvais cadrages.
4. **Header non intrusif** : ne doit pas rester collé à l'écran sauf demande explicite, et ne doit jamais chevaucher le contenu au scroll.
5. **Cohérence des textes** : vérifier qu'aucune information (adresse, nom de lieu, coordonnées) n'est écrite différemment à plusieurs endroits du site.
6. **Accessibilité minimale** : contrastes suffisants (texte blanc/jaune sur fond bleu foncé = bon contraste ; éviter texte jaune sur fond clair = mauvais contraste), attributs `alt` sur toutes les images.

---

## 5. Ce qu'il NE FAUT PAS faire

- Ne pas copier le contenu textuel, les logos, les noms de filières ou les photos d'un autre site — uniquement la **structure de mise en page et les patterns visuels**.
- Ne pas imposer un design identique si mon contenu actuel s'y prête mal : adapter intelligemment (par exemple, si je n'ai pas de section "accréditations", ne pas en inventer une vide).
- Ne pas sacrifier la lisibilité mobile pour un effet visuel desktop.

---

## 6. Livrable attendu

Restructure le fichier `app/page.tsx` (et les composants associés s'ils sont séparés) en appliquant ce design system, en conservant tout mon contenu actuel (textes, filières, photos, coordonnées), et en corrigeant au passage les bugs de responsive et d'animation identifiés. Explique brièvement, après chaque modification importante, ce que tu as changé et pourquoi.
