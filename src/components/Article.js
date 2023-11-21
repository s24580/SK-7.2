import React from "react";
import BrowserSection from "./BrowserSection";

const Article = ({ browsers }) => (
  <article>
    {browsers.map((browser, index) => (
      <BrowserSection key={index} browser={browser} />
    ))}
  </article>
);

export default Article;
