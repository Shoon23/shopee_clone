import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <div className="bg-orange-600 pl-24 pr-24 h-32">
      <Navbar />
      <Searchbar />
    </div>
  );
};

export default Header;
