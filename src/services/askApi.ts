const API_URL = import.meta.env.VITE_API_URL;

type AskResponse = { answer: string };

export async function askOlivia(question: string): Promise<string> {
    // Mockdata innan backend
    if (!API_URL) {
        await new Promise((r) => setTimeout(r, 800));
        return `Bra fråga! Jag checkar vidare på frågan "${question}", tills min backend kopplas in.`;
    }

    const res = await fetch(`${API_URL}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "applicaion/json" },
        body: JSON.stringify({question}),
    });

    if (!res.ok) throw new Error(`HHTP ${res.status}`);
    const data: AskResponse = await res.json();
    return data.answer;

}