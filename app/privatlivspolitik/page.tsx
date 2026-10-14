import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description: "Sådan behandler Atelier Copenhagen dine personoplysninger.",
  alternates: { canonical: "/privatlivspolitik" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-[28px] text-cream">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 text-[16px] leading-[1.8] text-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="px-[52px] pt-[160px] pb-[120px] max-[900px]:px-5 max-[900px]:pt-[130px]">
        <article className="max-w-[760px] mx-auto">
          <div className="eyebrow">Atelier Copenhagen</div>
          <h1 className="h2 mt-6">
            Privatlivs<em className="italic text-gold">politik</em>
          </h1>
          <p className="text-[17px] leading-[1.8] text-cream/75 mt-8">
            Her kan du læse, hvordan vi behandler de oplysninger, du giver os, når du kontakter os eller booker en tid.
          </p>

          <Section title="Dataansvarlig">
            <p>
              {site.legalName}
              {site.cvr && <>, CVR {site.cvr}</>}
              {site.address && <>, {site.address}</>}
              {site.email && (
                <>
                  . Kontakt:{" "}
                  <a href={`mailto:${site.email}`} className="text-gold hover:underline underline-offset-4">
                    {site.email}
                  </a>
                </>
              )}
              .
            </p>
          </Section>

          <Section title="Hvilke oplysninger vi indsamler">
            <p>
              Når du udfylder bookingformularen, modtager vi dit navn, telefonnummer, e-mailadresse, den anledning og dato,
              du vælger, samt din eventuelle besked. Ved en opmåling registrerer vi også dine mål, så vi kan sy dit tøj.
            </p>
          </Section>

          <Section title="Formål og retsgrundlag">
            <p>
              Vi bruger oplysningerne til at besvare din henvendelse, aftale en tid og levere det tøj, du bestiller.
              Behandlingen sker for at kunne indgå og opfylde en aftale med dig (databeskyttelsesforordningens artikel 6,
              stk. 1, litra b).
            </p>
          </Section>

          <Section title="Hvor længe vi gemmer dem">
            <p>
              Henvendelser, der ikke fører til en ordre, sletter vi senest 12 måneder efter sidste kontakt. Oplysninger
              knyttet til en ordre gemmer vi, så længe det er nødvendigt for aftalen, og regnskabsmateriale i 5 år efter
              bogføringsloven.
            </p>
          </Section>

          <Section title="Hvem vi deler dem med">
            <p>
              Vi sælger aldrig dine oplysninger. De behandles af vores leverandører af hjemmeside-hosting og e-mail, som
              databehandlere på vores vegne.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Hjemmesiden bruger ikke sporings- eller marketingcookies. Vi gemmer kun dit valg af sprog lokalt i din
              browser.
            </p>
          </Section>

          <Section title="Dine rettigheder">
            <p>
              Du har ret til at få indsigt i, rettet eller slettet dine oplysninger, og til at gøre indsigelse mod
              behandlingen. Skriv til os, hvis du vil gøre brug af dine rettigheder. Du kan klage til Datatilsynet på{" "}
              <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline underline-offset-4">
                datatilsynet.dk
              </a>
              .
            </p>
          </Section>

          <Link href="/" className="btn-outline mt-16">
            ← Tilbage til forsiden
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
