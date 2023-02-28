import { Card } from "./Card";
import cardImage from "./image-product-mobile.jpg";
import cardCartIcon from "./icon-cart.svg";

export const MobileComponent = () => {
  return (
    <Card
      class="card-mobile"
      image={cardImage}
      subtitle="Perfume"
      title="Gabrielle Essence Eau De Parfum"
      description="A floral, solar and voluptuous interpretation composed by Olivier
     Polge, Perfumer-Creator for the House of CHANEL."
      salePrice="$149.99"
      price="$169.99"
      cartImage={cardCartIcon}
      btnName="Add to Cart"
    />
  );
};
