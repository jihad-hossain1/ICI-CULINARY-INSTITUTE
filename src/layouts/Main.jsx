import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/container/Container";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div className="pb-4">
      <Container>
        <Navbar></Navbar>

        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </Container>
      <div className="bg-gray-950">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
