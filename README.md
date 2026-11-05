# Waha Green website

A responsive React + Vite website for Waha Green – Landscaping & Gardening, Qatar.

## Run locally

1. Install Node.js (18 or newer).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

Create a production build with `npm run build`.

## Where to update assets and details

- **Logo and favicon:** replace `public/logo.png` with the final logo file, keeping the same filename.
- **Project photography:** the supplied brief did not include the completed garden photographs. The project gallery currently uses labelled, CSS-drawn placeholders so it does not misrepresent stock imagery as Waha Green's work. Replace the `GardenArt` placeholder usage in `src/App.jsx` with your own `<img>` elements and update the comparison images in `BeforeAfter`.
- **Video:** the home page video placeholder can be added when the company intro video is ready.
- **Business details and social links:** edit `src/content.js`.
- **Website copy:** edit the content in `src/content.js` and the relevant page components in `src/App.jsx`.
- **Colors and typography:** edit the CSS variables at the top of `src/styles.css`.

## Important launch notes

- The contact form currently opens the visitor's email app with a prefilled message. Connect a secure form service/backend to deliver requests directly to `contact@wahagreen.com`.
- Add actual service areas, address, opening hours and commercial registration number where marked `[TO CONFIRM]`.
- Complete the privacy policy and terms for the company's actual legal requirements.
- Add real project photos and the company introduction video before launch.
- Analytics/pixel IDs are intentionally not activated because none were supplied.
- This is a front-end website starter. Configure hosting, domain, sitemap, robots.txt, canonical URLs and production metadata as part of deployment.


## Latest design update

- Simplified the main navigation and made the quote action prominent.
- Added a quick-service chooser directly below the homepage hero.
- Reordered the homepage around the customer journey: choose a service, view the transformation, understand the process, then contact Waha Green.
- Rebuilt the before/after slider with visibly different original-yard and green-lawn scenes. Drag left to reveal more of the finished grassy garden; drag right to reveal more of the original yard. The range input also supports keyboard and touch accessibility.
- The slider scenes are illustrative placeholders. Replace them with real, matching before/after photographs for the strongest customer trust.

## Version 3 design update

- Photo-based before/after comparison follows the supplied screenshot layout, with a circular handle and labels. Drag left to reveal the green lawn; drag right to reveal the original yard. The input also supports keyboard arrows.
- `public/sample-before.webp` and `public/sample-after.webp` are crops of the user-provided *reference screenshot*, **not photos of Waha Green projects**. Replace both with actual same-angle photos before publishing.
- The homepage now includes an illustrated four-step process with hover motion and reduced-motion support.
