import React from "react";
// Component(s)
import Page from "../Page.jsx";
// Style(s)
import "./colorview.scss";

function ColorView() {
  function colorShadeGenerator(red, green, blue) {
    // to avoid generating numbers greater than 255
    let max = Math.max(red, green, blue, 1);
    let limit = 255 / (max * 10);
    return new Array(5)
      .fill({ red, green, blue })
      .map((shade, i) => {
        // return [...shade].reduce()
        // if (i === 0) {
        //   factor = 1;
        // } 1 : (i + 1) * 2);
        // console.log(limit, factor)
        // shade.red = red * limit * factor, 
        // return shade;
      });
  }

  console.log(colorShadeGenerator(30, 144, 255));
  return (
    <Page>
    </Page>
  );
}

export default ColorView;