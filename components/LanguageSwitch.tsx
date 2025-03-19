"use client"
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import "@/styles/globals.css";

const LanguageSwitch = ({locale}:{locale:string})=>{
  const t =useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    const newlocale = e.target.value as string ;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newlocale}/${path}`);

  };
  return(
    <div className="w-full flex justify-between border-b py-4 ">
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
export default LanguageSwitch ;
