{/*========== Filter vid projektsektionen ===========*/}
export type Category = "Frontend" | "Backend" | "Mobile";
export type Filter = Category | "Alla";

{/*========== Terminalen ===========*/}
export type LineKind = "input" | "output" | "error" |  "system";
export interface TerminalLine {
    id: number;
    kind: LineKind;
    text: string;
}
export interface Command {
    description: string;
    output: string [];
    hidden?: boolean;
}

{/*========== Projekt ===========*/}
export interface Project {
    name: string;
    category: Category;
    description: string;
    stack: string [];
    cover: "rose" | "sage" | "ink";
    live?: string;
    github?: string;
}

{/*========== Fakta ===========*/}
export interface Fact {
    label: string; 
    value: string;
    highlight?: boolean; // true = grön ruta
}

{/*========== Faq ===========*/}
export interface FaqItem {
    question: string;
    answer: string;
}

export interface ChatMessage {
    id: number;
    from: "olivia" | "visitor";
    text: string;
}
