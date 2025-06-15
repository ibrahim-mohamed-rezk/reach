import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/home/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/footer/Footer";
import "../globals.css";
import ReduxProvider from "@/libs/store/reduxProvider";
import { ToastContainer } from "react-toastify";

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
      <body className="w-full bg-black relative">
        <ReduxProvider>
          <NextIntlClientProvider>
            <Header />
            <main className="w-full overflow-hidden">{children}</main>
            <Footer />
            <ScrollToTop />
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar
              closeOnClick
              closeButton={false}
              pauseOnHover
              theme="dark"
            />
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
