# How to Install Your Project OS on Your Phone

No coding needed — just follow these steps. Should take about 15 minutes.

---

## What you'll end up with
An app icon on your phone's home screen. Tap it, it opens full-screen like a real app, works offline, and remembers everything you put in it.

---

## Step 1 — Create a free GitHub account
1. Go to **github.com**
2. Click **Sign up**
3. Pick a username, email, password — verify your email when it asks

---

## Step 2 — Create a new repository (a folder for your app)
1. Once logged in, click the **+** icon top-right → **New repository**
2. Name it: `project-os` (no spaces)
3. Make sure it's set to **Public**
4. Leave everything else as default
5. Click **Create repository**

---

## Step 3 — Upload the files
1. You should see a page that says "Quick setup" with an option **"uploading an existing file"** — click that link
2. Unzip the file I gave you (`spud-project-os.zip`) on your computer first — you should get a folder with these files inside:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Drag **all 5 files** (not the folder itself — the files inside it) into the GitHub upload box
4. Scroll down, click **Commit changes**

---

## Step 4 — Turn on GitHub Pages (this makes it a live website)
1. In your repository, click **Settings** (top menu)
2. On the left sidebar, click **Pages**
3. Under "Build and deployment" → "Source", select **Deploy from a branch**
4. Under "Branch", select **main** and folder **/ (root)** → click **Save**
5. Wait about 1-2 minutes, then refresh the page
6. You'll see a message like: *"Your site is live at https://yourusername.github.io/project-os/"*
7. Copy that link

---

## Step 5 — Install it on your phone
1. Open that link in **Chrome** on your Android phone
2. Tap the **three dots menu** (top right)
3. Tap **"Add to Home screen"** or **"Install app"**
4. Confirm — you'll now have an app icon on your home screen!

---

## Step 6 (optional) — Add your AI assistant key
1. Open the app
2. Scroll down to **Settings**
3. Get a free Gemini API key from **aistudio.google.com** (sign in with Google → "Get API key" → "Create API key")
4. Paste it into the app's Settings, select "Google (Gemini)", tap **Save**
5. Now the chat box can understand things like "logged 3hrs on Odd Cats" and update your dashboard automatically

---

## To make changes later
Whenever you want to edit something in the app (like adding a new project), come back to me — I'll give you updated files, and you just repeat **Step 3** (upload the new files, overwrite the old ones) on GitHub. Everything you've already typed into the app stays saved on your phone (it doesn't get wiped by updates, unless you clear your browser data).

---

## Notes
- This won't send notifications when the app is fully closed — Android limits this for non-Play-Store apps. But if you keep it installed and open it daily (it'll remember everything), the reminder banner at the top will catch anything you've been neglecting.
- If you ever want to go further (real scheduled push notifications, Play Store app), that's a bigger step involving Android Studio — let me know when you're ready and I'll set that up too.
