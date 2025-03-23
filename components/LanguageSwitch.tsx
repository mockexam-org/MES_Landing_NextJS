"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import "@/styles/globals.css";
import { fontMapping, fontUrls } from "../utils/fonts";

const LanguageSwitch = ({ locale }: { locale: string }) => {
  const t = useTranslations('Footer');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fontFamily = fontMapping[locale];
    const fontUrl = fontUrls[fontFamily];

    // Load the font dynamically
    const fontFace = new FontFace(fontFamily, `url(${fontUrl})`);
    fontFace.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
      document.body.style.fontFamily = fontFamily;
    });
  }, [locale]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-full flex justify-between border-b py-4">
      <div className="flex flex-row text-xl">
        <img src={`language_image/${locale}.png`} alt="Avatar" className="w-12 h-12 rounded-full object-cover"></img>
        <select value={locale} onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="kh">KH</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitch;