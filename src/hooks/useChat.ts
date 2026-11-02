import { useRef, useState } from "react";
import type { ChatMessage } from "../types";
import { ChatGreeting } from "../data/faq";
import { askOlivia } from "../services/askApi";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: 0, from: "olivia", text: ChatGreeting },
    ]);
    const [busy, setBusy] = useState(false);
    const nextId = useRef(1);

    function add(from: ChatMessage["from"], text: string) {
        setMessages((prev) => [...prev, { id: nextId.current++, from, text }]);
    }

    async function ask(question: string, presetAnswer?: string) {
        const q = question.trim();
        if (!q || busy) return;
        
        try {
            let answer: string;
            if (presetAnswer) {
                await wait(600); // En liten paus så vi hinner "tänka"
                answer = presetAnswer
            } else {
                answer = await askOlivia(q);
            }
            add("olivia", answer);
        } catch {
            add("olivia", "Oj, jag når inte servern just nu. Testa en av de andra frågorna så länge!")
        } finally {
            setBusy(false);
        }
    }
    return { messages, busy, ask}
}

