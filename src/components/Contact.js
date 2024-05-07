import { MdOutlineEmail } from "react-icons/md";
import { FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_h7viei9', 'template_qqurnxe', form.current, 'Jjyc-fKfGcPToiUoE')
            .then((response) => {
                // console.log('Sent email successfully:', response.status, response.text);
                alert('Email sent successfully.');
                form.current.reset();
            }, (error) => {
                // console.error('Failed to send:', error);
                alert('Failed to send email.');
            });
    };

    return (
        <section id="contact">
            <h2 className="ttl allerta">Contact</h2>
            <div className="contact">
                <div className="contactForm asap">
                    <p>
                        Feel free to contact me anytime.<br />
                        I will get back to you as soon as possible!
                    </p>
                    <form ref={form} className="ctForm" onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Name" /><br />
                        <input type="email" name="email" placeholder="Email" /><br />
                        <textarea id="ctMessage" rows="6" name="message" placeholder="Message"></textarea><br />

                        <button type="submit" className="ctBtn">Send</button>
                    </form>
                </div>
                <div className="ctBox"></div>
                <div className="contactInfo darkSection">
                    <h3 className="ctInfoTtl allerta">Info</h3>
                    <div className="ctInfo asap">
                        <IconContext.Provider value={{ className: "ctIcon" }}>
                            <div className="ctLink">
                                <a href="mailto:mirimkim00@gmail.com">
                                    <MdOutlineEmail />
                                    mirimkim00@gmail.com
                                </a>
                            </div>
                            <div>
                                <FiPhone />
                                647-462-3325
                            </div>
                            <div className="ctLink">
                                <a href='https://www.linkedin.com/in/mirim-kim/'>
                                    <FiLinkedin />
                                    linkedin.com/in/mirim-kim
                                </a>
                            </div>
                            <div className="ctLink">
                                <a href='https://github.com/mirimkim00'>
                                    <FiGithub />
                                    github.com/mirimkim00
                                </a>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>

        </section>
    )
}