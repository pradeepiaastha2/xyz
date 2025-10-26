# Deployment Guide for Cloudflare Pages

This wedding invitation website is optimized for deployment on Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works perfectly)
2. The required assets in the `/public` directory (see `/public/ASSETS_README.txt`)

## Steps to Deploy

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial wedding invitation website"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository

3. **Configure Build Settings:**
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: None needed

4. **Deploy:**
   - Click "Save and Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at: `https://your-project.pages.dev`

### Option 2: Deploy via Direct Upload

1. **Build the project locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Cloudflare Pages:**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Pages"
   - Click "Create a project" → "Direct Upload"
   - Drag and drop the `dist` folder
   - Click "Deploy site"

## Custom Domain (Optional)

1. In Cloudflare Pages, go to your project
2. Click "Custom domains"
3. Add your domain (e.g., `invite.yourdomain.com`)
4. Update your DNS records as instructed
5. Update the Open Graph URLs in `/index.html` to use your custom domain

## Open Graph Preview Setup

The website includes Open Graph meta tags for beautiful link previews on WhatsApp, Facebook, and Instagram.

**Important:** After deployment, update these URLs in `/index.html`:

```html
<meta property="og:url" content="https://your-actual-domain.pages.dev/" />
<meta property="twitter:url" content="https://your-actual-domain.pages.dev/" />
```

Replace `https://invite.yourdomain.com/` with your actual Cloudflare Pages URL.

## Testing the Preview

After deployment:

1. Share your link on WhatsApp
2. The preview should show:
   - Title: "Nisha ❤️ Devendra Wedding Invitation"
   - Description: Wedding details
   - Image: Your OG image (if uploaded to `/public/og-image.jpg`)

## Adding Assets Post-Deployment

If you deployed via GitHub:
1. Add the required assets to `/public` directory
2. Commit and push
3. Cloudflare Pages will automatically rebuild

If you deployed via Direct Upload:
1. Build locally with assets included
2. Re-upload the `dist` folder

## Troubleshooting

**Link preview not showing?**
- Ensure `og-image.jpg` exists in `/public` directory
- Verify the image is accessible at `https://your-domain.pages.dev/og-image.jpg`
- Clear WhatsApp cache by sharing to yourself first
- Use Facebook's Sharing Debugger: https://developers.facebook.com/tools/debug/

**Music not playing?**
- Ensure `wedding.mp3` exists in `/public/music/` directory
- Note: Most browsers block autoplay until user interaction
- The music will start after clicking "Open Invitation"

**Build fails?**
- Check that all dependencies are in `package.json`
- Verify Node version compatibility
- Check build logs in Cloudflare dashboard

## Performance Tips

1. Optimize the OG image (compress to under 200KB)
2. Keep music file under 5MB
3. Use WebP format for any additional images
4. Enable Cloudflare's automatic optimizations

## Support

For issues with:
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- This template: Check the code comments in `/src/App.tsx`

---

**Enjoy your beautiful wedding invitation website!**
