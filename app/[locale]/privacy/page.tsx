"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("endUser");
  return (
    <main className="max-w-7xl mx-auto px-4 text-white py-12">
      <h1 className="text-3xl font-bold mb-6">{t("privacyPolicyTitle")}</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("whoWeAreTitle")}</h2>
        <p>
          {t("whoWeAreContent")}{" "}
          <Link className={`underline font-bold text-[#f3801e]`} href={"/"}>
            Reach Agency
          </Link>
        </p>{" "}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("commentsTitle")}</h2>
        <p>{t("commentsContent1")}</p>
        <p className="mt-2">
          {t("commentsContent2", {
            gravatarUrl: "https://automattic.com/privacy/",
          })}
        </p>
        <p className="mt-2">{t("commentsContent3")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("mediaTitle")}</h2>
        <p>{t("mediaContent")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("cookiesTitle")}</h2>
        <p>{t("cookiesContent1")}</p>
        <p className="mt-2">{t("cookiesContent2")}</p>
        <p className="mt-2">{t("cookiesContent3")}</p>
        <p className="mt-2">{t("cookiesContent4")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {t("embeddedContentTitle")}
        </h2>
        <p>{t("embeddedContentContent1")}</p>
        <p className="mt-2">{t("embeddedContentContent2")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("shareDataTitle")}</h2>
        <p>{t("shareDataContent")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          {t("dataRetentionTitle")}
        </h2>
        <p>{t("dataRetentionContent1")}</p>
        <p className="mt-2">{t("dataRetentionContent2")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("yourRightsTitle")}</h2>
        <p>{t("yourRightsContent1")}</p>
        <p className="mt-2">{t("yourRightsContent2")}</p>
      </section>
    </main>
  );
}
