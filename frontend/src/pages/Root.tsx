import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <div className=" flex flex-col gap-5">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
