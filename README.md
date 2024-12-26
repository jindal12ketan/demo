
# Bath Fitter / Bain Magique Marketing Website

## 📄 Description

The Bath Fitter/Bain Magique marketing website enables the marketing team to build, manage, and optimize lead-generation pages using a no-code interface powered by **Builder.io**. It provides a drag-and-drop experience, A/B testing, and seamless integration for creating dynamic, localized, and accessible web pages.

## ✅ Repo Requirements
- **Code Quality**: Ensure code files are well-documented, clean, and adhere to the latest React/Next.js best practices and optimizations.
- **Modularity**: Maintain a minimal and modular file structure for easier reuse and scalability.
- **Styling**: Use CSS variables for styling. Define reusable CSS variables to align with a "Do Not Repeat Yourself" (DRY) approach.
- **Global State Management**: Utilize the AppStore for handling application state efficiently.
- **Reusability**: Focus on creating reusable components and utilities to enhance maintainability and reduce redundancy across the codebase.

---

## 🚀 Quick Start

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/bathfitter/website-bathfitter-residential.git
   cd website-bathfitter-residential
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the site:
   ```
   http://localhost:3000
   ```

### 🔑 Environment Variables

Add a `.env` file with the following:
```env
NEXT_PUBLIC_BUILDER_API_KEY = your_builder_api_key
```

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **CMS**: Builder.io
- **Styling**: CSS (with modern resets)
- **Global App State**: Zustand 

---

## 📁 Folder Structure (Next.js App Router)

- ...
- src/app/[[...page]]/page.tsx
- src/app/globals.css
- src/app/layout.tsx
- src/app/reset.css
- src/builder-registry.ts
- src/components/builder.tsx
- src/store/useAppStore.ts
- tsconfig.json
- ...
---

## ⤴️ Deployment

Deployment is handled via Azure DevOps pipelines to Azure App Service. Details will be added later.

---

## 🔗 Links

- [builder.io](https://builder.io/)
- [builder.io docs](https://www.builder.io/c/docs/intro)
- [react docs](https://react.dev/)
- [next.js docs](https://nextjs.org/docs)
- [Zustand docs](https://zustand.docs.pmnd.rs/)

---

Built with ❤️ by Bath Fitter Web Team
