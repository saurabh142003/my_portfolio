import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import realestate from '../../assets/realestate.png'
import food from '../../assets/food.png'
import flexkart from '../../assets/flexkart.png'
import musicplayer from '../../assets/musicplayer.png'
import cynthia from '../../assets/cynthia.png'
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={realestate}
          link="https://realestate-4nn6.onrender.com/"
          h3="Real Estate"
          p="Buying and renting houses"
        />
        <ProjectCard
          src={food}
          link="https://fooddelivery-j5lp.onrender.com/"
          h3="Delish Drive"
          p="Food Restaurants"
        />
        <ProjectCard
          src={flexkart}
          link="https://flexkart-4hg8.onrender.com"
          h3="Flex Kart"
          p="Shopping Page"
        />
        <ProjectCard
          src={musicplayer}
          link="https://musicplayerbyysaurabh.netlify.app"
          h3="Music Player"
          p="Play Music"
        />
        <ProjectCard
          src={cynthia}
          link="https://cynthpracticewebsite.netlify.app/"
          h3="Cynthia Portfolio"
          p="Portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
