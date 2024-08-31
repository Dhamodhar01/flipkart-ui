import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Flipkart Clone</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    marginTop: "20px",
  },
};

export default Footer;
