import { utilService } from "../services/utilService";

const students = [
  {
    id: utilService.generateId(),
    name: "Brad Pitt",
    age: 24,
    major: "Film Studies",
    university: "Tel Aviv University",
    averageGrade: 88,
  },
  {
    id: utilService.generateId(),
    name: "Angelina Jolie",
    age: 22,
    major: "International Relations",
    university: "Hebrew University of Jerusalem",
    averageGrade: 92,
  },
  {
    id: utilService.generateId(),
    name: "Leonardo DiCaprio",
    age: 23,
    major: "Environmental Science",
    university: "Ben-Gurion University",
    averageGrade: 90,
  },
  {
    id: utilService.generateId(),
    name: "Meryl Streep",
    age: 21,
    major: "Drama",
    university: "University of Haifa",
    averageGrade: 95,
  },
  {
    id: utilService.generateId(),
    name: "Denzel Washington",
    age: 25,
    major: "Political Science",
    university: "Bar-Ilan University",
    averageGrade: 87,
  },
  {
    id: utilService.generateId(),
    name: "Kate Winslet",
    age: 22,
    major: "Literature",
    university: "Technion",
    averageGrade: 91,
  },
  {
    id: utilService.generateId(),
    name: "Tom Hanks",
    age: 24,
    major: "History",
    university: "Weizmann Institute of Science",
    averageGrade: 89,
  },
  {
    id: utilService.generateId(),
    name: "Natalie Portman",
    age: 23,
    major: "Psychology",
    university: "Princeton University",
    averageGrade: 93,
  },
];

export default students;
