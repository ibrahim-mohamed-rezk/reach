import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/home/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/footer/Footer";
import "../globals.css";
import ReduxProvider from "@/libs/store/reduxProvider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="w-full bg-black">
        <ReduxProvider>
          <NextIntlClientProvider>
            <body className="w-full relative">
              <Header />
              <main>{children}</main>
              <Footer />
              <ScrollToTop />
            </body>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
