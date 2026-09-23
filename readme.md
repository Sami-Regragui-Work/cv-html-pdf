# 📄 Developer CV – HTML to PDF

Multi-version CV built with semantic HTML and clean CSS: **3 CV types** (Full-Stack & Java, Laravel, Java), each in **French and English**, with a **"Download PDF"** button powered by `html2pdf.js`.

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

This repository contains 3 CV variants, each available in French and English (6 HTML files total), styled for A4 printing and PDF export:

-   **Full-Stack & Java** (`merged-fr.html` / `merged-en.html`) — general profile covering both web and Java/systems work.
-   **Laravel** (`laravel-fr.html` / `laravel-en.html`) — focused on PHP/Laravel full-stack projects.
-   **Java** (`java-fr.html` / `java-en.html`) — Java-focused profile (in progress, placeholders for upcoming projects).

`index.html` is a copy of `merged-fr.html`, so visiting the site root (e.g. on GitHub Pages) always opens the Full-Stack & Java CV in French by default.

The PDF is generated on the client side using a fixed A4 canvas (`#cv-container`) and a floating download button that calls `html2pdf.js`.

---

## <div id="demo">🚀 Demo</div>

-   Live preview: https://sami-regragui-work.github.io/cv-html-pdf/

---

## <div id="key-features">🛠 Key Features</div>

-   A4‑sized CV layout with consistent typography and spacing.
-   One‑click **Download PDF** button with dynamic filename including the current date.
-   **Language toggle** (FR/EN) — plain links between sibling files for the same CV type.
-   **CV-type toggle** (Full-Stack & Java / Laravel / Java) — plain links between CV types, staying on the current language.
-   Links (email, phone, GitHub, LinkedIn, projects) remain clickable inside the PDF.

---

## <div id="technologies-used">💻 Technologies Used</div>

-   **HTML5** for semantic structure.
-   **CSS3** for layout, colors, and print styling (`cv.css`, `palette.css`).
-   **Vanilla JavaScript** for PDF generation (`pdf.js`).
-   **html2pdf.js** (via `node_modules`) for client‑side HTML → PDF conversion.

---

## <div id="project-structure">📁 Project Structure</div>

```txt
📦 cv-html-pdf
├── assets/
│   ├── circle.png        # Profile image
│   ├── cv.css            # Main styles and layout (incl. toggle buttons)
│   ├── lang.js           # Placeholder (toggles are plain links now)
│   ├── palette.css       # Colors, typography helpers
│   └── pdf.js            # Download PDF button logic (html2pdf)
├── node_modules/         # Installed dependencies (gitignored)
├── .gitignore
├── index.html            # Just a redirection towards merged-fr.html (because it's default entry point)
├── merged-fr.html        # Full-Stack & Java CV — French
├── merged-en.html        # Full-Stack & Java CV — English
├── laravel-fr.html       # Laravel CV — French
├── laravel-en.html       # Laravel CV — English
├── java-fr.html          # Java CV — French
├── java-en.html          # Java CV — English
├── package.json          # NPM metadata + html2pdf.js dependency
├── package-lock.json     # NPM lock file (can be gitignored if desired)
└── readme.md
```

**Key files:**

-   **merged-\*.html / laravel-\*.html / java-\*.html** – CV content per type and language, with language toggle + CV-type toggle + download button.
-   **index.html** – kept in sync with `merged-fr.html`; update both together, or overwrite `index.html` from `merged-fr.html` after any edit to keep the site root current.
-   **assets/cv.css** – Layout of the CV sheet, button styling (`.lang-btn`, `.cv-type-btn`), and global rules.
-   **assets/palette.css** – Color variables and section typography helpers.
-   **assets/pdf.js** – Configures and calls `html2pdf()` when clicking `#download-pdf`.

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

4. Open `http://localhost:3000` (or the URL printed by the server). The root loads `index.html` (Full-Stack & Java, French). Use the two toggles at the top to switch language or CV type.

> Note: `node_modules/` is not committed.  
> Anyone cloning the repo must run `npm install` before using the **Download PDF** button.

---

## <div id="usage">▶️ Usage</div>

-   Open any of the 6 HTML files directly, or start from `index.html`.
-   Use the **FR / EN** toggle (top-right) to switch language for the current CV type.
-   Use the **CV-type toggle** (top-left: Full-Stack & Java / Laravel / Java) to switch CV type while staying in the current language.
-   Click **"Download PDF"** to generate and download an A4 PDF; the file is named `Sami_Regragui_CV(yy.mm.dd).pdf` based on the current date.

---

## <div id="customizing-the-cv">✏️ Customizing the CV</div>

You can reuse this template for another person by editing the HTML content only; the CSS usually stays the same.

**1. Personal information**

In each of the 6 CV files, update:

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

**3. Keeping all 6 files in sync**

When editing shared info (contact details, education, certifications), update it across all 6 files (and `index.html`, which mirrors `merged-fr.html`). Content that differs by CV type (skills emphasis, projects, job title) should only be edited in the relevant type's files.

**4. Adding a new CV type or language**

-   Duplicate an existing file, update its content, and add a new `.cv-type-btn` or `.lang-btn` link in the toggle divs of every file so all pages can reach it.
-   Keep the same IDs and classes (`#cv-container`, `.section__title`, etc.) so that all pages share the same CSS.

---

## <div id="author">👤 Author</div>

Created by **Sami Regragui** as a printable, multi-version, bilingual CV template with automated PDF export.  
Feel free to fork and adapt it for your own profile.
