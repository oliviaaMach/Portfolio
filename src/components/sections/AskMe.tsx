import { useEffect, useRef, useState } from "react"
import { useChat } from "../../hooks/useChat"
import { faq } from "../../data/faq"
import { SectionLabel } from "../ui/SectionLabel"

const bubble = {
    olivia: "self-start rounded-chat-me bg-night-line text-white",
    visitor: "self-start rounded-chat-visitor bg-sage font-semibold text-ink",
};

export function AskMe() {
    const { messages, busy, ask } = useChat();
    const [input, setInput] = useState("");
    const logRef = useRef<HTMLDivElement>(null);

{/*========== Scrolla chatten ===========*/}
    useEffect(() => {
        logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth"});
    }, [messages, busy]);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        ask(input);
        setInput("");
    }

    return ( 
        <section className="flex flex-col gap-5 bg-ink px-5 py-12 text-white">
            <SectionLabel number="03" label="Fråga mig" tone="dark" />
            <h2 className="font-sans font-semibold text-4xl md:text-hero
                            leading-none tracking-[-0.02em]">
                Tryck på en fråga
            </h2>

        {/*========== Chattlogg ===========*/}
            <div 
                ref={logRef}
                role="log"
                aria-live="polite"
                className="flex h-[300px] flex-col gap-2.5 overflow-y-auto"
            >
                {messages.map((m) => (
                    <p key={m.id}
                        className={`max-w-[85%] px-4 py-3 text-large leading-normal motion-safe:animate-pop ${bubble[m.from]}`}>
                            {m.text}
                    </p>
                ))}

                {busy && (
                    <p className={`flex gap-1.5 px-4 py-4 ${bubble.olivia}`} aria-label="Olivia skriver">
                        {[0, 150, 300].map((delay) => (
                        <span
                            key={delay}
                            className="size-2 rounded-full bg-white/70 motion-safe:animate-bounce"
                            style={{ animationDelay: `${delay}ms` }}
                        />
                        ))}
                    </p>
                )}
            </div>

    {/*========== Färdiga frågor ==========*/}
        <div className="flex flex-wrap gap-2">
            {faq.map((item) => (
            <button
                key={item.question}
                type="button"
                onClick={() => ask(item.question, item.answer)}
                disabled={busy}
                className="min-h-11 rounded-full border-[1.5px] border-sage px-3.5 text-medium font-semibold text-sage transition active:bg-sage active:text-ink disabled:opacity-50"
            >
                {item.question}
            </button>
            ))}
        </div>

      {/*========== Egen fråga ==========*/}
        <form onSubmit={submit} className="flex gap-2">
            <label htmlFor="chat-input" className="sr-only">Skriv en egen fråga</label>
            <input
            id="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={busy}
            placeholder="Skriv en egen fråga…"
            autoComplete="off"
            className="min-h-12 flex-1 rounded-full border-[1.5px] border-night-line bg-night px-4 text-large text-white outline-none placeholder:text-white/40 focus:border-sage"
            />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          aria-label="Skicka"
          className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sage text-ink disabled:opacity-40"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </form>
    </section>
  );
}