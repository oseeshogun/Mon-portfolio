import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import styles from "../../../styles/Projects.module.css";
import ProjectItem from "./ProjectItem";
import { IoChevronForwardOutline, IoChevronBackSharp } from "react-icons/io5";

function Projects({
  endTouched,
  setEndTouched,
}: {
  endTouched: boolean;
  setEndTouched: Dispatch<SetStateAction<boolean>>;
}) {
  const projectsListRef = useRef<HTMLUListElement | null>(null);
  const refContainer = useRef<HTMLDivElement>(null);


  const [scrollY, setScrollY] = useState<number>(0);

  let progress = 0;

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);


  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = percentY < 0 ? 0 : (percentY > 1 ? 1 : percentY);
  }

  const getTransform: (progress: number) => string = (progress: number) => {
    let scrollSize = 180;
    if (typeof window !== "undefined") {
      // Client-side-only code
      scrollSize = window.innerWidth > 700 ? 180 : 240;
    }
    return `translateX(-${(progress * scrollSize)}vw)`;
  }

  const getLeft: (index: number) => string = (index: number) => {
    return 30 + (index * 80) + 'vw';
  }

  return (
    <div className={styles.container} ref={refContainer} id="projects">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Some things I’ve worked on</h1>
        <div className={styles.underline}></div>
      </div>

      <ul className={styles.projectsList} ref={projectsListRef}      >
        <li key={1} style={{ left: getLeft(0), transform: getTransform(progress) }}>
          <ProjectItem
            title="Nab LifeStyle"
            description="A commercial raffle app where people buy tickets and win prices."
            technoDescription="Flutter - Express - Sequelize - Heroku - Mysql"
            owner="Faithful SARL"
            ownerLink="https://www.faithful-tech.com/"
            imageUrl="/images/Frame 1.png"
            index={1}
          />
        </li>
        <li key={2} style={{ left: getLeft(1), transform: getTransform(progress) }}>
          <ProjectItem
            title="Masolo"
            description="A chat app where people can send messages and make phone calls."
            technoDescription=""
            owner="Etidlabs"
            ownerLink="http://etidlabs.com/"
            imageUrl="/images/Frame 2.png"
            index={2}
          />
        </li>
        <li key={3} style={{ left: getLeft(2), transform: getTransform(progress) }}>
          <ProjectItem
            title="Bongola Chat"
            description="A chat app with a chat bot, games, news notifications and voice calls."
            technoDescription="Flutter - Firebase -  JavaScript -Express- 
              Python - Django - MongoDB"
            owner={undefined}
            ownerLink={undefined}
            imageUrl="/images/Frame 3.png"
            index={3}
          />
        </li>
      </ul>
    </div>
  );
}

export default Projects;
