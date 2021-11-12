import React from "react";
import { Link } from "react-router-dom";

function SearchBtn(props) {
  return (
    <Link to="/search">
      <div className="open-search">
        <button>+</button>
      </div>
    </Link>
  );
}
export default SearchBtn;
