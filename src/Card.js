import cardImage from "./image-product-mobile.jpg";
import cardCartIcon from "./icon-cart.svg";

export const Card = (props) => {
  return (
    // <div className="card">
    <div className={props.class}>
      <div>
        <img className="card-image" src={props.image} alt="" />
      </div>
      <div className="card-text">
        <p className="card-subtitle">{props.subtitle}</p>
        <h2>{props.title}</h2>
        <p className="card-description-content">{props.description}</p>
        <div className="card-price-wrapper">
          <p className="sale-price-content">{props.salePrice}</p>
          <p className="price-content">${props.price}</p>
        </div>
        <button>
          <div className="button-container">
            <img className="card-cart-iamge" src={props.cartImage} alt="" />
            <p>{props.btnName}</p>
          </div>
        </button>
      </div>
    </div>
  );
};
