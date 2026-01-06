import { Education } from "../models/Education.js";

export const educations = [
  new Education(
    "Fullstackdeveloper with focus on Javascript", 
    "Chas Academy",
    "Malmö", 
    "September 2025", 
    "Ongoing",
    [
      "HTML",
      "CSS",
      "JavaScript",
      "Framework React",
      "API with Node.js and Express",
      "SQL"
    ]),

  new Education(
    "Sociology and social development work", 
    "Halmstad University",
    "Halmstad",
    "September 2010",
    "July 2014",
    [
      "Studied globalization.",
      "Social development projects.",
      "Swedish welfare system."
    ])
];