import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
const Home = () => {
  const addTOCartHandler = () => {
    console.log("add to cart");
  };
  return (
    <div className="home">
      <section> </section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
  
      <main>
        <ProductCard
          productId="mfmfm"
          name="MacBook"
          price={4344}
          stock={23}
          handler={addTOCartHandler}
          photo="https://icentralstore.in/wp-content/uploads/2022/08/macbook-air-spacegray-gallery1-20220606.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
