import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <h2>About</h2>
      <Link to="/about" className="btn">
        Home
      </Link>
      <br />
      <br />
      <Link to="/product" className="btn">
        Product
      </Link>
    </section>
  );
};
export default About;
