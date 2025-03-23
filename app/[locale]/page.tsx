import LanguageSwitch from '@/components/LanguageSwitch';
import LanguageSwitcher from '@/components/NavBar/LanguageSwitch';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export default async function HomePage() {
  const t = await getTranslations('Footer');
  return (
    <div className='text-xl'>
      <h1 className='dark:text-red-300 text-blue-400'>{t('Recommendation')}</h1>
    </div>
  );
}