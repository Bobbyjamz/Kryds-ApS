"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { site, phoneHref } from "@/lib/site";
import type { TranslationKey } from "@/lib/translations";

type FormState = "idle" | "submitting" | "success" | "error";

const OCCASIONS: TranslationKey[] = ["occ_business", "occ_wedding", "occ_tux", "occ_other"];

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block font-sans text-[10px] tracking-[.26em] uppercase text-muted">
      {children}
      {required && <span className="text-gold"> *</span>}
    </label>
  );
}

export default function Booking() {
  const ref = useReveal<HTMLElement>();
  const { t } = useLanguage();
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("privacy") !== "on") {
      setError(t("form_error_privacy"));
      return;
    }
    setError(null);
    setState("submitting");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          occasion: fd.get("occasion"),
          date: fd.get("date"),
          message: fd.get("message"),
          website: fd.get("website"), // honeypot
          acceptedPrivacy: true,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("success");
    } catch {
      setState("error");
      setError(t("form_error"));
    }
  };

  const hasInfo = site.phone || site.email || site.address || site.openingHours.length > 0;

  return (
    <section id="book" className="section" ref={ref}>
      <div className="container-x grid grid-cols-[.9fr_1.1fr] gap-24 items-start max-[1000px]:grid-cols-1 max-[1000px]:gap-14">
        <div>
          <SectionHeading eyebrow={t("book_eyebrow")} title={t("book_h2")} accent={t("book_h2_accent")} intro={t("book_intro")} />

          {hasInfo && (
            <dl className="reveal mt-12 flex flex-col gap-7 border-t border-[var(--hairline)] pt-10">
              {site.phone && (
                <div>
                  <dt className="font-sans text-[10px] tracking-[.26em] uppercase text-gold">{t("book_phone")}</dt>
                  <dd className="mt-2">
                    <a href={phoneHref(site.phone)} className="font-serif text-[26px] text-cream no-underline hover:text-gold transition-colors lining-nums">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              )}
              {site.email && (
                <div>
                  <dt className="font-sans text-[10px] tracking-[.26em] uppercase text-gold">{t("book_email")}</dt>
                  <dd className="mt-2">
                    <a href={`mailto:${site.email}`} className="font-serif text-[22px] text-cream no-underline hover:text-gold transition-colors break-all">
                      {site.email}
                    </a>
                  </dd>
                </div>
              )}
              {site.address && (
                <div>
                  <dt className="font-sans text-[10px] tracking-[.26em] uppercase text-gold">{t("book_address")}</dt>
                  <dd className="mt-2 text-[16px] text-cream/80">{site.address}</dd>
                </div>
              )}
              {site.openingHours.length > 0 && (
                <div>
                  <dt className="font-sans text-[10px] tracking-[.26em] uppercase text-gold">{t("book_hours")}</dt>
                  <dd className="mt-2 text-[16px] text-cream/80">
                    {site.openingHours.map((h) => (
                      <div key={h.days} className="flex gap-6">
                        <span className="min-w-[90px] text-muted">{h.days}</span>
                        <span>{h.hours}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          )}
        </div>

        <div className="reveal form-card relative bg-black2 border border-[var(--hairline)] p-12 max-[640px]:p-7">
          {state === "success" ? (
            <div className="py-16 text-center flex flex-col items-center" role="status">
              <span className="w-14 h-14 rounded-full border border-gold flex items-center justify-center text-gold text-[22px]" aria-hidden="true">
                ✓
              </span>
              <h3 className="font-serif text-[34px] mt-7 text-cream">{t("form_success_title")}</h3>
              <p className="text-[15px] text-muted mt-3 max-w-[360px]">{t("form_success_text")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Honeypot mod spam — skjult for mennesker */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <Label htmlFor="name" required>{t("form_name")}</Label>
                <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className="field" />
              </div>

              <div className="grid grid-cols-2 gap-8 max-[640px]:grid-cols-1">
                <div>
                  <Label htmlFor="phone" required>{t("form_phone")}</Label>
                  <input id="phone" name="phone" type="tel" required maxLength={40} autoComplete="tel" className="field" />
                </div>
                <div>
                  <Label htmlFor="email" required>{t("form_email")}</Label>
                  <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" className="field" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 max-[640px]:grid-cols-1">
                <div className="relative">
                  <Label htmlFor="occasion">{t("form_occasion")}</Label>
                  <select id="occasion" name="occasion" defaultValue="" className="field pr-6">
                    <option value="" disabled>
                      {t("form_occasion_placeholder")}
                    </option>
                    {OCCASIONS.map((k) => (
                      <option key={k} value={t(k)}>
                        {t(k)}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-0 bottom-3 text-gold text-[10px]" aria-hidden="true">▼</span>
                </div>
                <div>
                  <Label htmlFor="date">{t("form_date")}</Label>
                  <input id="date" name="date" type="date" className="field" />
                </div>
              </div>

              <div>
                <Label htmlFor="message">{t("form_message")}</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder={t("form_message_placeholder")}
                  className="field resize-y"
                />
              </div>

              <label className="flex items-start gap-3 text-[13px] leading-[1.6] text-muted cursor-pointer">
                <input type="checkbox" name="privacy" required className="mt-[3px] w-4 h-4 accent-gold flex-shrink-0" />
                <span>
                  {t("form_privacy_1")}{" "}
                  <Link href="/privatlivspolitik" className="text-gold underline-offset-4 hover:underline">
                    {t("form_privacy_link")}
                  </Link>
                  .
                </span>
              </label>

              {error && (
                <p role="alert" className="text-[14px] text-danger">
                  {error}
                  {state === "error" && site.phone && (
                    <>
                      {" "}
                      <a href={phoneHref(site.phone)} className="underline">{site.phone}</a>
                    </>
                  )}
                </p>
              )}

              <div className="flex items-center justify-between gap-6 flex-wrap">
                <span className="text-[12px] text-muted/80">{t("form_required")}</span>
                <button type="submit" disabled={state === "submitting"} className="btn-gold cursor-pointer border-none disabled:opacity-60 disabled:cursor-wait">
                  {state === "submitting" ? t("form_sending") : t("form_submit")}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
