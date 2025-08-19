// components/Organisms/ProjectsSection.jsx
import { Carousel } from "./Carousel";
import { ProjectCard } from "../Molecules/ProjectCard";

import styles from './ProjectsSection.module.css'

export const ProjectsSection = () => {
  // Array de proyectos con imágenes
  const projects = [
    {
      title: "Clon de Herbal",
      description: "Sitio web estático con HTML/CSS/JS",
      link: "#",
      image: "/projects/herbal.webp"
    },
    {
      title: "Proyecto FM Azul",
      description: "Radio online con HTML/CSS/JS",
      link: "#",
      image: "/projects/fm-azul.webp"
    },
  ];

  return (
    <section className={styles.projects__section}>
      <Carousel>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </Carousel>
    </section>
  );
};
