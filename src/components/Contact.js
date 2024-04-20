import { MdOutlineEmail } from "react-icons/md";
import { FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Contact() {
    return (
        <section id="contact">
            <h2 className="ttl allerta">Contact</h2>
            <div className="contact">
                <div className="contactForm asap">
                    <p>
                        Feel free to contact me anytime.<br />
                        I will get back to you as soon as possible!
                    </p>
                    <form className="ctForm" action="mailto:mirimkim00@gmail.com" method="post" enctype="text/plain">
                        <input type="text" name="name" placeholder="Name"></input><br />
                        <input type="text" name="email" placeholder="Email"></input><br />
                        <textarea id="ctMessage" rows="6" placeholder="Message"></textarea><br />

                        <button className="ctBtn">Send</button>
                    </form>
                </div>
                <div className="ctBox"></div>
                <div className="contactInfo darkSection">
                    <h3 className="ctInfoTtl allerta">Info</h3>
                    <div className="ctInfo asap">
                        <IconContext.Provider value={{ className: "ctIcon" }}>
                            <div>
                                <a href="mailto:mirimkim00@gmail.com" style={{ color: "white", textDecoration: 'none' }}>
                                    <MdOutlineEmail />
                                    mirimkim00@gmail.com
                                </a>
                            </div>
                            <div>
                                <FiPhone />
                                647-462-3325
                            </div>
                            <div>
                                <FiLinkedin />
                                linkedin.com/in/mirim-kim
                            </div>
                            <div>
                                <FiGithub />
                                github.com/mirimkim00
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>

        </section>
    )
}