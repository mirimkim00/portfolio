export default function Expereinces() {
    return (
        <>
            <h3 className="ttl">Experiences</h3>
            <div className="experiences" style={{ display: "flex" }}>
                <div className="job ex">
                    <div>
                        <h5>Software Developer</h5>
                        <p>
                            Co-op & Part-Time<br />
                            May 2022 – Dec 2022<br />
                            Alpha Labs, North York, Canada
                        </p>
                    </div>
                    <div>
                        <h5>Mobile Application Developer</h5>
                        <p>
                            Volunteer<br />
                            Feb 2023 – Jun 2023<br />
                            SportManager, Zwolle, Netherlands
                        </p>
                    </div>
                </div>

                <div className="ex">
                    <p className="dot" style={{ backgroundColor: '#1557B9' }}></p>
                    <div style={{ display: "ruby-text" }}>
                        <div class="vl"></div>
                    </div>
                    <p className="dot" style={{ backgroundColor: '#FFC738' }}></p>
                    <div style={{ display: "ruby-text"}}>
                        <div class="vl"></div>
                    </div>
                    <p className="dot" style={{ backgroundColor: '#DD3636' }}></p>
                    <div style={{ display: "ruby-text" }}>
                        <div class="vl"></div>
                    </div>
                </div>

                <div className="jd ex">
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
            </div>
        </>
    )
}