import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { IconContext } from "react-icons";

export default function Projects() {
    return (
        <section id="projects" className='darkSection'>
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
                            <div className="asap pjIcons">
                                <IconContext.Provider value={{ className: "pjIcon" }}>
                                    <div onClick={() => window.open("https://github.com/mirimkim00/Museum-of-Art-website", '_blank')}>
                                        <FaGithub />
                                        Go to GitHub
                                    </div>
                                    <div>
                                        <GrDeploy />
                                        See the Demo
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <p>
                                Got API data through Next.js and deployed on the public web using Vercel.<br />
                            </p>
                            <p>
                                Only logged-in users can access site features, including search and favorites.

                            </p>
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
                            <div className="asap pjIcons">
                                <IconContext.Provider value={{ className: "pjIcon" }}>
                                    <div onClick={() => window.open("https://github.com/mirimkim00/Museum-of-Art-website", '_blank')}>
                                        <FaGithub />
                                        Go to GitHub
                                    </div>
                                    <div>
                                        <GrDeploy />
                                        See the Demo
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <p>
                                Got API data through Next.js and deployed on the public web using Vercel.<br />
                            </p>
                            <p>
                                Only logged-in users can access site features, including search and favorites.

                            </p>
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
                            <div className="asap pjIcons">
                                <IconContext.Provider value={{ className: "pjIcon" }}>
                                    <div onClick={() => window.open("https://github.com/mirimkim00/Museum-of-Art-website", '_blank')}>
                                        <FaGithub />
                                        Go to GitHub
                                    </div>
                                    <div>
                                        <GrDeploy />
                                        See the Demo
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <p>
                                Got API data through Next.js and deployed on the public web using Vercel.<br />
                            </p>
                            <p>
                                Only logged-in users can access site features, including search and favorites.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}