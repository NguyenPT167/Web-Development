# Portfolio Website (Elegant Template)

This is a lightweight, elegant portfolio website template you can use and customize.

## Files included
- `index.html` — main page (semantic HTML, accessible)
- `styles.css` — all styling and responsive layout
- `script.js` — theme toggle, simple form UX, smooth scrolling

## Quick setup
1. Copy the files into the root of your repository:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Update content:
   - Replace placeholder images with your own images.
   - Replace text (name, bio, projects, contact email).
   - Update project links for "Live" and "Code".

3. Test locally:
   - You can open `index.html` in your browser.
   - For a local server (recommended), run:
     - Python 3: `python -m http.server` then open http://localhost:8000
     - Or use your preferred dev server.

4. Deploy (GitHub Pages):
   - Commit the files to the `main` or `gh-pages` branch.
   - In your repository's Settings → Pages, choose the branch and root directory.
   - Save — the site will be available at `https://<username>.github.io/<repo>/` (or a custom domain if configured).

## Customization tips
- Fonts: Swap the Google Fonts link in `index.html` to your preferred font.
- Colors: Edit CSS variables at the top of `styles.css` (e.g., `--accent`, `--accent-2`).
- Images: Use optimized images (WebP/AVIF when possible). Keep sizes reasonable for performance.
- Contact form: For a production contact form, integrate a serverless function (Netlify Functions, Formspree, or your own backend) instead of `mailto`.

## Accessibility & performance
- Semantic HTML and landmarks make navigation easier for assistive tech.
- Focus styles are included for keyboard users.
- Keep images optimized and lazy-load large images as needed.

## Want me to customize it for you?
Tell me:
- Your full name and short bio (1–2 lines)
- Links to 3–6 projects (title, short description, live link, repo link, image)
- Preferred colors or a reference site
I will update the files and produce versions ready to paste into your repo.

Enjoy!
