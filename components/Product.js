import Image from 'next/image';
import React from 'react';
import Styles from '../styles/Product.module.css';
const Product = ({ product }) => {
  const { title, description, price, image } = product;
  return (
    <div className={Styles.product}>
      <div className={Styles.img}>
        <Image src={image} width="200" height="300" />
      </div>
      <div className={Styles.card}>
        <h5>{title}</h5>
        <p>{description}</p>
        <span className={Styles.price}>{price} $</span>
      </div>
    </div>
  );
};

export default Product;
