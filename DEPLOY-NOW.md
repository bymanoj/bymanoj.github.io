# 🚀 DEPLOY YOUR PORTFOLIO - EXACT STEPS

## Option 1: GitHub Web Interface (Easiest - 5 Minutes)

### Step 1: Create Repository (1 minute)
1. Go to: https://github.com/new
2. Repository name: **bymanoj.github.io** (must be exact)
3. Description: "Professional Salesforce Architect Portfolio"
4. Select: ⚪ Public
5. **DO NOT** check "Add a README file"
6. Click: "Create repository"

### Step 2: Upload Files (3 minutes)
On the empty repository page:

1. Click: "uploading an existing file" link
2. Drag ALL these files from your downloads:
   ```
   index.html
   _config.yml
   README.md
   DEPLOYMENT.md
   assets/ (entire folder)
   ```
3. Wait for upload to complete
4. Scroll down
5. Click: "Commit changes"

### Step 3: Enable GitHub Pages (1 minute)
1. Click: "Settings" tab (top of page)
2. Click: "Pages" in left sidebar
3. Under "Source":
   - Branch: **main** (dropdown)
   - Folder: **/ (root)** (dropdown)
4. Click: "Save"
5. Wait 2-3 minutes

### Step 4: Visit Your Site
Open: **https://bymanoj.github.io**

Done! 🎉

---

## Option 2: Git Command Line (If You Know Git)

```bash
# Navigate to where you downloaded the files
cd /path/to/downloaded/files

# Initialize git
git init
git add .
git commit -m "Initial portfolio site"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/bymanoj/bymanoj.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable Pages in Settings as described above.

---

## Troubleshooting

**Repository name wrong?**
Settings → General → Repository name → Change to: bymanoj.github.io

**Files not uploading?**
- Upload one file at a time if batch fails
- Make sure assets folder structure is preserved

**Site not loading after 5 minutes?**
- Check repository is Public (Settings → General)
- Verify GitHub Pages is enabled (Settings → Pages)
- Try visiting https://bymanoj.github.io again

**404 Error?**
- Check repository name is exactly: bymanoj.github.io
- Wait another 2 minutes
- Clear browser cache

---

## What You Need

1. GitHub account (free at github.com)
2. These downloaded files:
   - index.html
   - _config.yml
   - assets folder (with css and js inside)
3. 5 minutes

---

## After Deployment

Your portfolio will be live at:
**https://bymanoj.github.io**

Add this URL to:
- ✅ LinkedIn profile (Featured section)
- ✅ Resume header
- ✅ Email signature
- ✅ Job applications

---

**Ready? Start at: https://github.com/new**

Time to deploy: 5 minutes
Your professional presence: Priceless

🚀 Let's go!
