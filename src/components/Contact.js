export default function Contact() {
    return (
        <section id="contact">
            <h3 className="ttl allerta">Contact</h3>
            <div>
                <p className="asap">
                    Feel free to contact me any time.
                    I will get back to you as soon as possible!
                </p>
                <form>
                    <label for='name'>Name</label><br />
                    <input type="text" name="name"></input><br />
                    <label for='email'>Email</label><br />
                    <input type="text" name="email"></input><br />
                    <label for='message'>Message</label><br />
                    {/* <input type="text" name="name"></input> */}
                    <textarea></textarea>
                </form>


            </div>
        </section>
    )
}