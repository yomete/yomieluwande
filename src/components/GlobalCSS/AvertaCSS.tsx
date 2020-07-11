import * as React from "react"
import { createGlobalStyle } from "styled-components"

const FONTS = [
  {
    eotUrl: require("./fonts/AvertaDemoPE-Regular.eot"),
    woffUrl: require("./fonts/AvertaDemoPE-Regular.woff"),
    woff2Url: require("./fonts/AvertaDemoPE-Regular.woff2"),
    weight: "400",
  },
  {
    eotUrl: require("./fonts/AvertaDemoPE-ExtraboldItalic.eot"),
    woffUrl: require("./fonts/AvertaDemoPE-ExtraboldItalic.woff"),
    woff2Url: require("./fonts/AvertaDemoPE-ExtraboldItalic.woff2"),
    weight: "700",
    style: "italic",
  },
]

const CSS = createGlobalStyle`
  ${FONTS.reduce(
    (prev, font) => `
      ${prev}
      @font-face {
        font-display: fallback;
        font-family: "Averta";
        font-style: ${font.style ? font.style : "normal"};
        font-weight: ${font.weight};

        src: url("${font.eotUrl}");
        src: url("${font.woff2Url}") format("woff2"),
             url(${font.woffUrl}) format("woff"),
             url("${font.eotUrl}") format("embedded-opentype");
      }
    `,
    ""
  )}
`

const AvertaCSS = () => <CSS />

export default AvertaCSS
