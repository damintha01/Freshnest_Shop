import React from 'react';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: "Fresh Bananas",
    price: 2.99,
    originalPrice: 3.99,
    rating: 4.5,
    image: "/src/Component/Home/HomeImage/banana.png",
    category: "Fruits",
    discount: "25% OFF"
  },
  {
    id: 2,
    name: "Mixed Vegetables",
    price: 5.99,
    originalPrice: 7.99,
    rating: 4.8,
    image: "/src/Component/Home/HomeImage/vegitable.png",
    category: "Vegetables",
    discount: "25% OFF"
  },
  {
    id: 3,
    name: "Crispy Chips",
    price: 3.49,
    originalPrice: 4.49,
    rating: 4.2,
    image: "/src/Component/Home/HomeImage/chips.png",
    category: "Snacks",
    discount: "22% OFF"
  },
  {
    id: 4,
    name: "Fresh Bananas",
    price: 2.99,
    originalPrice: 3.99,
    rating: 4.5,
    image: "/src/Component/Home/HomeImage/banana.png",
    category: "Fruits",
    discount: "25% OFF"
  },
  {
    id: 5,
    name: "Mixed Vegetables",
    price: 5.99,
    originalPrice: 7.99,
    rating: 4.8,
    image: "/src/Component/Home/HomeImage/vegitable.png",
    category: "Vegetables",
    discount: "25% OFF"
  },
  {
    id: 6,
    name: "Crispy Chips",
    price: 3.49,
    originalPrice: 4.49,
    rating: 4.2,
    image: "/src/Component/Home/HomeImage/chips.png",
    category: "Snacks",
    discount: "22% OFF"
  }
];

const Products = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our fresh and quality products at unbeatable prices
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-56 md:h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {product.discount}
                </div>
                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition-colors duration-200">
                  <FaHeart className="text-gray-400 hover:text-red-500 text-sm" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <div className="mb-2">
                  <span className="text-xs sm:text-sm text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xs sm:text-sm ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg sm:text-xl font-bold text-green-600">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <FaShoppingCart className="text-sm" />
                  <span className="text-sm sm:text-base">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
