import React from 'react'
import styles from './AboutStyles.module.css';
function About() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>
                    About Me
                </h1>
                <p className={styles.description}>
                I am a passionate and skilled software developer with expertise in full-stack development using technologies like Node.js, Express.js, React, Redux, and MongoDB. With a solid foundation in building dynamic, responsive web applications, I have completed impactful projects such as DelishDrive, a comprehensive food delivery application, and a real estate platform, both leveraging the MERN stack for seamless user experiences. My two-month internship at Fringale allowed me to further hone my backend development skills. Additionally, I possess expertise in API integrations, Firebase, and cloud storage solutions, ensuring scalable and efficient applications. With certifications in Python and Data Science, as well as backend web development, I am committed to delivering robust, scalable solutions and continuously enhancing my technical prowess.
                </p>
                {/* <a href={CV} download>
                    <button className="hover">Resume</button>
                </a> */}
            </div>

        </div>

    )
}

export default About