# Showroom-site — opzet & werkwijze

Een statische site. **Hosting: €0/maand** op Cloudflare. Onderhoud doe je samen
met Claude. Je enige vaste kost is je domein (~€10/jaar).

## Hoe het werkt (in het kort)
- Je site is een mapje bestanden.
- Dat zet je één keer in **GitHub** (gratis online opslag voor je code).
- **Cloudflare Pages** kijkt naar die GitHub-map en zet hem live. Verandert er
  iets in GitHub, dan publiceert Cloudflare automatisch opnieuw. Gratis.
- Iets aanpassen? Je vraagt het **Claude**. Claude geeft je het bijgewerkte
  bestand. Jij vervangt dat bestand in GitHub → binnen ~1 minuut staat het live.

---

## Eenmalig instellen (±15 min, geen command line nodig)

### 1. Zet de code op GitHub
1. Maak een gratis account op **github.com**.
2. Klik **New repository** → geef een naam (bv. `showroom`) → **Create**.
3. Klik **"uploading an existing file"** → sleep ALLE inhoud van deze map erin
   (`index.html`, de mappen `css`, `js`, `images`, en dit `README.md`) → **Commit**.

### 2. Koppel Cloudflare Pages
1. Maak een gratis account op **dash.cloudflare.com**.
2. **Workers & Pages → Create → Pages → Connect to Git**.
3. Kies je `showroom`-repo.
4. Build settings:
   - Framework preset: **None**
   - Build command: **(leeg laten)**
   - Output directory: **/**
5. **Save and Deploy**. Klaar — je site is live op een gratis `*.pages.dev`-adres,
   met automatische HTTPS.

### 3. (Optioneel) Eigen domein
Koop een domein (~€10/jaar) en koppel het onder **Custom domains** in Cloudflare.

---

## Zo werken we daarna samen
Je hoeft geen code te kennen. Je zegt wat je wilt, Claude levert het bestand,
jij zet het in GitHub.

- **Product toevoegen:** geef Claude de naam, prijs, foto's en een paar zinnen.
  Je krijgt de nieuwe `js/products.js`. Vervang dat ene bestand in GitHub
  (open het, klik het potlood-icoon, plak de nieuwe inhoud, Commit). Live in ~1 min.
- **Foto toevoegen:** upload de afbeelding in de map `images/` in GitHub, en
  verwijs ernaar in `products.js` (`"images/jouwfoto.jpg"`).
- **Iets aan het uiterlijk of de structuur** ("maak de kamer donkerder", "zet er
  een over-ons-pagina bij", "voeg een tweede kamer toe"): Claude geeft je de
  gewijzigde of nieuwe bestanden, jij uploadt ze net zo.

Tip: foto's vooraf verkleinen tot ~1200px breed houdt de site snel.

---

## Afrekenen (geen maandkosten)
Elk product heeft een knop **"Reserveer / vraag aan"** (opent mail of WhatsApp).
Wil je directe betaling? Maak in **Mollie** een betaallink (geen maandkosten,
iDEAL €0,29 per transactie) en plak die in `products.js` bij `betaallink: "..."`.
Er verschijnt dan vanzelf een knop **"Direct afrekenen"**.

---

## Bestanden
```
index.html        de pagina (kamer + collectie)
css/style.css     vormgeving
js/products.js    JOUW PRODUCTEN — dit bewerk je (samen met Claude)
js/app.js         de logica
images/           je productfoto's
```
