"use client";
import { usePathname, useRouter } from "@/lib/i18n";
import { AvailableLanguageTag } from "@/paraglide/runtime";

export default function LanguageSwitcherDesktop() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (language: AvailableLanguageTag) => {
    router.replace(pathname, { locale: language });
  };

  return (
    <div className="hidden lg:flex flex-1 justify-start gap-2">
      <div onClick={() => handleLanguageChange("en")}>
        <div className="btn btn-sm btn-primary btn-outline">EN</div>
      </div>
      <div onClick={() => handleLanguageChange("fr")}>
        <div className="btn btn-sm btn-primary btn-outline">FR</div>
      </div>
      <div onClick={() => handleLanguageChange("nl")}>
        <div className="btn btn-sm btn-primary btn-outline">NL</div>
      </div>
      <div onClick={() => handleLanguageChange("de")}>
        <div className="btn btn-sm btn-primary btn-outline">DE</div>
      </div>
    </div>
  );
}
