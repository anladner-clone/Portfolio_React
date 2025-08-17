import { HeroSection } from "../Organisms/HeroSection";
import { ProjectsSection } from "../Organisms/ProjectsSection";

import styles from './HomeTemplate.module.css'

export const HomeTemplate = ({classHome}) => {
  return (
    <main className={`${styles.main} ${classHome}`}>
      <HeroSection />
      <ProjectsSection />
    </main>
  );
};
