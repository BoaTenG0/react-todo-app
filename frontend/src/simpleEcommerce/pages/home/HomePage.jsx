import { PRODUCTS } from "../../../products";
import { Product } from "./Product";
import "./Home.css";

const HomePage = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Tech Shopping</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
export default HomePage;
