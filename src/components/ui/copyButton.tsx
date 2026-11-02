import { useEffect, useState } from "react";

type Props = { text: string; label?: string };

export function CopyButton({ text, label = "Kopiera mejl" }: Props) {
  const [copied, setCopied] = useState(false);

  // Återställ texten efter 2 sekunder
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Kopiering blockerad (t.ex. gammal webbläsare) – gör inget
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-btn border-2 border-ink bg-paper px-5 font-semibold text-ink transition hover:bg-paper-light"
    >
      {copied ? "Kopierat! ✓" : label}
    </button>
  );
}