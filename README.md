# PariPermis — Site vitrine

Site du centre de formation transport routier **PariPermis** (Longjumeau, 91) :
permis C / CE / D, titres professionnels, FIMO et FCO marchandises & voyageurs,
financements (CPF, France Travail, OPCO, alternance), métiers du transport et
simulateur de projet.

Reproduction fidèle de la maquette Lovable `transport-pro-rise`.

## Stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**
- **React Router 6**
- **lucide-react** (icônes)

## Démarrer

```bash
npm install
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production -> dist/
npm run preview  # prévisualiser le build
```

## Structure

```
src/
├── components/    # Navbar, Footer, TopBar, Layout, FormationCard, LeadForm…
├── data/          # formations.ts, metiers.ts, financements.ts
├── lib/           # constantes du site (coordonnées, stats…)
└── pages/         # Home, Formations, FormationDetail, Financement,
                   # Metiers, Simulateur, NotreCentre, Contact,
                   # Inscription, Blog, NotFound
```

## Pages

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/formations` | Liste des formations |
| `/formations/:slug` | Détail d'une formation (12 formations) |
| `/financement` | Financements par profil + guide PDF |
| `/metiers` | Métiers du transport |
| `/simulateur` | Simulateur de projet (2 étapes) |
| `/a-propos` | Notre Centre |
| `/contact` | Contact + devis |
| `/inscription` | Inscription |
| `/blog` | Blog |

Le guide des financements est servi depuis `public/guide-financements.pdf`.
