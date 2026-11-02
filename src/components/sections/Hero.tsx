import { Button } from "../ui/Button";
import { ProfileBlob } from "../profile/ProfileBlob";
import { sections } from "../../data/sections";

export function Hero() {
  return (
    <section
      id={sections.top}
      className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 pb-16 pt-6 md:flex-row md:gap-14 md:px-8 md:pb-24 md:pt-12"
    >
      {/* Text */}
      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-3">
            <p className="inline-flex items-center gap-2 self-start rounded-full bg-sage px-3.5 py-2 font-mono text-medium font-semibold">
                <span aria-hidden="true" className="size-2 rounded-full bg-ink" />
                olivia.mach@outlook.com
            </p>
            <p className="inline-flex items-center gap-2 self-start rounded-full bg-sage px-3.5 py-2 font-mono text-medium font-semibold">
                <span aria-hidden="true" className="size-2 rounded-full bg-ink" />
                Öppen för jobb
            </p>
        </div>


        <h1 className="font-display text-hero font-bold leading-[0.97] tracking-[-0.03em] md:text-big-hero">
         En blivande fullstack-utvecklare inspirerad av 
            <span className="bg-linear-to-r from-rose via-rose-deep to-sage bg-clip-text text-transparent 
                            italic font-script tracking-[0.06em]"> kreativitet</span> och 
             <span className="font-mono"> kod</span>
        </h1>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={`#${sections.projects}`}>Se mina projekt</Button>
          <Button href={`#${sections.playground}`} variant="outline">Testa terminalen</Button>
        </div>
      </div>

      {/* Bild */}
      <ProfileBlob />
    </section>
  );
}