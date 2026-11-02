import { useRef, useState } from "react";
import type { LineKind, TerminalLine } from "../types";
import { commands, welcome } from "../data/terminal";
import { askOlivia } from "../services/askApi";

const initialLines: TerminalLine[] = welcome.map((text, i) => ({
    id: -(i + 1),
    kind: "system",
    text,
}));

export function useTerminal() {
    const [lines, setLines] = useState<TerminalLine[]>(initialLines);
    const [history, setHistory] = useState<string[]>([]);
    const [busy, setBusy] = useState(false);
    const nextId = useRef(0);

    function add(kind: LineKind, texts: string[]) {
        setLines((prev) => [
            ...prev,
            ...texts.map((text) => ({ id: nextId.current++, kind, text })),
        ]);
    }

    async function run(raw: string) {
        const input = raw.trim();
        if (!input || busy) return;

        add("input", [input]);
        setHistory((h) => [...h, input])

        const key = input.toLowerCase();
        if (key === "clear") {
            setLines(initialLines);
            return;
        }

       if (key === "help") {
        const rows: [string, string][] = [
            ...Object.entries(commands)
            .filter(([, cmd]) => !cmd.hidden)
            .map(([name, cmd]): [string, string] => [name, cmd.description]),
            ["clear", "rensa terminalen"],
        ];

        const width = Math.max(...rows.map(([name]) => name.length)) + 3;

        add("output", [
            ...rows.map(([name, desc]) => name.padEnd(width) + desc),
            "…eller skriv en egen fråga!",
        ]);
        return;
        }

        if (key === "ls -a") {
        const secrets = Object.entries(commands)
            .filter(([, cmd]) => cmd.hidden)
            .map(([name]) => "." + name.replaceAll(" ", "-"));
        add("output", [".", "..", ...secrets]);
        return;
        }
        
        const cmd = commands[key];
        if (cmd) {
            add("output", cmd.output);
            return;
        }

        // Okänt kommando -> fråga backend
        setBusy(true);
        try {
            const answer = await askOlivia(input);
            add("output", [answer]);
        } catch {
            add("error", [`Hoppsan, servern svarar inte just nu. Prova "help" så länge.`]);
        } finally {
            setBusy(false);
        }
    }
    return { lines, history, busy, run }
}