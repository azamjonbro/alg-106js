import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function OneProduct() {

  const [oneProduct, setOneProduct] = useState(null);
  const [mainImg, setMainImg] = useState("");

  let { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((item) => {
        setOneProduct(item);
        setMainImg(item.thumbnail);
      });
  }, [id]);

  if (!oneProduct) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <section className="productPage">
        <div className="back">
            <div><Link to="/">Home / </Link>{oneProduct.title}</div>
        </div>
      <div className="productContainer">
        

        {/* LEFT IMAGES */}
        <div className="imageSection">

          <div className="mainImage">
            <img src={mainImg} alt={oneProduct.title} />
          </div>

          <div className="imageList">
            {oneProduct.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>

        </div>

        {/* RIGHT INFO */}

        <div className="infoSection">

          <h1>{oneProduct.title}</h1>

          <p className="brand">
            Brand: <span>{oneProduct.brand}</span>
          </p>

          <p className="category">{oneProduct.category}</p>

          <p className="rating">⭐ {oneProduct.rating}</p>

          <p className="price">${oneProduct.price}</p>

          <p className="desc">{oneProduct.description}</p>

          <p className="stock">
            Status: 
            <span className={oneProduct.stock > 0 ? "inStock" : "outStock"}>
              {oneProduct.availabilityStatus}
            </span>
          </p>

          <p className="shipping">{oneProduct.shippingInformation}</p>

          <button className="cartBtn">Add To Cart</button>

        </div>

      </div>
    </section>
  );
}

export default OneProduct;