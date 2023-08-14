import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to my page!&nbsp;
        </p>
        <a href="%PUBLIC_URL%/Melissa_Lee_Resume.pdf">Resume</a>
      </div>

      

      <div className={styles.center}>
        <p>
          <b>Hi! I'm Melissa</b>, a rising senior at <a href="https://www.stanford.edu/" className={styles.link}>Stanford University</a> pursuing 
          a dual Bachelor's and Master's degree in Computer Science (Artificial Intelligence and Computer Systems). This past summer, 
          I interned at <a href="https://www.riotgames.com/en" className={styles.link}>Riot Games</a>, architecting and implementing an end-to-end 
          match simulation framework enabling all game teams across <i>League of Legends</i>, <i>Valorant</i>, and R&D initiatives to iteratively test and 
          optimize their matchmaking algorithms. This complemented my previous year's experience integrating an industry-leading BERT Natural Language 
          Processing model into Riot's name-checking pipeline, improving offensive name detection by 50%!<br /> <br />

          In my free time, I enjoy growing the sport of <a href="https://www.wrestling.life/yes-we-can" className={styles.link}>women's wrestling</a> and 
          learning more about the programming world through independent coding projects. Feel free to check out my <a href="https://github.com/melissaflee02" className={styles.link}>Github</a>!<br /> <br />

          Having struggled with social interaction at a young age, I am passionate about leveraging technology to advance the human interaction
          model. In pursuit of this goal, I am exploring ways AI can facilitate, and participate in, healthy human interaction.
        </p>
      </div>

      <div className={styles.grid}>
        <a
          className={styles.shaded_card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/melissaflee02/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            LinkedIn
          </h2>
        </a>

        <a
          href="https://github.com/melissaflee02"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github
          </h2>
        </a>

        <a
          href="mailto: mlee24@stanford.edu"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer" 
        >
          <h2>
            Email
          </h2>
        </a>
      </div>
    </main>
  )
}
