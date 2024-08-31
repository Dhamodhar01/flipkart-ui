import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Flipkart Clone</div>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>
          Home
        </a>
        <a href="/products" style={styles.navLink}>
          Products
        </a>
        <a href="/cart" style={styles.navLink}>
          Cart
        </a>
        <a href="/account" style={styles.navLink}>
          Account
        </a>
      </nav>
      <input type="text" placeholder="Search..." style={styles.searchBar} />
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#2874f0",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
  searchBar: {
    padding: "5px",
    borderRadius: "4px",
    border: "none",
  },
};

export default Header;
