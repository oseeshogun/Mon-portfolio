import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GetInTouch from "./components/GetInTouch";

const Home: NextPage = () => {
  const [endTouched, setEndTouched] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Portfolio of Osée Masuaku</title>
        <meta name="description" content="Portfolio of Osée Masuaku,  software engineer specializing in building exceptional web and mobile applications." />
        <meta property="og:title" content="Developer - Osée Masuaku" />
      </Head>
      <Header endTouched={endTouched} />
      <div className={styles.cuateFreelancer}>
        <Image
          src="/Freelancer-cuate.svg"
          alt=""
          height="500"
          width="500"
          layout="responsive"
        />
      </div>
      <Projects endTouched={endTouched} setEndTouched={setEndTouched} />
      <Skills />
      <GetInTouch />
      <p className={styles.copyright}>Designed & Developed by Osée Masuaku</p>
    </div>
  );
};

export default Home;
