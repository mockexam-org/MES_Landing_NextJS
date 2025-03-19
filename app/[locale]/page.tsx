import { getTranslations } from 'next-intl/server';
import React from 'react';

export default async function HomePage() {
  const t = await getTranslations('Footer');
  return (
    <div className='text-xl'>
    </div>
  );
}