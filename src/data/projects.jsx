const projectsRaw = [
  {
    id: 1,
    name: "Comming soon",
    technologies: ["none", "none", "none", "none"],
    desc: "In progress",
    website: true,
    websiteLink: "https://dinogameonline.io/",
    sourceLink: "https://github.com/VinayakS404",
    img: "variable",
  },
  /*
  {
    id: 2,
    name: "APPLE PIE",
    technologies: ["SpringBoot", "SQL", "Python"],
    desc: "adf I am curre the terently pursuing Bachelor of Computer Applications (BCA) while learning Java full-stack development alongside my studies. These are the technologies I'm currently working with as I continue building projects and improving my practical skills",
    website: false,
    websiteLink: "xyz.com",
    sourceLink: "github.com///",
    img: "variable",
  },
  {
    id: 3,
    name: "APPLE PIE",
    technologies: ["JS", "React", "SpringBoot", "SQL", "Python"],
    desc: "adf I am curre the  as I continue building projects and improving skills I am currently pursuing Bachelor of Computer Applications (BCA) while learning Java full-stack development alongside my studies. These are the technologies I'm currently working with as I continue building projects and improving my practical skills",
    website: true,
    websiteLink: "xyz.com",
    sourceLink: "github.com///",
    img: "variable",
  },
  {
    id: 4,
    name: "APPLE PIE",
    technologies: ["JS", "React", "Python"],
    desc: "adf I am curre the tcticalns (BCA) while learning Java full-stack development alongside my studies. These are the technologies I'm currently working with as I continue building projects and improving my practical skills",
    website: false,
    websiteLink: "xyz.com",
    sourceLink: "github.com///",
    img: "variable",
  },
  {
    id: 5,
    name: "APPLE PIE",
    technologies: ["JS", "React", "SpringBoot", "SQL"],
    desc: "adf I am curre rking with as I continue building projects and iava full-stack development alongside my studies. These are the technologies I'm currently working with as I continue building projects and improving my practical skills",
    website: false,
    websiteLink: "xyz.com",
    sourceLink: "github.com///",
    img: "variable",
  },
  {
    id: 6,
    name: "APPLE PIE",
    technologies: ["JS", "SQL", "Python"],
    desc: "adf I am curre the technologies I'm currently working with as I continue building projects and improving my practical skills I am currently pursuing Bachelor of Computer Applications (BCA) while learning Java full-stack development alongside my studies. These are the technologies I'm currently working with as I continue building projects and improving my practical skills",
    website: true,
    websiteLink: "xyz.com",
    sourceLink: "github.com///",
    img: "variable",
  },
  */
];

export const projects = projectsRaw.map((items, index) => ({
  ...items,
  id: `projects-${items.name}-${index}`,
}));
