import { RotatingRing } from "./RotatingRing";

type Props = {
  src?: string;  // valfri, tills du har din bild
  alt?: string;
};

export function ProfileBlob({ src, alt = "Olivia Mach" }: Props) {
  return (
    <div className="relative size-[240px] md:size-[380px]">
      {/* Ringen bara på desktop */}
      <div className="hidden md:block">
        <RotatingRing text="FRONTEND · FULLSTACK · JAVASCRIPT · REACT NATIVE · TYPESCRIPT · TAILWIND CSS ·  " />
      </div>

      {/* Blob-delen */}
      <div className="absolute inset-0 md:inset-[10.5%]">
        <div className="absolute inset-0 translate-x-3 translate-y-3 
                        rounded-blob bg-sage md:translate-x-[18px] md:translate-y-[18px]" />
        <div className="absolute inset-0 overflow-hidden rounded-blob bg-rose">
          {src ? (
            <img src={src} alt={alt} className="size-full object-cover" />
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-1 text-ink">
              <span className="font-display text-5xl font-bold md:text-7xl">OM</span>
            </div>
          )}
        </div>
      </div>

      {/* Sticker-badge */}
      <span className="absolute -right-2 bottom-6 -rotate-6 
                        rounded-xl border-2 border-ink bg-paper px-3.5 py-2.5 
                        font-mono text-[13px] font-semibold md:bottom-9 md:right-0">
        &lt; / &gt; sedan 2025
      </span>
    </div>
  );
}