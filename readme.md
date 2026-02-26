# 📄 Developer CV – HTML to PDF

Single‑page CV built with semantic HTML and clean CSS, available in **French and English**, with a **“Download PDF”** button powered by `html2pdf.js`. The goal is to provide an easily editable template that exports to an A4 PDF with one click.

---

## 📋 Table of Contents

-   [Overview](#overview)
-   [Demo](#demo)
-   [Key Features](#key-features)
-   [Technologies Used](#technologies-used)
-   [Project Structure](#project-structure)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Customizing the CV](#customizing-the-cv)
-   [Author](#author)

---

## <div id="overview">🎯 Overview</div>

This repository contains a bilingual CV layout (`index.html` in French, `en.html` in English) styled for A4 printing and PDF export.  
The PDF is generated on the client side using a fixed A4 canvas (`#cv-container`) and a floating download button that calls `html2pdf.js`.

---

## <div id="demo">🚀 Demo</div>

-   Live preview (FR/EN): https://sami-regragui-work.github.io/cv-html-pdf/

---

## <div id="key-features">🛠 Key Features</div>

-   A4‑sized CV layout with consistent typography and spacing.
-   One‑click **Download PDF** button with dynamic filename including the current date.
-   Simple **language toggle** (FR/EN) using `lang.js`, with separate HTML files for each language.
-   Links (email, phone, GitHub, LinkedIn, projects) remain clickable inside the PDF.

---

## <div id="technologies-used">💻 Technologies Used</div>

-   **HTML5** for semantic structure.
-   **CSS3** for layout, colors, and print styling (`cv.css`, `palette.css`).
-   **Vanilla JavaScript** for PDF generation (`pdf.js`) and language switch (`lang.js`).
-   **html2pdf.js** (via `node_modules`) for client‑side HTML → PDF conversion.

---

## <div id="project-structure">📁 Project Structure</div>

```txt
📦 cv-html-pdf
├── assets/
│   ├── circle.png        # Profile image
│   ├── cv.css            # Main styles and layout
│   ├── lang.js           # FR/EN language toggle logic
│   ├── palette.css       # Colors, typography helpers
│   └── pdf.js            # Download PDF button logic (html2pdf)
├── node_modules/         # Installed dependencies (gitignored)
├── .gitignore
├── en.html               # English version of the CV
├── index.html            # French version of the CV
├── package.json          # NPM metadata + html2pdf.js dependency
├── package-lock.json     # NPM lock file (can be gitignored if desired)
└── readme.md
```

**Key files:**

-   **index.html / en.html** – CV content (per language) + language toggle + download button.
-   **assets/cv.css** – Layout of the CV sheet, button styling, and global rules.
-   **assets/palette.css** – Color variables and section typography helpers.
-   **assets/pdf.js** – Configures and calls `html2pdf()` when clicking `#download-pdf`.
-   **assets/lang.js** – Adds behavior to `.lang-btn` to switch between `index.html` and `en.html`.

---

## <div id="installation">📥 Installation</div>

**Requirements:**

-   Node.js (LTS recommended)
-   Any modern browser (Chrome, Firefox, Edge, etc.)

**Steps:**

1. Clone the repository:

    ```bash
    git clone <REPO_URL>
    cd <FOLDER_NAME>
    ```

2. Install dependencies (installs `html2pdf.js` into `node_modules`):

    ```bash
    npm install
    ```

3. Start a simple static server (recommended) or open the HTML files directly:

    ```bash
    npx serve .
    # or
    npx http-server .
    ```

4. Open `http://localhost:3000` (or the URL printed by the server) and navigate to `index.html` or `en.html`.

> Note: `node_modules/` is not committed.  
> Anyone cloning the repo must run `npm install` before using the **Download PDF** button.

---

## <div id="usage">▶️ Usage</div>

-   Open **`index.html`** for the French version or **`en.html`** for the English version.
-   Use the **FR / EN** toggle in the top area to switch language (the script redirects between the two files).
-   Click **“Download PDF”** to generate and download an A4 PDF; the file is named `Sami_Regragui_CV(yy.mm.dd).pdf` based on the current date.

---

## <div id="customizing-the-cv">✏️ Customizing the CV</div>

You can reuse this template for another person by editing the HTML content only; the CSS and JS usually stay the same.

**1. Personal information**

In `index.html` and `en.html`, update:

-   Name, job title, and profile image:

    ```html
    <h1 id="spec" class="section__title">Développeur Full Stack</h1>
    <h2 id="name" class="text--bold">Sami Regragui</h2>
    <img id="pfp" src="assets/circle.png" alt="Profile picture" />
    ```

    Replace the title, name, and `circle.png` with your own values and image file.

-   Contact links:

    ```html
    <a href="mailto:..." class="email">...</a>
    <a href="tel:+..." class="phone">...</a>
    <a href="https://github.com/..." class="github">...</a>
    <a href="https://www.linkedin.com/in/..." class="linkedin">...</a>
    ```

    Update email, phone number, GitHub username, and LinkedIn URL for the new user.

**2. Sections (skills, education, experience, projects, etc.)**

Each section is a straightforward list of `<article>` or `<li>` elements:

-   **Technical skills:** edit list items under `#tech-skills`.
-   **Education:** edit or duplicate `<article class="degree">` blocks.
-   **Experience:** update titles, dates, and descriptions inside `.exp`.
-   **Projects:** update project titles, descriptions, and live links.
-   **Certifications / Soft Skills / Languages:** adjust list items and labels as needed.

Maintain the same structure (classes and nesting) so that styling remains consistent.

**3. English version**

Once the French version is correct, mirror the information in **`en.html`**:

-   Translate content text to English.
-   Keep the same IDs and classes (`#cv-container`, `.section__title`, etc.) so that both languages share the same CSS and JS behavior.
-   Ensure the FR/EN buttons are present and that `data-lang="fr"` points to `index.html` and `data-lang="en"` to `en.html`.

---

## <div id="author">👤 Author</div>

Created by **Sami Regragui** as a printable, bilingual CV template with automated PDF export.  
Feel free to fork and adapt it for your own profile.
