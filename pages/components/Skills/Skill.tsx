import Image from "next/image";
import styles from "../../../styles/Skills.module.css";

export default function Skill({
  skill,
  image,
}: {
  skill: string;
  image: string;
}) {
  return (
    <div className={styles.skillContainer}>
      <div>
        <Image
          src={image}
          alt={skill}
          width={100}
          height={80}
          className={styles.skillImage}
        />
      </div>
      <div>
        <p className={styles.skillDescription}>{skill}</p>
      </div>
    </div>
  );
}
