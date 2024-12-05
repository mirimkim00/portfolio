import js from '../img/javascript.png';
import react from '../img/react.png';
import nodejs from '../img/nodejs.png';
import net from '../img/net.png';
import nextjs from '../img/nextjs.png';
import ts from '../img/ts.png';
import oracle from '../img/oracle.png';
import mongoDB from '../img/mongoDB.png';
import django from '../img/django.png';
import firebase from '../img/firebase.png';
import aws from '../img/aws.png';
import docker from '../img/docker.png';
import git from '../img/git.png';
import github from '../img/github.png';
import trello from '../img/trello.png';
import devops from '../img/devops.png';
import figma from '../img/figma.png';
import postgreSQL from '../img/postgreSQL.png';

export default function Skills() {
    return (
        <section id="skills">
            <h2 className="ttl allerta">Skills</h2>
            <div className="skills">
                <div className="skillDiv" style={{ '--backgroundImage': `var(--frontend)` }}>
                    {/* <a href="https://www.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_28158111.htm">Image by vector4stock</a> on Freepik */}
                    <div className="intro asap">
                        <h4>
                            Front End
                        </h4>
                        <div className="skillIcon frontend">
                            <div>
                                <img src={nextjs} alt='Next.js' />
                                <p>
                                    Next.js
                                </p>
                            </div>
                            <div>
                                <img src={react} alt='React' />
                                <p>
                                    React
                                </p>
                            </div>
                            <div>
                                <img src={ts} alt='TypeScript' />
                                <p>
                                    TypeScript
                                </p>
                            </div>
                            <div>
                                <img src={js} alt='JavaScript' />
                                <p>
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skillDiv" style={{ '--backgroundImage': `var(--backend)` }}>
                    {/* <a href="https://www.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_26760925.htm#fromView=search&page=1&position=6&uuid=fa5a691e-d0de-4e8a-aa21-d14dfabeb7c7">Image by macrovector on Freepik</a> */}
                    <div className="intro asap">
                        <h4>
                            Back End
                        </h4>
                        <div className="skillIcon backend">
                            <div>
                                <img src={django} alt='Django' />
                                <p>
                                    Django
                                </p>
                            </div>
                            <div>
                                <img src={postgreSQL} alt='PostgreSQL' />
                                <p>
                                    PostgreSQL
                                </p>
                            </div>
                            <div>
                                <img src={net} alt='.NET' />
                                <p>
                                    .NET
                                </p>
                            </div>
                            <div>
                                <img src={mongoDB} alt='MongoDB' />
                                <p>
                                    MongoDB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skillDiv" style={{ '--backgroundImage': `var(--cloudComputing)` }}>
                    {/* <a href="https://www.freepik.com/free-vector/cloud-information-storage-collocated-cloud-computing-data-synchronization-harmonization-available-accesssible-digital-connected-backup-vector-isolated-concept-metaphor-illustration_12083500.htm#fromView=search&page=1&position=1&uuid=8e8ac5a7-cfe2-49bd-9e86-9675042c03c1">Image by vectorjuice on Freepik</a> */}
                    <div className="intro asap">
                        <h4>
                            Cloud Computing
                        </h4>
                        <div className="skillIcon cloud">
                            <div>
                                <img src={aws} alt='AWS' />
                                <p className='aws'>
                                    AWS
                                </p>
                            </div>
                            <div>
                                <img src={docker} alt='Docker' />
                                <p>
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skillDiv" style={{ '--backgroundImage': `var(--pmTools)` }}>
                    {/* <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_25559495.htm#fromView=search&page=1&position=5&uuid=86639522-1646-46e6-926c-8e7be7aedb0d">Image by freepik</a> */}
                    <div className="intro asap">
                        <h4 style={{ transform: `translateY(-15px)` }}>
                            Project Management Tools & Design
                        </h4>
                        <div className="skillIcon tools">
                            <div>
                                <img src={git} alt='Git' />
                                <p>
                                    Git
                                </p>
                            </div>
                            <div>
                                <img src={github} alt='GitHub' />
                                <p>
                                    GitHub
                                </p>
                            </div>
                            <div>
                                <img src={devops} alt='DevOps' />
                                <p>
                                    Azure DevOps
                                </p>
                            </div>
                            <div>
                                <img src={figma} alt='Figma' />
                                <p>
                                    Figma
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}