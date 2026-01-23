import { products } from "../data/products";
import { FaCircleArrowRight } from "react-icons/fa6";
import ProductCard from "../Pages/ProductCard";
import { Link } from "react-router-dom";

const MostPopular = () => {
  return (
    <section className="px-6 py-16 red-bg lg:px-32">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-5 mb-10 md:flex-row md:items-center">
        <div>
          <h2 className="mb-4 text-5xl canela cream-color">Most popular</h2>
          <p className="text-lg cream-color inter">
            Most Popular product that you shouldn’t miss
          </p>
        </div>

      <Link to="all-product"> <button className="flex items-center gap-4 px-5 py-4 rounded-md cream-bg red-color">
          Show More Products <FaCircleArrowRight />
        </button></Link> 
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default MostPopular;
