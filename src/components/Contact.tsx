import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="ContactBlurb">
                <p>
                    Don't hesitate to reach out to me for questions related to prints, business, or simply to discuss art.
                </p>
                <p>
                    You can DM me on any of the social media accounts listed in the footer, or email me directly at 
                    <a href="mailto:carson.brando@yahoo.com"> carson.brando@yahoo.com</a>.
                </p>
                <p>
                    I look forward to hearing from you.
                </p>
            </div>
            <div className="ContactImage">
                <img src={require(`../media/images/contact_banner.jpeg`)} />
            </div>
        </div>
    )
}

export default Contact;