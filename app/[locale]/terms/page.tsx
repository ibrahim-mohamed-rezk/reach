"use client";

import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations("terms");
  return (
    <main className="max-w-7xl text-white mx-auto px-4 py-8 text-justify">
      <h1 className="text-2xl font-bold mb-6 text-center">{t("title")}</h1>
      <p className="mb-4">{t("intro")}</p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li>
          <strong>{t("acceptanceTitle")}</strong>
          <br />
          {t("acceptanceContent")}
        </li>
        <li>
          <strong>{t("useTitle")}</strong>
          <br />
          <span>{t("useLicense")}</span>
          <br />
          <span>{t("useProhibited")}</span>
        </li>
        <li>
          <strong>{t("ipTitle")}</strong>
          <br />
          <span>{t("ipOwnership")}</span>
          <br />
          <span>{t("ipPersonal")}</span>
        </li>
        <li>
          <strong>{t("privacyTitle")}</strong>
          <br />
          {t("privacyContent")}
        </li>
        <li>
          <strong>{t("disclaimerTitle")}</strong>
          <br />
          <span>{t("disclaimerAccuracy")}</span>
          <br />
          <span>{t("disclaimerLiability")}</span>
        </li>
        <li>
          <strong>{t("modificationsTitle")}</strong>
          <br />
          {t("modificationsContent")}
        </li>
        <li>
          <strong>{t("lawTitle")}</strong>
          <br />
          {t("lawContent")}
        </li>
        <li>
          <strong>{t("contactTitle")}</strong>
          <br />
          {t.rich("contactContent", {
            email: () => (
              <a
                href="mailto:reach@reachksa.com"
                className="text-blue-600 "
              >
                reach@reachksa.com
              </a>
            ),
            contact: (chunks) => (
              <a href="/contact-us" className="text-blue-600 ">
                {chunks}
              </a>
            ),
          })}
        </li>
      </ol>
      <h2 className="text-xl font-semibold mt-8 mb-4">{t("faqTitle")}</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong>{t("faq1Q")}</strong>
          <br />
          {t("faq1A")}
        </li>
        <li>
          <strong>{t("faq2Q")}</strong>
          <br />
          {t("faq2A")}
        </li>
        <li>
          <strong>{t("faq3Q")}</strong>
          <br />
          {t.rich("faq3A", {
            email: () => (
              <a
                href="mailto:reach@reachksa.com"
                className="text-blue-600 "
              >
                reach@reachksa.com
              </a>
            ),
            contact: (chunks) => (
              <a href="/contact-us" className="text-blue-600 ">
                {chunks}
              </a>
            ),
          })}
        </li>
      </ol>
    </main>
  );
}
