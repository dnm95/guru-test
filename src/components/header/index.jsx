import React from "react";
import Link from "next/link";

import styles from "styles/Header.module.scss";

function Header() {

  return (
    <nav className={styles.header}>
      <div className="container text-center">
        <Link href="/">
          <a>
            <img
              src="https://guruhotel.com/wp-content/themes/gh-apollo-1/assets/images/logo-original.svg"
              alt="logo"
            />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Header;
