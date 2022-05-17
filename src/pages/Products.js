import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
  return (
    <>
      {products.map((product) => {
        return (
          <article key={product.id}>
            <h5>{product.name}</h5>
            <Link to={`/product/${product.id}`}> More Info</Link>
          </article>
        );
      })}
      <section className="section">
        <Link to="/" className="btn">
          Home
        </Link>
        <br />
        <br />
        <Link to="about" className="btn">
          About
        </Link>
      </section>
    </>
  );
};

export default Products;
