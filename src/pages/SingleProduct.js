import { Link, useParams } from "react-router-dom";
import ProductData from "../data";
const SingleProduct = () => {
  const { productId } = useParams();
  const product = ProductData.find((product) => {
    return product.id === productId;
  });
  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h2>{productId}</h2>
      <Link to="/product">Back to Product</Link>
    </section>
  );
};

export default SingleProduct;
