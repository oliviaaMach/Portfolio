import type { FaqItem } from "../types";
import { contact } from "./contact";

export const ChatGreeting = "Hej! Jag heter Olivia. Välj en fråga nedan eller skriv en egen."
export const faq: FaqItem[] = [
    {
        question: "Vem är du?",
        answer: "Utvecklare med fokus på frontend: JavaScript, TypeScript och React Native."
    },
    {
        question: "Vad har du för utbildningsbakgrund?",
        answer: "Jag är beteendevetare, sociolog, i grund och botten.. Jag valde att skola om mig till utvecklare och studerar för närvarande till fullstackutvecklare med inriktning JavaScript på Chas Academy."
    },
    {
        question: "Vad är aktuellt just nu?",
        answer: "Just nu är jag ute på min LIA-praktik hos NordAxon. Där kommer jag att var fram till slutet av April 2027."
    },
    {
        question: "Favoritstack?",
        answer: "TypeScript, React och Tailwind CSS"
    },
    {
        question: "Öppen för arbete?",
        answer: `Absolut! Jag är öppen för alla möjligheter för att bredda min kompetens och utveckling. Mejla mig på - ${contact.email} - så tar vi en fika!`
    },

]