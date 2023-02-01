import './About.css';

const About = () => {
    return (
        <div className="About">
            <div className="Headshot">
                <img className="AboutImage" src={require(`../media/images/self.JPG`)} />
            </div>
            <div className="Bio">
                <h1>
                    My name is Carson.
                </h1>
                <p>
                    I've always been a person who feels very deeply. I find beauty in that depth, regardless of the emotion. Elation, lonliness, surprise, frustration, pride, apathy, everything.
                    To me they all have a place, and they all deserve to be captured.
                </p>
                <p>
                    I strive to make images that distill those emotions to their essence. A fraction of a second that can immortalize such fleeting things.
                </p>
                <p>
                    Reach out to me if my images speak to you. Currently I operate out of Denver, though much of my work was shot during my time in the Bay Area, or while living in Oahu.
                </p>
            </div>
        </div>
    );
}

export default About;