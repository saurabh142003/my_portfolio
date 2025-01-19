import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import TailwindCss from '../../assets/TailwindCss.png'
import React from '../../assets/React.png'
import MySQL from '../../assets/MySQL.png'
import Nodejs from '../../assets/Node.js.png'
import Python from '../../assets/Python.png'
import Redux from '../../assets/Redux.png'
import JavaScript from '../../assets/JavaScript.png'
import HTML5 from '../../assets/HTML5.png'
import Git from '../../assets/Git.png'
import Github from '../../assets/GitHub.png'
import Firebase from '../../assets/Firebase.png'
import Express from '../../assets/Express.png'
import CSS3 from '../../assets/CSS3.png'
import java from '../../assets/java.png'
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={HTML5} skill="HTML" />
        <SkillList src={CSS3} skill="CSS" />
        <SkillList src={JavaScript} skill="JavaScript" />
        <SkillList src={Express} skill="Express" />
        <SkillList src={Nodejs} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={React} skill="React" />
        <SkillList src={Firebase} skill="Firebase" />
        <SkillList src={Python} skill="Python" />
        <SkillList src={TailwindCss} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Redux} skill="Redux" />
        <SkillList src={MySQL} skill="MySql" />
        <SkillList src={Git} skill="Git" />
        <SkillList src={Github} skill="Github" />
        <SkillList src={java} skill="Java" />
        
      </div>
    </section>
  );
}

export default Skills;
