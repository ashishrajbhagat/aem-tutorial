# 🌐 AEM Tutorial Website

This is a **comprehensive tutorial website** for learning **Adobe Experience Manager (AEM)** — covering everything from AEM fundamentals to advanced use cases, real-world scenarios, headless architecture, workflows, dispatcher setup, and much more.

> ✅ Built by Ashish Raj to help developers master AEM through structured content, code snippets, and practical guidance.

---

## 📁 Project Structure

The website is organized into folders based on major AEM topics. Each folder contains related `.html` pages that map directly to sidebar sections.

```
/project-root
├── fundamentals/           # AEM basics, architecture, core concepts
├── authoring/              # Page editing, localization, templates
├── backend/                # Sling models, servlets, OSGi services
├── workflow/               # Workflows, events, workflow steps
├── headless/               # Content Fragments, GraphQL, JSON Exporter
├── infrastructure/         # Dispatcher, runmodes, deployment
├── tools/                  # AEM tools, forms, CRXDE, sling pipes
├── security/               # Authentication, ACLs, permissions
├── cloud/                  # AEM as a Cloud Service, Cloud Manager
├── monitoring/             # Logging, monitoring, performance tuning
├── interview/              # AEM interview Q&A, scenarios, Java questions
├── css/                    # Website styles
├── js/                     # Sidebar navigation, interactivity
├── assets/                 # Images, diagrams, code assets
├── index.html              # Home page
└── README.md               # This file
```

---

## 🧭 Features

- ✅ Sidebar-based navigation (auto-highlight)
- ✅ Organized into 10+ sections based on real-world AEM modules
- ✅ Covers both AEM On-Prem (6.5) and AEM as a Cloud Service (AEMaaCS)
- ✅ Includes Interview Questions, Scenarios & Gotchas
- ✅ Covers Dispatcher, CDN, Sling Models, Workflows, DAM, MSM, etc.
- ✅ Sample code snippets (Java, XML, Dispatcher configs)
- ✅ Support for collapsible cards/accordions in Q&A pages
- ✅ Lightweight, fast, and fully static (no backend needed)

---

## 🚀 Setup & Usage

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/aem-tutorial.git
cd aem-tutorial
```

### 2. Open in Browser
You can directly open `index.html` in your browser.

Or use a simple local server:
```bash
npx serve .
```

### 3. Modify/Add Pages
- Add new topics as `.html` files inside the relevant folder.
- Update `sidebar.js` to reflect the new page.
- Use `<section class="card">` and `<h2>`/`<h3>` to format content.

---

## 📝 Writing Guidelines

- Use consistent heading hierarchy: `<h2>` for page title, `<h3>` for subtopics.
- Wrap each question/answer or topic block in `<section class="card">`.
- Use `<pre><code>` for code blocks with syntax highlighting.

---

## 📚 Content Highlights

### 🔧 Core Sections:
- **AEM Fundamentals** — architecture, runmodes, JCR, OSGi
- **Authoring & Page-Level Concepts** — templates, localization, live copy
- **Backend Development** — Sling models, servlets, services
- **Workflows & Events** — participant steps, event listeners, custom steps
- **Headless & GraphQL** — content fragments, JSON Exporter
- **Dispatcher** — cache, load balancing, invalidation, CDN integration
- **Security** — ACLs, user/group management, secure configs
- **AEMaaCS** — Cloud Manager, Git-based config, pipeline tips
- **Interview Prep** — Q&A, scenarios, Java concepts

---

## 💼 Maintained By

**Ashish Raj**  
- 🧑‍💻 AEM Developer @ Concentrix  
- 🏠 Based in Bihar, India  
- 🌐 [GitHub](https://github.com/ashishrajbhagat)

---

## 📜 License

-

---

> 💬 Feel free to raise issues or contribute improvements!
