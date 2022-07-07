import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { SiLinkedin, SiGithub, SiMedium } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ endTouched }: { endTouched: boolean }) => {
  return (
    <nav className={styles.header}>
      <Image
        src="/rectangle.svg"
        alt=""
        className={styles.rectangleImage}
        layout="fill"
      />

      <div className={styles.topHeader}>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/osee-masuaku/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin size="1.5rem" color="white" className={styles.icon} />
          </a>
          <a
            href="https://github.com/oseeshogun"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size="1.5rem" color="white" className={styles.icon} />
          </a>

          <a
            href="https://omasuaku.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SiMedium size="1.5rem" color="white" className={styles.icon} />
          </a>
        </div>
        <ul className={styles.onglets}>
          <li>
            <Link href="#home">
              <a className={styles.ongletItem}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a className={styles.ongletItem}>Projects</a>
            </Link>
          </li>

          {endTouched ? (
            <li>
              <Link href="#contact">
                <a className={styles.ongletItem}>Contact</a>
              </Link>
            </li>
          ) : (
            <li>
              <a className={styles.ongletItem}>Contact</a>
            </li>
          )}
        </ul>
        {/* <div className={styles.mobileHamburger}>
          <GiHamburgerMenu size="1.5rem" color="white" />
        </div> */}
      </div>
      <div className={styles.cuateFreelancer}>
        <Image
          src="/Freelancer-cuate.svg"
          alt=""
          height="500"
          width="500"
          layout="responsive"
        />
      </div>
      <div className={styles.headerTextContainer}>
        <p className={styles.Iam}>👋 Hi, I am</p>
        <p className={styles.MyName}>Osée Masuaku</p>
        <p>DEVELOPER</p>
      </div>
      <div className={styles.description}>
        I am a software engineer specializing in building (and occasionally
        designing) exceptional web and mobile applications.
      </div>
    </nav>
  );
};

export default Header;
