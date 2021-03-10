import React from "react";

import styles from "styles/Header.module.scss";

function Header() {

  return (
    <nav className={styles.header}>
      <div className="container">
        <img
          src="https://guruhotel.com/wp-content/themes/gh-apollo-1/assets/images/logo-original.svg"
          alt="logo"
        />
      </div>
    </nav>
  )
}

export default Header;
