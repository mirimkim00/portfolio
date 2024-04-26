import html5 from '../img/html5.png';
import css3 from '../img/css3.png';
import js from '../img/js.png';
import nodejs from '../img/nodejs.png';

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
                        <p>
                            laksdjfawej foe jf oeirjfwqejfkfdjkal jiwehf kalsfd
                        </p>
                    </div>
                </div>

                <div className="skillDiv" style={{ '--backgroundImage': `var(--backend)` }}>
                    {/* <a href="https://www.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_26760925.htm#fromView=search&page=1&position=6&uuid=fa5a691e-d0de-4e8a-aa21-d14dfabeb7c7">Image by macrovector on Freepik</a> */}
                    <div className="intro asap">
                        <h4>
                            Back End
                        </h4>
                        <p>
                            laksdjfawej foe jf oeirjfwqejfkfdjkal jiwehf kalsfd
                        </p>
                    </div>
                </div>

                <div className="skillDiv" style={{ '--backgroundImage': `var(--cloudComputing)` }}>
                    {/* <a href="https://www.freepik.com/free-vector/cloud-information-storage-collocated-cloud-computing-data-synchronization-harmonization-available-accesssible-digital-connected-backup-vector-isolated-concept-metaphor-illustration_12083500.htm#fromView=search&page=1&position=1&uuid=8e8ac5a7-cfe2-49bd-9e86-9675042c03c1">Image by vectorjuice on Freepik</a> */}
                    <div className="intro asap">
                        <h4>
                            Cloud Computing
                        </h4>
                        <p>
                            laksdjfawej foe jf oeirjfwqejfkfdjkal jiwehf kalsfd
                        </p>
                    </div>
                </div>

                <div className="skillDiv" style={{ '--backgroundImage': `var(--pmTools)` }}>
                    {/* <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_25559495.htm#fromView=search&page=1&position=5&uuid=86639522-1646-46e6-926c-8e7be7aedb0d">Image by freepik</a> */}
                    <div className="intro asap">
                        <h4>
                            Project Management Tools & Design
                        </h4>
                        <p>
                            laksdjfawej foe jf oeirjfwqejfkfdjkal jiwehf kalsfd
                        </p>
                    </div>
                </div>


            </div>
        </section >
    )
}