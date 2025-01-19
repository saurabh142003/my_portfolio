import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/lattestSaurabhResume.pdf'
import { useTheme } from '../../common/ThemeContext';
import hello from '../../assets/hello.png'
import { IoMailSharp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const mailIcon = theme ==='light' ? <IoMailSharp/> : <IoMailOutline/>;
  const instaIcon = theme === 'light' ? <FaInstagramSquare size={30} color='black'/>:<FaInstagram size={30} color='white'/>
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={hello}
          className={styles.hero}
          style={{borderRadius:'50%'}}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Saurabh
          <br />
          Mishra
        </h1>
        <h2>Full stack Developer</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          <a href="https://github.com/saurabh142003" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-mishra-2589602b2/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.instagram.com/saurabmh/" target="_blank">
            {instaIcon}
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
