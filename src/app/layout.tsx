/**
 * @file Root Layout Component
 * @description Base layout template for all pages
 * @property {Object} metadata - SEO metadata
 * @property {React.ReactNode} children - Page content
 */
// Default pages template
// This layout is used for all pages that don't have a specific layout
// page.tsx will use this layout to render the page content
// This layout can be customized to include a header, footer, or other common elementsi

import './reset.css';
import './brand.css';

// TODO: Chck if needed
export const metadata = {
  title: 'Bathfitter.com',
  description: 'Bathfitter.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}