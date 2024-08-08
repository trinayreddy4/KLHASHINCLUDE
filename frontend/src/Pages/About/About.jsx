import React from 'react';
import styles from './About.module.css';
import includePoster from '../../assets/include_poster.png';
import PA from '../../assets/PA.jpg';
import Focus from '../../assets/Focus.png';
const About = () => {
  return (
    <main>
      <section id="about">
        <div className={`${styles.aboutContainer} flex gap-10`}>
          <div className={styles.aboutImage}>
            <img src={includePoster} alt="Include Poster" />
          </div>
          <div className={styles.aboutText}>
            <h1 className='text-center'>#INCLUDE</h1>
            <p>
              #INCLUDE, an annual regal celebration orchestrated by FOCUS, the esteemed student governance body of the Computer Science and Engineering department at KL University, is a symphony of vibrancy, innovation, and unwavering student leadership.
            </p>
            <p>
              Each year, #INCLUDE unveils a majestic theme, seamlessly weaving technical prowess with creative expression. It unfolds as a holistic journey featuring workshops, boot camps, contests, and the enchantment of cultural nights. As the official CSE fest of KL University, #INCLUDE stands as a regal beacon of brilliance, creating a nurturing and inspiring environment fit for every aspiring mind.
            </p>
            <p>
              Annually, witness the grand revelation of a new theme, sparking fresh possibilities and fostering innovation within our esteemed community. At #INCLUDE, innovation elegantly meets creativity, and together, we script indelible moments. This is not merely a fest; it is a royal experience - this is #INCLUDE, where brilliance reigns supreme, and cultural nights add an extra touch of enchantment to our grand celebration.
            </p>
          </div>
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <img src={PA} alt="Include Poster" />
          </div>
          <div className={styles.aboutText}>
            <h1  className='text-center'>Pradhuyogika Anusandhan</h1>
            <p>
            "Pradhuyogika Anusandhan" epitomizes the relentless pursuit of technological inquiry. It fosters an environment where curiosity thrives and boundaries are pushed, encouraging participants to delve deep into the realms of computer science and engineering.
           </p>
            <p>
            This theme celebrates the transformative power of research, recognizing its role in shaping the future. It embodies collaboration and exchange, where ideas converge to fuel groundbreaking innovations.
            </p>
            <p>
            "Pradhuyogika Anusandhan" beckons all to embark on a journey of discovery, where every question leads to new revelations, and every discovery propels us forward. In this odyssey of exploration, the pursuit of knowledge knows no bounds.
            </p>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <img src={Focus} alt="Include Poster" />
          </div>
          <div className={styles.aboutText}>
            <h1  className='text-center'>Focus</h1>
            <p>
            Established in 2013, FOCUS is the official student governance body of the Department of Computer Science and Engineering (CSE) at KL University. It serves as more than just a governing body, cultivating a vibrant community committed to the holistic development of every CSE student.
           </p>
            <p>
            FOCUS comprises nine wings, each crucial in nurturing students' academic and personal growth. With a strong emphasis on innovation and collaboration, FOCUS provides an enriching platform for students to excel.
            </p>
            <p>
            Additionally, FOCUS acts as a catalyst for professional and personal growth, organizing various events like cultural events, workshops, and the prestigious National Level Techno Fest, offering unique opportunities for talent showcase, engagement with cutting-edge technologies, and networking with industry professionals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
