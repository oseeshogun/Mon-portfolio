import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import styles from "../../../styles/Skills.module.css";
import Skill from "./Skill";

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.skills}>
      {/* <div className={styles.titleContainer}>
        <h1 className={styles.title}>Notable Skills</h1>
        <div className={styles.underline}></div>
      </div> */}
      <div className={styles.skillsContainer}>
        <Marquee speed={isMobile ? 120 : 80} pauseOnHover={isMobile}>
          <Skill image="/images/skills/html.png" skill="Html & Css" />
          <Skill image="/images/skills/django.png" skill="Django" />
          <Skill image="/images/skills/express.png" skill="Express" />
          <Skill image="/images/skills/flask.png" skill="Flask" />
          <Skill image="/images/skills/flutter.png" skill="Flutter & Dart" />
          <Skill image="/images/skills/gatsby.png" skill="Gatsby" />
          <Skill
            image="/images/skills/gcloud.png"
            skill="Google Cloud Platform"
          />
          <Skill image="/images/skills/git.png" skill="Git" />
          <Skill image="/images/skills/graphql.png" skill="GraphQL" />
          <Skill image="/images/skills/heroku.png" skill="Heroku" />
          <Skill image="/images/skills/js.png" skill="JavaScript" />
          <Skill image="/images/skills/mongodb.png" skill="MongoDB" />
          <Skill image="/images/skills/nextjs.png" skill="Nextjs" />
          <Skill image="/images/skills/python.png" skill="Python" />
          <Skill image="/images/skills/react.png" skill="React" />
        </Marquee>
      </div>
    </div>
  );
}
