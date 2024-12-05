import MediaQuery from 'react-responsive'

export default function Expereinces() {
    return (
        <section id="experiences" className="darkSection">
            <h2 className="ttl allerta">Experiences</h2>

            {/* desktop version */}
            <MediaQuery minWidth={768}>
                <div className="experiences">
                    <div className="job ex asap">
                        <h5>Software Developer</h5>
                        <p>
                            Sep 2024 - Present<br />
                            Pacemaker, Toronto, Canada
                        </p>
                        <div className='gap'></div>
                        <h5>Mobile Application Developer</h5>
                        <p>
                            Feb 2023 – Jun 2023<br />
                            Sport Manager, Zwolle, Netherlands
                        </p>
                        <div className='gap'></div>
                        <h5>Software Developer</h5>
                        <p>
                            Co-op & Part-Time<br />
                            May 2022 – Dec 2022<br />
                            Alpha Labs, North York, Canada
                        </p>
                    </div>

                    <div className="ex">
                        <p className="dot" style={{ backgroundColor: '#1557B9' }}></p>
                        <div style={{ display: "ruby-text" }}>
                            <div class="vl"></div>
                        </div>
                        <p className="dot" style={{ backgroundColor: '#FFC738' }}></p>
                        <div style={{ display: "ruby-text" }}>
                            <div class="vl"></div>
                        </div>
                        <p className="dot" style={{ backgroundColor: '#DD3636' }}></p>
                        <div style={{ display: "ruby-text" }}>
                            <div class="vl"></div>
                        </div>
                        <p className="dot" style={{ backgroundColor: '#C8C8C8' }}></p>
                    </div>

                    <div className="jd ex asap">
                        <div className="jdContent">
                            <ul>
                                <li>
                                    Architected a full-stack web application utilizing React, Next.js, TypeScript and Material UI(MUI).
                                </li>
                                <li>
                                    Designed a complex database schema and RESTful API using Django, developing a user authentication workflow with role-based access control.
                                </li>
                                <li>
                                    Led project management using GitHub Projects with Agile methodology, successfully optimizing team productivity and increasing sprint velocity.
                                </li>
                            </ul>
                        </div>

                        <div className="jdContent">
                            <ul>
                                <li>
                                    Developed a mobile application on both iOS and Android platforms using Flutter and Firebase, collaborating closely with clients throughout the process.
                                </li>
                                <li>
                                    Generated project documents and charts, including Gantt charts and Burndown charts, to facilitate the management of the overall project process.
                                </li>
                                <li>
                                    Provided strategic feedback and ideas that were incorporated into the final design and development stages.
                                </li>
                            </ul>
                        </div>
                        <div className="jdContent">
                            <ul>
                                <li>
                                    Resolve system errors using ASP.NET, C#, MVC, and Azure technologies, resulting in a performance improvement and optimized load times.
                                </li>
                                <li>
                                    Developed a comprehensive testing cases using NUnit, JUnit, and Selenium, achieving successfully reducing production-level bugs.
                                </li>
                                <li>
                                    Leveraged advanced communication and organizational skills, facilitating streamlined team workflow and project execution.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MediaQuery>

            {/* mobile version */}
            <MediaQuery maxWidth={767}>
                <div className="experiences asap">
                    <div className='jdContent'>
                        <h5>Software Developer</h5>
                        <p>
                            Sep 2024 - Present<br />
                            Pacemaker, Toronto, Canada
                        </p>
                        <ul>
                            <li>
                                Architected a full-stack web application utilizing React, Next.js, TypeScript and Material UI(MUI).
                            </li>
                            <li>
                                Designed a complex database schema and RESTful API using Django, developing a user authentication workflow with role-based access control.
                            </li>
                            <li>
                                Led project management using GitHub Projects with Agile methodology, successfully optimizing team productivity and increasing sprint velocity.
                            </li>
                        </ul>
                    </div>
                    <div className='jdContent'>
                        <h5>Mobile Application Developer</h5>
                        <p>
                            Feb 2023 – Jun 2023<br />
                            SportManager, Zwolle, Netherlands
                        </p>
                        <ul>
                            <li>
                                Developed a mobile application on both iOS and Android platforms using Flutter and Firebase, collaborating closely with clients throughout the process.
                            </li>
                            <li>
                                Generated project documents and charts, including Gantt charts and Burndown charts, to facilitate the management of the overall project process.
                            </li>
                            <li>
                                Provided strategic feedback and ideas that were incorporated into the final design and development stages.
                            </li>
                        </ul>
                    </div>
                    <div className='jdContent'>
                        <h5>Software Developer</h5>
                        <p>
                            Co-op & Part-Time<br />
                            May 2022 – Dec 2022<br />
                            Alpha Labs, North York, Canada
                        </p>
                        <ul>
                            <li>
                                Resolve system errors using ASP.NET, C#, MVC, and Azure technologies, resulting in a performance improvement and optimized load times.
                            </li>
                            <li>
                                Developed a comprehensive testing cases using NUnit, JUnit, and Selenium, achieving successfully reducing production-level bugs.
                            </li>
                            <li>
                                Leveraged advanced communication and organizational skills, facilitating streamlined team workflow and project execution.
                            </li>
                        </ul>
                    </div>
                </div>
            </MediaQuery>
        </section>
    )
}