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
        <title>Osée Masuaku | Software Engineer | Portfolio</title>
        <meta name="description" content="Osée Masuaku is a software engineer specializing in building exceptional web and mobile applications. View his portfolio to see his work and skills." />
        <meta name="keywords" content="Osée Masuaku, software engineer, web development, mobile development, portfolio" />
        <meta property="og:title" content="Osée Masuaku | Software Engineer | Portfolio" />
        <meta property="og:description" content="View Osée Masuaku's portfolio to see his exceptional web and mobile applications." />
        <meta property="og:url" content="https://oseemasuaku.com/" />
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
