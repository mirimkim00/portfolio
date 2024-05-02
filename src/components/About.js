import HeroIcons from './HeroIcons';
import MediaQuery from 'react-responsive'

export default function About() {
    return (
        <section id="about">
            <div className="about">
                <h2 className="ttl allerta">
                    Hi, I'm Mirim!
                </h2>
                <h6 className="allerta">
                    A Junior Fullstack Developer
                </h6>
                <MediaQuery minWidth={768}>
                    <p>
                        As a junior full-stack developer, I've worked on diverse projects, closely collaborating with teammates and clients.
                    </p>
                    <p>
                        Leveraging this experience, I'm eager to apply my skills to innovative projects and collaborate effectively.
                    </p>
                    <p>
                        Let's connect to explore opportunities to work together!
                    </p>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                    <p>
                        As a junior full-stack developer, I've worked on diverse projects, closely collaborating with teammates and clients.
                        <br /><br />
                        Leveraging this experience, I'm eager to apply my skills to innovative projects and collaborate effectively.
                        <br /><br />
                        Let's connect to explore opportunities to work together!
                    </p>
                </MediaQuery>
            </div>
            <HeroIcons />
        </section>
    )
}