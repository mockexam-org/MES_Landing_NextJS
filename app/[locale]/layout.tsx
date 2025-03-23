import { NextIntlClientProvider, Locale, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import React, { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import NavbarComponent from "@/components/navbar";
import { khmerSuwan } from "@/utils/fonts";

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
            <div className={`${khmerSuwan.className} flex flex-col min-h-screen`}>
              <NavbarComponent />
              <main className="h-screen">{children}</main>
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
