import React from "react";
import Link from "next/link";
import { arrayOf, shape } from "prop-types";

const Breadcrumb = ({ items }) => (items.length > 0 ? (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {items && items.map((item, index) => (
        <React.Fragment key={item.name}>
          {index === items.length - 1 ? (
            <li className="breadcrumb-item active" aria-current="page">
              {item.name || "Last page"}
            </li>
          ) : (
            <li className="breadcrumb-item">
              <Link href={item.href}>
                <a>Inicio</a>
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ol>
  </nav>
) : null);

Breadcrumb.defaultProps = {
  items: [],
};

Breadcrumb.propTypes = {
  items: arrayOf(shape())
};

export default Breadcrumb;
