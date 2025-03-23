import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

import NavbarComponent from "@/components/navbar";
import Footer from "@/components/footer";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params; // Await params before destructuring
  const translations = await getTranslations("Footer", { locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <div className="flex flex-col min-h-screen bg-[#F1F5F9]">
            <NavbarComponent locale={locale} />{" "}
            {/* Pass locale to NavbarComponent */}
            <main className="flex-grow">{children}</main>
            <Footer translations={translations} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
