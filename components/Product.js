import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Styles from '../styles/Product.module.css';
const Product = ({ product }) => {
  const { title, description, price, image } = product;
  return (
    <div className={Styles.product}>
      <div className={Styles.img}>
        <Image src={image} width="200" height="200" />
      </div>
      <div className={Styles.card}>
        <h5>{title}</h5>
        <p>{description}</p>
        <span className={Styles.price}>{price} $</span>
        <div className={Styles.btn}>
          <Link className={Styles.btn} href={`/products/${product.id}`}>
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
