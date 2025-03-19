import { NextIntlClientProvider, Locale, hasLocale } from "next-intl";
import LanguageSwitch from "@/components/LanguageSwitch";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import React from "react";
import { getMessages } from "next-intl/server";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div>
            <div className="flex flex-col min-h-screen bg-[#F1F5F9]">
              <Navbar locale = {locale} />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
