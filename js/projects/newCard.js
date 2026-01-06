import { projectCard } from "./projectCard.js";

//Project Cards
export const myProjects = [
    new projectCard({
        title: "Pokémon API",
        image: "../assets/imgs/pokedex.png",
        info: "This project is build with HTML, CSS and JavaScript. The user can use the right and left buttons to go through all the OG Pokémons. ",
        tags: ['HTML','CSS', 'JavaScript'],
        link: "https://oliviaamach.github.io/pokiAPI/",
        gtLink: "https://github.com/oliviaaMach/pokiAPI",
    }),

    new projectCard({
        title: "Ping Pong Game",
        image: "../assets/imgs/pingPong.png",
        info: "A simple two-player Pong game built using vanilla JavaScript and the HTML5 Canvas API. This project recreates the classic arcade experience: move the paddles, hit the ball, and score points!",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: "https://oliviaamach.github.io/pingPong-game/",
        gtLink: "https://github.com/oliviaaMach/pingPong-game",
    }),

    new projectCard({
        title: "To Do List",
        image: "../assets/imgs/toDo.png",
        info: "A simple and elegant To-Do List web application built with HTML, CSS, and JavaScript. This app allows users to add, mark as completed, and delete tasks — with data persistence using localStorage, so your tasks remain even after refreshing the page.",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: "https://oliviaamach.github.io/todolist/",
        gtLink: "https://github.com/oliviaaMach/todolist",
    }),
    new projectCard({
        title: "The Drumkit",
        image: "../assets/imgs/drumKit.png",
        info: "This project is build with HTML, CSS and JavaScript. The user can interact with the drumkit by clicking on the pictures or with keyboard keys.",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: "https://oliviaamach.github.io/drumkit/",
        gtLink: "https://github.com/oliviaaMach/drumkit",

    }),
    new projectCard({
        title: "The Dicee Game",
        image: "../assets/imgs/dicee.png",
        info: "This project is build with HTML, CSS and JavaScript where two player roll a dice. The higher roll wins.",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: "https://oliviaamach.github.io/theDiceeGame/",
        gtLink: "https://github.com/oliviaaMach/theDiceeGame",
    }),

        new projectCard({
        title: "Simons Game",
        image: "../assets/imgs/simons.png",
        info: "This project is build with HTML, CSS and JavaScript. The user have to follow the color- and sound sequenses that is shown.",
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: "https://oliviaamach.github.io/simongame/",
        gtLink: "https://github.com/oliviaaMach/simongame",
    })
]