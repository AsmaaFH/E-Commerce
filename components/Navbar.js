import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className="">E-Commerce</div>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
