import { useId } from "react";

type Props = {
    text: string
};

export function RotatingRing ({ text }: Props) {
    const id = useId(); // Unikt id, så textPath aldrig krockar

    return (
        <svg
            viewBox="0 0 380 380"
            aria-hidden="true"
            className="absolute inset-0 size-full motion-safe:animate-spin-slow">
            <defs>
                <path id={id} d="M190,190 m-172,0 a172,172 0 1,1 344,0 a172,172 0 1,1 -344,0" />
            </defs>
            <text className="fill-ink font-mono text-[15px] tracking-[4px]">
                <textPath href={`#${id}`}>{text}</textPath>
            </text>
        </svg>
  );
}
