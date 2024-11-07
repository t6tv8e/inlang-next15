// src/app/root.tsx
import { LanguageProvider } from "@inlang/paraglide-next";
import { languageTag } from "@/paraglide/runtime.js";
import LanguageSwitcherDesktop from "./_components/LanguageSwitcherDesktop";

import "./index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html lang={languageTag()}>
        <body>
          <header>
            <LanguageSwitcherDesktop />
          </header>
          <main className="container mx-auto">{children}</main>
        </body>
      </html>
    </LanguageProvider>
  );
}
