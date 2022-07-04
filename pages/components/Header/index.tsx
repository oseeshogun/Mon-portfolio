import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { SiLinkedin, SiGithub, SiMedium } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
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
          <SiLinkedin size="1.5rem" color="white" className={styles.icon} />
          <SiGithub size="1.5rem" color="white" className={styles.icon} />
          <SiMedium size="1.5rem" color="white" className={styles.icon} />
        </div>
        <ul className={styles.onglets}>
          <li>
            <Link href="#home">
              <a className={styles.ongletItem}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#home">
              <a className={styles.ongletItem}>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="#home">
              <a className={styles.ongletItem}>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="#home">
              <a className={styles.ongletItem}>Contacts</a>
            </Link>
          </li>
        </ul>
        <div className={styles.mobileHamburger}>
          <GiHamburgerMenu size="1.5rem" color="white" />
        </div>
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
