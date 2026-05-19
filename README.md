# Capital Apex Inc. Static Website

This is a production-ready static bilingual website for **capitalapexinc.com**. The root pages are Turkish and the English pages are inside the `/en/` folder.

## Uploading to a Server

Upload all files and folders in this directory to your web server public root, such as `public_html`, `www`, or the document root configured in your hosting panel. No Node.js runtime, database, or backend framework is required.

## Uploading to GitHub

This folder is ready to be pushed to GitHub as a static website repository. It includes `.gitignore`, `.gitattributes`, `.editorconfig`, `.nojekyll`, and `CNAME` for `capitalapexinc.com`.

Common first push commands:

```bash
git add .
git commit -m "Initial Capital Apex website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

For GitHub Pages, enable Pages in the repository settings and select the `main` branch root folder. The included `CNAME` file is for the custom domain `capitalapexinc.com`; remove or edit it if you use another domain.

## Page Structure

- Turkish pages live in the site root, for example `/services.html`.
- English pages live in `/en/`, for example `/en/services.html`.
- Each page includes canonical URLs and `hreflang` tags for Turkish and English.

## Changing Contact Information

Update email, phone, WhatsApp and service-area text in the HTML footer/contact sections. The main email currently used is `info@capitalapexinc.com`.

## Changing the WhatsApp Number

Search for `1XXXXXXXXXX` in the HTML files and replace it with the WhatsApp number in international format without plus signs or spaces. Example: `15551234567`.

## Replacing Images

Images are in `assets/img/`. Replace files with the same names to keep existing references working:

- `hero-usa-business.png`
- `investment-consulting.svg`
- `company-formation.svg`
- `real-estate-usa.svg`
- `business-operations.svg`
- `citizenship-residency.svg`
- `about-office.svg`

Use optimized image sizes and keep meaningful alt text in the HTML.

## Editing Content

Edit the relevant `.html` file directly. Turkish pages are in the root folder and English versions are in `/en/`. Keep matching language switch links and `hreflang` tags aligned when adding new pages.

## Contact Form Integration

The contact form is frontend-ready and includes basic validation. It does not send email by itself. To connect it:

1. Add your backend, form service, or serverless endpoint to the form `action` attribute.
2. Change `method` if your provider requires it.
3. Update `assets/js/main.js` if the provider requires AJAX submission.
4. Only show a delivery confirmation after a real backend/email service is connected.

## Static Hosting Notes

This website can be hosted on cPanel/shared hosting, VPS, Netlify, Cloudflare Pages, GitHub Pages, S3-compatible static hosting, or any standard web server that serves HTML/CSS/JS files.
