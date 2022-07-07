import Image from "next/image";
import styles from "../../../styles/Projects.module.css";

const ProjectItem = ({
  title,
  description,
  technoDescription,
  owner,
  ownerLink,
  imageUrl,
  index,
}) => {
  return (
    <div
      className={`${styles.projectItem} ${
        index == 2 ? styles.secondProjectItem : ""
      } ${index == 3 ? styles.thirdProjectItem : ""}`}
    >
      <div className={styles.projectDescription}>
        <h1>{title}</h1>
        <p className={styles.projectDescriptionText}>{description}</p>
        <p className={styles.projectDescriptionTechno}>
          {technoDescription}{" "}
          {owner && (
            <>
              <br />
              <a href={ownerLink} target="_blank" rel="noreferrer">
                {" "}
                {owner}
              </a>
            </>
          )}
        </p>
      </div>
      <div className={styles.projectImageContainer}>
        <Image
          src={imageUrl}
          alt="Nab LifeStyle"
          layout="fill"
          className={styles.projectImage}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
