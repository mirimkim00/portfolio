import { FaGithub } from "react-icons/fa";

export default function Projects() {
    return (
        <section className='darkSection'>
            <h3 className="ttl allerta">Projects</h3>

            <div className='pjs'>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" style={{ '--backgroundImage': `var(--museumOfArt)` }}>
                            <h4>Museum of Art</h4>
                            <h6>ReactJS</h6>
                            <h6>Museum of Art Website</h6>
                        </div>
                        <div class="flip-card-back">
                            {/* explanation? Link */}
                            {/* <h1>John Doe</h1> */}
                            <FaGithub />

                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" style={{ '--backgroundImage': `var(--fragments)` }}>
                            <h4>Fragments Microservice</h4>
                            <h6>JS | AWS | Docker</h6>
                            <h6>Cloud Computing</h6>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" style={{ '--backgroundImage': `var(--fragments)` }}>
                            <h4>Fragments Microservice</h4>
                            <h6>JS | AWS | Docker</h6>
                            <h6>Museum of Art Website</h6>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}