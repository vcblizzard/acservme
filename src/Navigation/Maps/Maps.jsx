import React from "react";
import PagesMaps from "./Pages/PagesMaps";
import NavMaps from "./NavMaps";
import FooterMaps from "./Footer/FooterMaps";

function Maps() {
  return (
    <div>
      <NavMaps />
      <section className="grid">
      <PagesMaps />
      </section>
      <div className="">
      <FooterMaps />
    </div>
    </div>
  );
}

export default Maps;
