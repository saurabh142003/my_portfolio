import React from 'react';
import styles from '../EducationExperience/EduExp.module.css';
import { useTheme } from '../../common/ThemeContext';

// Briefcase Icon
const BriefcaseIcon = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill={color || 'black'}
  >
    <path d="M16 2h-3V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H8c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-5 0h-2v1h2V2zm4 16c0 .553-.447 1-1 1H6c-.553 0-1-.447-1-1V7h12v11z"/>
  </svg>
);

// Graduation Cap Icon
const GraduationCapIcon = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill={color || 'black'}
  >
    <path d="M12 2l-7 4v4h14V6l-7-4zm0 2l5 2.5v2H7V6.5L12 4zm0 6v5l-7-3.5V9l7 3.5V10zm6 9v-2H6v2h12z"/>
  </svg>
);

const EducationExperience = () => {
  const experience = [
    {
      position: 'ReactJs Developer',
      company: 'Botspot Ai, 2024 December - 2025 January',
    },
    {
      position: 'Full Stack Developer',
      company: 'Fringale, 2024 August - 2024 October',
    },
  ];

  const education = [
    {
      position: "Bachelor's Degree in Engineering",
      company: 'Theem College of Engineering, 2025',
    },
    {
      position: 'Higher Secondary Education',
      company: "Bhavan's College, 2021",
    },
    {
      position: 'High School Education',
      company: 'St. Aloysius High School, 2019',
    },
  ];

  const { theme } = useTheme();

  const iconStyle = {
    fill: theme === 'light' ? 'black' : 'white',
    width: '24px',
    height: '24px',
  };

  const briefIcon = <BriefcaseIcon color={theme === 'light' ? 'black' : 'white'}  />;
  const gradIcon = <GraduationCapIcon color={theme === 'light' ? 'black' : 'white'} />;

  return (
    <div className={styles.container}>
      {/* Experience Section */}
      <section className={styles.description}>
        <h1 className={styles.sectionTitle}>Experience</h1>
        <div className={styles.list}>
          {experience.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: 20 }}>
              {/* {briefIcon} */}
              <p className={styles.emoji}>👨🏻‍💻 </p>
              <div>
                <h3 className={styles.position}>{item.position}</h3>
                <p className={styles.company}>{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.description}>
        <h1 className={styles.sectionTitle}>Education</h1>
        <div className={styles.list}>
          {education.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: 20 }}>
              {/* {gradIcon} */}
              <p className={styles.emoji}>📖</p>
              <div>
                <h3 className={styles.position}>{item.position}</h3>
                <p className={styles.company}>{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationExperience;
