import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { IconContext } from "react-icons";

export default function Projects() {
    return (
        <section id="projects" className='darkSection'>
            <h2 className="ttl allerta">Projects</h2>

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
                                    <div onClick={() => window.open("https://my-app-delta-gold.vercel.app/", '_blank')}>
                                        <GrDeploy />
                                        See the Demo
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className="pjDesc">
                                <ul>
                                    <li>
                                        Got API data through Next.js and deployed on the public web using Vercel.<br />
                                    </li>
                                    <li>
                                        Designed and implemented an authenticated user app flow using React.
                                    </li>
                                </ul>
                            </div>
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
                                    <div onClick={() => window.open("https://github.com/mirimkim00/fragments", '_blank')}>
                                        <FaGithub />
                                        Go to GitHub
                                    </div>
                                    <div onClick={() => window.open("https://www.youtube.com/watch?v=9nXUk2l-BbU", '_blank')}>
                                        <GrDeploy />
                                        See the Demo
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className="pjDesc">
                                <ul style={{ fontSize: '15px' }}>
                                    <li>
                                        Developed, debugged, tested, and deployed REST APIs by interfacing with Github CI/CD workflow.
                                    </li>
                                    <li>
                                        Deployed Docker containers, stored data in DynamoDB, S3, and enabled sign up/in with Cognito.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" style={{ '--backgroundImage': `var(--portfolio)` }}>
                            <h4>Portfolio</h4>
                            <h6>ReactJS | Figma</h6>
                            <h6>Personal Portfolio Website</h6>
                        </div>
                        <div class="flip-card-back">
                            <div className="asap pjIcons">
                                <IconContext.Provider value={{ className: "pjIcon" }}>
                                    <div onClick={() => window.open("https://github.com/mirimkim00/portfolio", '_blank')}>
                                        <FaGithub />
                                        Go to GitHub
                                    </div>
                                    <div onClick={() => window.open("", '_blank')}>
                                        <GrDeploy />
                                        See the Demo
                                    </div>
                                </IconContext.Provider>
                            </div>
                            <div className="pjDesc">
                                <ul>
                                    <li>
                                        Developed a website with React and crafted distinctive animations using CSS.
                                    </li>
                                    <li>
                                        Created a draft design in Figma and adjusted it during development to incorporate new features or changes.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}