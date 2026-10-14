# Atelier

Hjemmeside for **Atelier** — *Sæt et X i kalenderen for dit nye jakkesæt.*

Jakkesæt i ægte uld fra lager, tilpasset af skrædder, så de sidder næsten som skræddersyet. Klar på en uge. Fra 1.699 kr.

Bygget på samme fundament som krydsbyg.com: **Next.js 15** (App Router) + TypeScript + Tailwind CSS,
sort/hvid-tema, dansk/engelsk sprogskift og booking-formular der sender mail via **Resend**.

## Kom i gang

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # produktions-build
npm run start      # kør produktions-build
npm run lint       # ESLint
```

## Læg billeder ind (efter photoshoot)

Alle billedpladser viser et guld-monogram, indtil der ligger et billede. Du skal **ikke** ændre kode —
læg bare billedet i `public/billeder/` med det rigtige navn, så dukker det op ved næste build/deploy.

| Filnavn                   | Hvor på siden            | Format (bredde:højde) | Anbefalet størrelse |
|---------------------------|--------------------------|-----------------------|---------------------|
| `hero.jpg`                | Forsiden, øverst         | 4:5 (portræt)         | 1600 × 2000 px      |
| `kollektion-business.jpg` | Kollektion — Business    | 3:4 (portræt)         | 1200 × 1600 px      |
| `kollektion-bryllup.jpg`  | Kollektion — Bryllup     | 3:4                   | 1200 × 1600 px      |
| `kollektion-smoking.jpg`  | Kollektion — Smoking     | 3:4                   | 1200 × 1600 px      |
| `lookbook-1.jpg` … `lookbook-6.jpg` | Lookbook-galleriet | 3:4                 | 1200 × 1600 px      |
| `atelier.jpg`             | "Om Atelier"-sektionen   | 4:5                   | 1600 × 2000 px      |

- Formaterne `.jpg`, `.jpeg`, `.png`, `.webp` og `.avif` virker alle.
- Billederne beskæres automatisk til formatet, så hold modellen nogenlunde i midten.
- Next.js komprimerer og skalerer billederne automatisk — upload gerne i høj kvalitet.
- Når alle billeder er lagt ind, så sæt `showImageHints: false` i `lib/site.ts`
  (det fjerner de små filnavne-hjælpetekster på eventuelle tomme pladser).
- Vil du tilføje flere billedpladser, så rediger listen i `lib/images.ts`.

## Ret tekster, priser og kontaktinfo

| Hvad                                    | Fil                    |
|-----------------------------------------|------------------------|
| Telefon, e-mail, adresse, åbningstider, Instagram/Facebook, CVR | `lib/site.ts` |
| Startpris ("Jakkesæt fra 1.699 kr.")    | `lib/site.ts` → `startPrice` |
| Alle tekster på dansk og engelsk, inkl. spørgsmål & svar (`faq_*`) | `lib/translations.ts`  |
| Privatlivspolitik                       | `app/privatlivspolitik/page.tsx` |

> **OBS:** Telefon og e-mail er midlertidigt sat til KrydsByg's. Skift dem i `lib/site.ts`.

Tomme felter i `lib/site.ts` (fx `address: ""`) bliver automatisk skjult på siden.

## Booking-mails

Formularen sender en mail via [Resend](https://resend.com). Sæt disse miljøvariabler (lokalt i `.env.local`, på Vercel under *Settings → Environment Variables*):

```
RESEND_API_KEY=re_...
RESEND_FROM=Atelier <kontakt@ditdomæne.dk>
RESEND_TO=kontakt@ditdomæne.dk
NEXT_PUBLIC_SITE_URL=https://ditdomæne.dk
```

Uden `RESEND_API_KEY` logges bookinger kun i udvikling. I produktion viser formularen i stedet en fejl
med telefonnummeret, så ingen forespørgsler forsvinder i stilhed.

## Struktur

```
app/
├── layout.tsx              # Skrifttyper, SEO, sprog
├── page.tsx                # Forsiden (finder billeder i public/billeder/)
├── privatlivspolitik/      # Privatlivspolitik
└── api/booking/            # Booking-formular → mail
components/                 # Sektioner: Hero, Collection, Process, Lookbook, WhyAtelier, Pricing, About, Booking …
contexts/                   # Tema (sort/hvid), sprog (DA/EN) + billeder
lib/
├── site.ts                 # Virksomhedsoplysninger + startpris
├── images.ts               # Billedpladser
└── translations.ts         # Alle tekster
public/
├── billeder/               # ← Læg modelbillederne her
├── apple-icon.png          # Ikon til mobilens hjemmeskærm
├── og-image.jpg            # Delingsbillede (Facebook, LinkedIn osv.)
└── favicon.svg
```

## Brand

- Logo: et kryds (én guldstreg og én i tekstfarven) + ATELIER — se `components/LogoMark.tsx` og `components/Logo.tsx`
- Sort tema: baggrund `#17181D` og guld `#C8A45A`
- Hvidt tema: lys baggrund `#FAF8F4` og mørkere guld `#8A6A2B`, så teksten kan læses
- Siden starter i hvidt tema; knappen i menuen skifter til sort, og valget huskes. Farverne ligger som variabler i `app/globals.css`
- Cormorant Garamond (overskrifter) + Jost (brødtekst)
