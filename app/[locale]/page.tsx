import { getTranslations } from 'next-intl/server';
import React from 'react';
import KhmerWebsitePage from "@/components/KhmerWebsitePage";

export default async function HomePage() {
  const t = await getTranslations("Footer");
  return (
    <div className='text-xl'>
      {/* <h1 className='dark:text-red-300 text-blue-400'>{t("Recommendation")}</h1> */}
      <main>
        <KhmerWebsitePage />
      </main>
    </div>
  );
}
