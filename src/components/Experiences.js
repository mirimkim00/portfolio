import MediaQuery from 'react-responsive'

export default function Expereinces() {
    return (
        <section id="experiences" className="darkSection">
            <h2 className="ttl allerta">Experiences</h2>

            <MediaQuery minWidth={768}>
                <div className="experiences">
                    <div className="job ex asap">
                        <h5>Software Developer</h5>
                        <p>
                            Co-op & Part-Time<br />
                            May 2022 – Dec 2022<br />
                            Alpha Labs, North York, Canada
                        </p>
                        <div style={{ marginTop: '110px' }}></div>
                        <h5>Mobile Application Developer</h5>
                        <p>
                            Feb 2023 – Jun 2023<br />
                            Sport Manager, Zwolle, Netherlands
                        </p>
                    </div>

                    <div className="ex">
                        <p className="dot" style={{ backgroundColor: '#1557B9' }}></p>
                        <div style={{ display: "ruby-text" }}>
                            <div class="vl long"></div>
                        </div>
                        <p className="dot" style={{ backgroundColor: '#FFC738' }}></p>
                        <div style={{ display: "ruby-text" }}>
                            <div class="vl long"></div>
                        </div>
                        <p className="dot" style={{ backgroundColor: '#DD3636' }}></p>
                        <div style={{ display: "ruby-text" }}>
                            <div class="vl"></div>
                        </div>
                    </div>

                    <div className="jd ex asap">
                        <div className="jdContent">
                            <ul>
                                <li>
                                    Addressed website errors and deployed updates swiftly in cross-functional team using C# and .NET.
                                </li>

                                <li>
                                    Developed a controller to support additional functionality and established a corresponding database.
                                </li>
                                <li>
                                    Created test scripts using JUnit and Selenium to thoroughly conduct unit and integration testing, both automatically and manually.
                                </li>
                                <li>
                                    Authored structured documents to organize the project workflow and user guide documents providing step-by-step instructions.
                                </li>
                            </ul>
                        </div>

                        <div className="jdContent">
                            <ul>
                                <li>
                                    Developed a mobile application called SportManager for targeted end users on both iOS and Android platforms using Flutter and Firebase, collaborating closely with clients throughout the process.
                                </li>

                                <li>
                                    Oversaw sprints and generated documents and charts, including Gantt charts and Burndown charts, to facilitate the management of the overall project process.
                                </li>
                                <li>
                                    Automatically assigned tasks to team members and imposed penalties.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={767}>
                <div className="experiences asap">
                    <div className='jdContent'>
                        <h5>Software Developer</h5>
                        <p>
                            Co-op & Part-Time<br />
                            May 2022 – Dec 2022<br />
                            Alpha Labs, North York, Canada
                        </p>
                        <ul>
                            <li>
                                Addressed website errors and deployed updates swiftly in cross-functional team using C# and .NET.
                            </li>

                            <li>
                                Developed a controller to support additional functionality and established a corresponding database.
                            </li>
                            <li>
                                Created test scripts using JUnit and Selenium to thoroughly conduct unit and integration testing, both automatically and manually.
                            </li>
                            <li>
                                Authored structured documents to organize the project workflow and user guide documents providing step-by-step instructions.
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
                                Developed a mobile application called SportManager for targeted end users on both iOS and Android platforms using Flutter and Firebase, collaborating closely with clients throughout the process.
                            </li>

                            <li>
                                Oversaw sprints and generated documents and charts, including Gantt charts and Burndown charts, to facilitate the management of the overall project process.
                            </li>
                            <li>
                                Automatically assigned tasks to team members and imposed penalties.
                            </li>
                        </ul>
                    </div>
                </div>
            </MediaQuery>
            <div className="allerta" style={{ padding: '30px 0 50px 0' }}>
                <h3>
                    WHAT'S NEXT?
                </h3>
            </div>
        </section>
    )
}