import React from "react";
import imageflipkart from "../Assets/box 1 _image copy.jpg";
import image2 from "../Assets/box 1 _image.jpg";
import image3 from "../Assets/box 2 _ iamge.jpg";
const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      image: imageflipkart,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$200",
      image: image2,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$300",
      image: image3,
    },
  ];

  return (
    <div style={styles.productList}>
      {products.map((product) => (
        <div key={product.id} style={styles.productCard}>
          <img
            src={product.image}
            alt={product.name}
            style={styles.productImage}
          />
          <h2 style={styles.productName}>{product.name}</h2>
          <p style={styles.productPrice}>{product.price}</p>
          <button style={styles.addToCartButton}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  productList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "20px",
  },
  productCard: {
    width: "220px",
    padding: "15px",
    margin: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    image: "cover",
  },
  productName: {
    fontSize: "18px",
    margin: "10px 0",
  },
  productPrice: {
    fontSize: "16px",
    margin: "10px 0",
    color: "#ff9900",
  },
  addToCartButton: {
    padding: "10px",
    backgroundColor: "#ff9900",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductList;
