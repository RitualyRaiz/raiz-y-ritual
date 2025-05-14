import React from "react";
import { Advertencia } from "./Advertencia";
import { ExploraPorCategora } from "./ExploraPorCategora";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { UltimosArticulos } from "./UltimosArticulos";
import image2 from "./image-2.png";
import "./style.css";

export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="div-3">
        <ExploraPorCategora />
        <UltimosArticulos />
        <img className="image" alt="Image" src={image2} />

        <Header />
        <Footer />
        <Advertencia />
      </div>
    </div>
  );
};
