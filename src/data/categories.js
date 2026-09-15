import { projects } from "./projects";

export const categories = [
    {
        "id": 1,
        "name": "Oktatási és tanulásmódszertani projektek",
        "desc": "Tanulási folyamatokat, digitális tananyagokat és hatékonyabb felkészülést támogató munkák.",
        "projects": projects.filter((project) => project.category === "learning")
    },
    {
        "id": 2,
        "name": "Programozási és webfejlesztési munkák",
        "desc": "Kódoláshoz, objektumorientált gondolkodáshoz és gyakorlati fejlesztési szemlélethez kapcsolódó projektek.",
        "projects": projects.filter((project) => project.category === "development")
    },
    {
        "id": 3,
        "name": "Angol nyelvi és nemzetközi projektek",
        "desc": "Nyelvi, kulturális és nemzetközi tapasztalatokból építkező anyagok.",
        "projects": projects.filter((project) => project.category === "international")
    },
    {
        "id": 4,
        "name": "Statisztikai és kutatási munkák",
        "desc": "Elemzésekhez, publikációkhoz és szakmai prezentációkhoz kapcsolódó projektek.",
        "projects": projects.filter((project) => project.category === "research")
    },
]
