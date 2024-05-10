import React from "react";
import Hero from "./hero/Hero";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Awards from "./awards/Awards";
import Location from "./Location/Location";
import Team from "./team/Team";
import Price from "./price/Price";

const index = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
    </>
  );
};

export default index;
