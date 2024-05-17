import { MdOutlineEmail } from "react-icons/md";
import { FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const [msg, setMsg] = useState('');
    const [msgColor, setMsgColor] = useState('');
    const [showMsg, setShowMsg] = useState('');

    const [fade, setFade] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        if (name.current.value.trim() === "" || email.current.value.trim() === "" || message.current.value.trim() === "") {
            setMsg('Please fill out the form.');
            setMsgColor('red');
        } else {
            emailjs.sendForm('service_h7viei9', 'template_qqurnxe', form.current, 'Jjyc-fKfGcPToiUoE')
                .then((response) => {
                    // console.log('Sent email successfully:', response.status, response.text);
                    setMsg('Email sent successfully.');
                    setMsgColor('green');
                    form.current.reset();
                }, (error) => {
                    // console.error('Failed to send:', error);
                    setMsgColor('red');
                    setMsg('Failed to send email.\nPlease send your message via email.');
                });
        }
    };

    useEffect(() => {
        if (msg !== null) {
            setShowMsg('block');

            const timerId = setTimeout(() => {
                setMsg(null);
            }, 2200);

            const timerId2 = setTimeout(() => {
                setFade('fade-out');
            }, 2000);

            return () => clearTimeout(timerId, timerId2);
        } else {
            setShowMsg('none');
            setFade('');
        }
    }, [msg]);

    return (
        <section id="contact">
            <h2 className="ttl allerta">Contact</h2>
            <div className="contact">
                <div className="contactForm asap">
                    <div className="ctMsg">
                        {
                            (msg == null) ?
                                <p>
                                    Feel free to contact me anytime.<br />
                                    I will get back to you as soon as possible!
                                </p>
                                :
                                <pre className={`alertMsg asap ${fade}`} style={{ display: `${showMsg}`, color: `${msgColor}`, borderColor: `${msgColor}` }}>
                                    {msg}

                                </pre>
                        }
                    </div>
                    <form ref={form} className="ctForm" onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Name" ref={name} /><br />
                        <input type="email" name="email" placeholder="Email" ref={email} /><br />
                        <textarea id="ctMessage" rows="6" name="message" placeholder="Message" ref={message}></textarea><br />

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