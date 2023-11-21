import React from "react";

const Section = ({ browser }) => (
  <section>
    <h2>{browser.name}</h2>
    <img src={browser.logo} alt={`${browser.name} logo`} />
    <p>{browser.description}</p>
  </section>
);

export default Section;
