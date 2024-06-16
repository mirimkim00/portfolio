import HeroIcons from './HeroIcons';
import MediaQuery from 'react-responsive'

export default function About() {
    return (
        <section id="about">
            <div className="about">
                <h1 className="allerta">
                    Hi, I'm Mirim!
                </h1>
                <h4 className="allerta">
                    A Fullstack Developer
                </h4>
                <MediaQuery minWidth={769}>
                    <div className='introduction'>
                        <p>
                            As a full-stack developer, I've worked on diverse projects, closely collaborating with teammates and clients.
                        </p>
                        <p>
                            Leveraging this experience, I'm eager to apply my skills to innovative projects and collaborate effectively.
                        </p>
                        <p>
                            Let's connect to explore opportunities to work together!
                        </p>
                    </div>
                </MediaQuery>

                <MediaQuery minWidth={768} maxWidth={768}>
                    <div className='introduction'>
                        <p>
                            As a full-stack developer, <br />
                            I've worked on diverse projects, <br />
                            closely collaborating <br />
                            with teammates and clients.
                        </p>
                        <p>
                            Leveraging this experience, <br />
                            I'm eager to apply my skills to <br />
                            innovative projects and <br />
                            collaborate effectively.
                        </p>
                        <p>
                            Let's connect to explore <br />
                            opportunities to work together!
                        </p>
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={767}>
                    <div className='introduction'>
                        <p>
                            As a full-stack developer, <br />
                            I've worked on diverse projects, <br />
                            closely collaborating <br />
                            with teammates and clients.
                        </p>
                        <p>
                            Leveraging this experience, <br />
                            I'm eager to apply my skills to <br />
                            innovative projects and <br />
                            collaborate effectively.
                        </p>
                        <p>
                            Let's connect to explore <br />
                            opportunities to work together!
                        </p>
                    </div>
                </MediaQuery>
            </div>
            <HeroIcons />
        </section>
    )
}