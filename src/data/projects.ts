import type { Filter, Project } from "../types";

export const filters: Filter[] = ["Alla", "Frontend", "Backend", "Mobile", ];
export const projects: Project[] = [
    {
        name: "WeatherApp",
        category: "Frontend",
        description:"En responsiv väderapp med stadssökning, aktuella väderförhållanden, timprognos och femdagarsprognos, favoriter, kartvy, mörkt läge, språkval samt stöd för Celsius och Fahrenheit.",
        stack: ["React", "TypeScript", "API", ],
        cover: "sage",
        live: "https://oliviaamach.github.io/weatherApp/",
        github: "https://github.com/oliviaaMach/weatherApp",
    },
    {
        name: "To Do List",
        category: "Frontend",
        description:"En stilren och elegant att-göra-lista byggd med HTML, CSS och JavaScript. Appen låter användare lägga till, markera som slutförda och ta bort uppgifter. Med hjälp av localStorage sparas uppgifterna även efter att sidan har laddats om.",
        stack: ["HTML", "CSS", "JavaScript",],
        cover: "ink",
        live: "https://oliviaamach.github.io/todolist/",
        github: "https://github.com/oliviaaMach/todolist",
    },
    {
        name: "PokéDex",
        category: "Frontend",
        description:"Det här projektet är byggt med HTML, CSS och JavaScript. Användaren kan navigera genom alla original-Pokémon med hjälp av höger- och vänsterknapparna.",
        stack: ["HTML", "CSS", "JavaScript"],
        cover: "rose",
        live: "https://oliviaamach.github.io/pokiAPI/",
        github: "https://github.com/oliviaaMach/pokiAPI",
    },
]; 