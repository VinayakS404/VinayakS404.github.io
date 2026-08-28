import html from "../assets/html-logo.svg";
import css from "../assets/css-logo.svg";
import js from "../assets/js-logo.svg";
import react from "../assets/react-logo.svg";
import tailwind from "../assets/tailwind-logo.svg";
import figma from "../assets/figma-logo.svg";
import java from "../assets/Java-logo.png";
import springBoot from "../assets/Spring-boot-logo.png";
import mySQL from "../assets/MySQL_logo.svg.png";
import postgres from "../assets/Postgresql_elephant.svg.png";
import mongodb from "../assets/MongoDB.png";
import docker from "../assets/docker.png";

const rawFrontEndData = [
  {
    name: "HTML",
    desc: "Structure of web pages",
    img: html,
    bg: "bg-[#6d4c2b]",
  },
  {
    name: "CSS",
    desc: "Styles website visual layout",
    img: css,
    bg: "bg-[#472f57]",
  },
  {
    name: "JS",
    desc: "Makes websites interactive",
    img: js,
    bg: "bg-[#81812e]",
  },
  {
    name: "React.js",
    desc: "UI-building JS library",
    img: react,
    bg: "bg-[#32555e]",
  },
  {
    name: "Tailwind",
    desc: "Utility-first CSS framework",
    img: tailwind,
    height: "h-6",
    bg: "bg-[#32555e]",
  },
  {
    name: "Figma",
    desc: "Interface design tool",
    img: figma,
    bg: "bg-[#305522]",
  },
];

const rawBackEndData = [
  {
    name: "Java",
    desc: "Server-side language",
    img: java,
    bg: "bg-[#ffffff]",
  },
  {
    name: "Spring Boot",
    desc: "Java backend framework",
    img: springBoot,
    bg: "bg-[#3a5c30]",
  },
  {
    name: "MySQL",
    desc: "Relational database",
    img: mySQL,
    height: "h-6",
    bg: "bg-[white]",
  },
  {
    name: "PostgreSQL",
    desc: "Advanced relational database",
    img: postgres,
    bg: "bg-[#41697d]",
  },
{
  name: "MongoDB",
  desc: "NoSQL document database",
  img: mongodb,
  bg: "bg-[white]",
},
];

const rawDevOpsCloudData = [
  {
    name: "Docker",
    desc: "Containerization platform",
    img: docker,
    bg: "bg-[white]",
  },
];

export const frontEndData = rawFrontEndData.map((items, index) => ({
  ...items,
  id: `frontend-${items.name}-${index}`,
}));

export const backEndData = rawBackEndData.map((items, index) => ({
  ...items,
  id: `backend-${items.name}-${index}`,
}));

export const devOpsCloudData = rawDevOpsCloudData.map((items, index) => ({
  ...items,
  id: `devops-${items.name}-${index}`,
}));