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
                            laksdjfaaawej foe jf oeirjfwqejfkfdjkal jiwehf kalsfd
                            laksdjfaaawej foe jf oeirjfwqejfkfdjkal jiwehf kalsfd
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


            </div>
        </section >
    )
}