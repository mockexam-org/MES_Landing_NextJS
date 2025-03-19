import { Link } from '@/i18n/navigation';
import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
    const t = await getTranslations('HomePage');
  return (
    <div>
      <Link href="/contect">{t("Contect")}</Link>
    </div>
  );
}