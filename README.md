# Manoj Patil - Salesforce Technical Architect Portfolio

Professional portfolio website showcasing 15+ years of Salesforce architecture experience across UAE markets.

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Create Repository
1. Go to GitHub.com
2. Create new repository named: `bymanoj.github.io`
3. Make it **public**
4. Don't initialize with README (we have files)

### Step 2: Upload Files
Upload these files to your repository:
- `index.html`
- `_config.yml`
- `assets/css/style.css`
- `assets/js/script.js`
- `README.md`

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch
5. Select "/ (root)" folder
6. Click Save

### Step 4: Access Your Site
Your site will be live at: `https://bymanoj.github.io`

Wait 2-3 minutes for initial deployment.

## 📁 File Structure

```
bymanoj.github.io/
├── index.html              # Main page
├── _config.yml             # Jekyll config
├── README.md               # This file
└── assets/
    ├── css/
    │   └── style.css       # Styles
    └── js/
        └── script.js       # Interactive features
```

## 🎨 Customization

### Update Content
Edit `index.html` to modify:
- Project descriptions
- Contact information
- Experience details
- Certifications

### Change Colors
Edit `assets/css/style.css` at the `:root` section:
```css
--primary-color: #0B5FFF;     /* Main brand color */
--secondary-color: #1E3A8A;   /* Secondary accents */
```

### Add Projects
Copy a `.project-card` div in the projects section and modify content.

## 🔧 Local Development

To test locally:
```bash
# Simple Python server
python -m http.server 8000

# Or use Live Server in VS Code
```

Visit `http://localhost:8000`

## 📱 Responsive Design

Site is fully responsive:
- Desktop: Full layout
- Tablet: Adjusted grid
- Mobile: Single column

## 🎯 Features

- ✅ Clean, professional design
- ✅ Smooth scrolling navigation
- ✅ Project showcase
- ✅ Certification display
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ SEO optimized

## 🔗 Custom Domain (Optional)

To use custom domain:
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add CNAME file with your domain
3. Configure DNS:
   ```
   Type: CNAME
   Host: www
   Value: bymanoj.github.io
   ```
4. Wait for DNS propagation (up to 48 hours)

## 📊 Analytics (Optional)

Add Google Analytics:
1. Get tracking ID from analytics.google.com
2. Add before `</head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚦 Status

- [x] Initial build
- [x] Responsive design
- [x] Content populated
- [ ] Custom domain
- [ ] Analytics setup
- [ ] Blog section (optional)

## 📝 License

© 2024 Manoj Patil. All rights reserved.

## 📧 Contact

- LinkedIn: [linkedin.com/in/manojpatil86](https://www.linkedin.com/in/manojpatil86)
- Location: Dubai, UAE

---

**Built with**: HTML5, CSS3, Vanilla JavaScript, GitHub Pages
