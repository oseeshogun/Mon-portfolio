import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
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

  const [listIsIntercepting, setListIsIntercepting] = useState<boolean>(false);
  const [keepScroll, setKeepScroll] = useState<boolean>(true);
  const [y, setY] = useState<number>(0);
  const [fixYsetted, setFixYsetted] = useState<boolean>(false);
  const [fixY, setFixY] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setIsMobile(true);
        setEndTouched(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setEndTouched]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const beginHorizontalScroll =
        entry.boundingClientRect.y < -40 && !keepScroll;
      setListIsIntercepting(beginHorizontalScroll);

      if (beginHorizontalScroll && !fixYsetted) {
        setFixY(window.scrollY);
        setFixYsetted(true);
      }
      if (entry.isIntersecting && keepScroll) {
        setKeepScroll(false);
      }
      if (!entry.isIntersecting) {
        // ReInit
        // setListIsIntercepting(false);
        // setKeepScroll(true);
        // setEndTouched(false);
        // projectsListRef.current?.scrollTo(30, 0);
      }
    });

    observer.observe(projectsListRef.current!);

    const onScroll = (event: Event) => {
      if (event.target) {
        // console.log(
        //   "Reached bottom ",
        //   projectsListRef.current.scrollWidth,
        //   projectsListRef.current.scrollLeft,
        //   projectsListRef.current.clientWidth
        // );
        const { scrollLeft, scrollWidth, clientWidth } =
          projectsListRef.current as HTMLUListElement;

        if (scrollLeft == scrollWidth - clientWidth) {
          // TO SOMETHING HERE

          setListIsIntercepting(false);
          setKeepScroll(true);
          setEndTouched(true);
        }
      }
    };

    const listProjects = projectsListRef.current;

    listProjects?.addEventListener("scroll", onScroll);

    const handleNavigation = (event: Event) => {
      const window = event.currentTarget as Window;

      if (listIsIntercepting && !endTouched) {
        // document.body.style.overflow = "hidden";
        // window.scrollTo(y)
        // window.scrollTo(0, fixY);
      }

      if (y > window.scrollY) {
        // console.log("scrolling up");
        // console.log("scrolling", event.pageYOffset);
        if (listIsIntercepting) {
          projectsListRef.current?.scrollBy(-10, 0);
        }
      } else {
        // console.log("scrolling down");
        if (listIsIntercepting) {
          projectsListRef.current?.scrollBy(10, 0);
        }
      }
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handleNavigation);
    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", handleNavigation);
      listProjects?.removeEventListener("scroll", onScroll);
    };
  }, [
    y,
    listIsIntercepting,
    keepScroll,
    endTouched,
    fixY,
    fixYsetted,
    setEndTouched,
  ]);

  const getProportion = (): number => {};

  const goBackward = () => {
    const { scrollLeft, scrollWidth, clientWidth } =
      projectsListRef.current as HTMLUListElement;
    const width = scrollWidth - clientWidth;
    const singleWidth = width / 3;
    projectsListRef.current?.scrollBy({
      top: 0,
      left: -singleWidth,
      behavior: "smooth",
    });
  };

  const goForward = () => {
    const { scrollLeft, scrollWidth, clientWidth } =
      projectsListRef.current as HTMLUListElement;
    const width = scrollWidth - clientWidth;
    const singleWidth = width / 3;
    projectsListRef.current?.scrollBy({
      top: 0,
      left: singleWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container} id="projects">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Some things I’ve worked on</h1>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.projects}>
        <IoChevronBackSharp
          className={styles.prevIcon}
          color="#8f94fb"
          size={50}
          onClick={(e) => goBackward()}
        />
        <IoChevronForwardOutline
          className={styles.nextIcon}
          color="#8f94fb"
          size={50}
          onClick={(e) => goForward()}
        />
        <ul className={styles.projectsList} ref={projectsListRef}>
          <li key={1}>
            <ProjectItem
              title="Nab LifeStyle"
              description="A commercial raffle app where people buy tickets and win prices."
              technoDescription="Flutter - Express - Sequelize - Heroku - Mysql"
              owner="Faithful SARL"
              ownerLink="https://www.faithful-tech.com/"
              imageUrl="/images/Frame 1.png"
            />
          </li>
          <li key={2}>
            <ProjectItem
              title="Masolo"
              description="A chat app where people can send messages and make phone calls."
              technoDescription=""
              owner="Etidlabs"
              ownerLink="http://etidlabs.com/"
              imageUrl="/images/Frame 2.png"
            />
          </li>
          <li key={3}>
            <ProjectItem
              title="Bongola Chat"
              description="A chat app with a chat bot, games, news notifications and voice calls."
              technoDescription="Flutter - Firebase -  JavaScript -Express- 
              Python - Django - MongoDB"
              owner={undefined}
              ownerLink={undefined}
              imageUrl="/images/Frame 3.png"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
