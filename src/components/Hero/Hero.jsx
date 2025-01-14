import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Azizur Rahman Ankon</h1>
        <p className={styles.description}>
          I am a passionate and dedicated Full-Stack Developer with a focus on
          creating dynamic and user-friendly websites and mobile applications.
          With expertise in Flutter, I aim to deliver seamless cross-platform
          solutions that combine functionality and aesthetic appeal. As a
          fresher in the industry, I am eager to learn, adapt, and contribute to
          innovative projects that solve real-world problems.
        </p>
        <a href="mailto:azizurankon@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/ankon.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
