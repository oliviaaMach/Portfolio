import type { Command } from "../types";
import { contact } from "./contact";

export const welcome = [
    "Välkommen till olivia.sh v1.0",
    'Klicka på ett kommando | Skriv "help" | Ställ en fråga till mig',
];

export const commands: Record<string, Command> = {
    ommig: {
        description: "Vem är jag?",
        output: [
            "Olivia Mach",
            "Student · Fullstackutvecklare JavaScript · Chas Academy",
            "Mamma · Luna · Mavis · William"
        ],
    },
    intressen: {
        description: "Vad jag gillar",
        output: [
            "→ Bygga appar med kod",
            "→ Games · Final Fantasy · MineCraft · Palworld · Pokémon",
            "→ Böcker · J.K Rowling · Khaled Hosseini · Dan Brown  ",
            "→ Hantverk · Sticka · Virka",
            "→ Trädgård · Odla · Ogräs · Dahlior",  
        ],
    },
    skills: {
        description: "Min verktygslåda",
        output: [
            "Frontend",
            "Backend",
            "Språk · HTML · CSS · Tailwind CSS · JavaScript · TypeScript · React Native",
        ],
    },
    projekt: {
        description: "Projekt som jag har byggt under min kod-resa",
        output: [
            "Nordiska Bank      [Skolprojekt]",
            "ShopFlow           [Skolprojekt]",
            "FocusTrack         [Skolprojekt]",
            "WeatherApp",
            "To Do List",
            "PokéDex",
            "PingPong game",
            "The DrumKit",
            "Simons Game",
            "· Scrolla upp för utvalda projekt",
        ],
    },
    kontakt: {
        description: "Hör av dig!",
        output: [`
            mejl: ${contact.email}, 
            "github: github.com/oliviaamach",
            "linkedIn: https://www.linkedin.com/in/olivia-mach-0b433811a/"
            "discord: olivia.m_10056",
        `],
    },
    kaffe: {
        description: "",
        output: [
            "Godkänd 200: OK",
            "Kaffe är gott!",
        ],
        hidden: true,
    }, 
     te: {
        description: "",
        output: [
            "Fel 418: Jag är en tekanna ",
            "Försök igen efter kaffe.",
        ],
        hidden: true,
    }, 
    "sudo-hire-olivia": {
        description: "",
        output: [
            "[sudo] behörighet beviljas ✓",
            `mejla ${contact.email} så fikar vi!`,
        ],
        hidden: true,
    },
    hint: {
        description: "psst… hemligheter",
        output: [
            "Det finns hemliga kommandon här.",
            "→ Jag vill ha det svart för att vakna till liv",
            "→ På Linux ber man om lov med sudo. Tänk om du kunde anställa mig så…",
            "→ Riktiga utvecklare vet att dolda filer syns med ls -a",
        ],
},
};

export const quickCommands = ["omMig", "intressen", "skills", "projekt", "kontakt",]