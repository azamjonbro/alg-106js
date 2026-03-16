import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((item) => {
        setAllProducts(item.products);
      });
  }, []);

  return (
    <main className="shop">
      <div className="container">
        {allProducts.length ? (
          allProducts.map((e) => {
            return (
              <div className="card" key={e.id}>
                
                <div className="imageBox">
                  <span className="discount">
                    -{Math.round(e.discountPercentage)}%
                  </span>

                  <Link to={"/products/" + e.id}>
                    <img src={e.thumbnail} alt={e.title} />
                  </Link>
                </div>

                <div className="info">
                  <p className="category">{e.category}</p>

                  <h3>{e.title}</h3>

                  <div className="priceRow">
                    <span className="price">${e.price}</span>
                    <span className="rating">⭐ {e.rating}</span>
                  </div>

                  <button className="cartBtn">Add to Cart</button>
                </div>

              </div>
            );
          })
        ) : (
          <p>Mahsulot mavjud emas</p>
        )}
      </div>
    </main>
  );
}

export default Home;