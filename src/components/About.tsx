import './About.css';

const About = () => {
    return (
        <div className="About">
            <div className="Headshot">
                <img className="AboutImage" src={require(`../media/images/self.JPG`)} />
            </div>
            <div className="Bio">
                <p>
                    My name is Carson. 
                    I am a self-taught photographer based in Colorado with a passion for capturing the world. 
                    I use both film and digital cameras, with a particular focus on street photography. 
                    However, I am always striving to improve as a portrait and landscape photographer.
                </p>
                <p>
                    I purchased my first camera in early 2020, and have been captivated ever since. 
                    Since then I have never stopped learning, practicing, and shooting.
                </p>
                <p>
                    I invite you to browse my portfolio and discover the perspective I bring to my photographs.
                    Thank you for visiting. 
                    I hope you enjoy my work. 
                    I am always open to discussing art with interesting people, so don't hesitate to reach out.
                </p>
            </div>
        </div>
    );
}

export default About;