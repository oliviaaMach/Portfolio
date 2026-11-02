import { sections } from "../../data/sections";
import { contact } from "../../data/contact";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { CopyButton } from "../ui/copyButton";

export function Contact() {
  return (
    <section
      id={sections.contact}
      className="mx-auto flex max-w-6xl flex-col items-start gap-7 px-5 py-20 md:px-8 md:py-28"
    >
      <SectionLabel number="04" label="Kontakt" />

      <h2 className="font-sans font-semibold text-4xl md:text-hero
                      leading-none tracking-[-0.02em]">
        Ska vi bygga
        <br />
        något{" "}
        <span className="decoration-sage decoration-8 underline">ihop?</span>
      </h2>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
        <Button href={`mailto:${contact.email}`}>
          {contact.email}
        </Button>
        <CopyButton text={contact.email} />
      </div>

      <ul className="flex flex-wrap gap-3">
        {contact.links.map((link) => (
          <li key={link.label}>
            <Button
              href={link.href}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} ↗
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}