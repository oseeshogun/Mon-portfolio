import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.cuateFreelancer}>
        <Image
          src="/Freelancer-cuate.svg"
          alt=""
          height="500"
          width="500"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Home;
