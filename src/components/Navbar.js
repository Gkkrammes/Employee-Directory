import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="search-area col-4">
        <Search />
      </div>
    </nav>
  );
}
export default Navbar;