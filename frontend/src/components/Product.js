import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <section className="product" itemscope itemtype="https://schema.org/Product">
      <img src={imageUrl} alt={name} itemprop="image"/>

      <div className="product__info">
        <p className="info__name" itemprop="name">{name}</p>

        <p className="info__description" itemprop="description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </section>
  );
};

export default Product;
