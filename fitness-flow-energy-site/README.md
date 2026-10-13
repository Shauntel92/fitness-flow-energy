# fitness.flow.energy — GitHub Pages storefront

A static website for showcasing six instrumental tracks and directing customers to Gumroad for checkout.

## Before publishing

1. Open `script.js` and replace each `gumroadUrl:''` with the actual direct URL for the matching **published** Gumroad product. Leave it blank to show “Coming soon.” For example: `gumroadUrl:'https://YOURNAME.gumroad.com/l/YOURPRODUCT'`.
2. Open `index.html` and replace `YOUR_EMAIL@example.com` in the footer with a public business contact email, or remove the Contact link.
3. Review descriptions, fitness-use labels, and the licensing explanation for consistency with your actual product licenses.
4. The cover images are cropped from the previously generated six-cover collage. Replace them with individual final artwork if you have higher-resolution, approved covers.
5. The 25-second MP3 samples are **public previews**. Do not upload the full-length WAV or MP3 masters or private license PDFs to the GitHub repository.

## Publish to GitHub Pages (no custom domain needed)

1. Sign into GitHub and create a new **public** repository, e.g. `fitness-flow-energy`.
2. Upload **the contents of this folder** (not the enclosing folder) to the repository's root. Make sure `index.html`, `style.css`, `script.js`, and `assets/` are in the root.
3. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**.
4. Wait for the deployment status to show the site URL. It will normally be `https://YOUR-USERNAME.github.io/fitness-flow-energy/`.
5. Test on desktop and mobile, check audio previews, and click every purchase link.

## Notes

- GitHub Pages is a public static website. Do not upload private information, unlicensed third-party images, or paid audio masters.
- Google Fonts are loaded from Google; system font fallbacks work if unavailable.
- This site does not process payments or store customer data; Gumroad handles purchase and delivery.
- The license language on this website is an overview, not a substitute for the full license agreement.
