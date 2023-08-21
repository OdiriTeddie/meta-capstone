import AboutusImg from "../../../assets/about-us.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>About Little Lemon</h1>
        <h2>London, Uk.</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={AboutusImg} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
