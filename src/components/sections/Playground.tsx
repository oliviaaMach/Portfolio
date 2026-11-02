import React, { useEffect, useRef, useState } from "react";
import type { LineKind } from "../../types";
import { useTerminal } from "../../hooks/useTerminal";
import { quickCommands } from "../../data/terminal";
import { SectionLabel } from "../ui/SectionLabel";

const lineStyles: Record<LineKind, string> = {
    input: "text-sage",
    output: "text-night-text",
    error: "text-[#E89A9A]",
    system: "text-night-text/60",
};

export function Playground() {
    const { lines, history, busy, run } = useTerminal();
    const [input, setInput] = useState("");
    const [histIndex, setHistIndex] = useState<number | null>(null)

    const logRef = useRef<HTMLDivElement>(null);
    const inputRef =useRef<HTMLInputElement>(null);

    useEffect(() => {
        logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
    }, [lines, busy])

    function submit(e: React.FormEvent) {
        e.preventDefault();
        run(input);
        setInput("");
        setHistIndex(null);
    }

    function onKeyDown(e:React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "ArrowUp" && history.length) {
            e.preventDefault();
            const i = histIndex === null 
                ? history.length - 1 
                : Math.max(0, histIndex - 1);
            setHistIndex(i);
            setInput(history[i]);
        }
        if (e.key === "ArrowDown" && histIndex !==null) {
            e.preventDefault();
            const i = histIndex + 1;
            if (i >= history.length) {
                setHistIndex(null);
                setInput("");
            } else {
                setHistIndex(i);
                setInput(history[i]);
            }
        }
    }
    return (
        <section  
            className="bg-ink px-5 py-20 text-white md:px-8 md:py-28">
            <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-start">
            {/* ========== Intro ========== */}
                <div className="flex flex-col gap-4 md:w-1/3">
                    <SectionLabel 
                        number="03"
                        label="Lekplats"
                        tone="dark" />
                    <h2 className="font-sans font-semibold text-4xl md:text-hero
                                    leading-none tracking-[-0.02em]">
                        Lär känna mig via terminalen
                    </h2>
                </div>

            {/* ========== Terminal ========== */}
                <div className="flex-1 overflow-hidden rounded-[20px] border-2 border-night-line bg-night"
                    onClick={() => inputRef.current?.focus({preventScroll: true})}>
                
                {/* ========== Fönsterlist ========== */}
                    <div className="flex items-center gap-2 border-b border-night-line px-4.5 py-3.5">
                        <span aria-hidden="true" className="size-3 rounded-full bg-[#E89A9A]" />
                        <span aria-hidden="true" className="size-3 rounded-full bg-[#F2D59B]" />
                        <span aria-hidden="true" className="size-3 rounded-full bg-sage" />
                        <span className="ml-2.5 font-mono text-small text-night-text/70">olivia@portfolio: ~ </span>
                    </div>
                
                {/* ========== Logg ========== */}  
                    <div
                        ref={logRef}
                        role="log"
                        aria-live="polite"
                        className="h-[300px] overflow-y-auto p-6 font-mono text-[15px] leading-[1.8]">
                            {lines.map((line) => (
                                <p key={line.id} className={`whitespace-pre-wrap ${lineStyles[line.kind]}`}>
                                    {line.kind === "input" && "$ "}
                                    {line.text}
                                </p>
                            ))}
                            {busy && (
                                <p className="text-night-text/60">
                                    olivia tänker<span className="motion-safe:animate-blink">...</span>
                                </p>
                            )}
                    </div>

                {/* ========== Prompt ========== */}  
                    <form onSubmit={submit}
                        className="flex items-center gap-2 text-sage">
                        <span aria-hidden="true"
                            className="pl-6 py-2">$</span>
                        <label htmlFor="terminal-input" className="sr-only">
                            Skriv ett kommando eller en fråga
                        </label>
                        <input 
                            id="terminal-input" 
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            disabled={busy}
                            autoComplete="off"
                            spellCheck={false}
                            placeholder="skriv här..."
                            className="flex-1 bg-transparent text-night-text font-mono caret-sage outline-none placeholder:text-night-text/30 "       
                        />
                    </form>

                {/* ========== Snabbkommandon ========== */}  
                    <div className="flex flex-wrap gap-2.5 px-6 pb-6">
                        {quickCommands.map((cmd) => (
                            <button
                            key={cmd}
                            type="button"
                            onClick={() => run(cmd)}
                            disabled={busy}
                            className="min-h-11 rounded-[10px] border-[1.5px] border-sage px-4 
                                        font-mono text-medium text-sage transition hover:bg-sage hover:text-ink disabled:opacity-50">
                                {cmd}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}