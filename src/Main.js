import React, { useState } from "react";
import Editor from "./Editor";
import Footer from "./Footer";
import Output from "./Output";
var beautify_js = require("js-beautify"); // also available under "js" export
var beautify_css = require("js-beautify").css;
var beautify_html = require("js-beautify").html;
const Main = () => {
  const values = {
    html: beautify_html(
      "<h1>I ♥  COiDE</h1><p>Edit the code above and see output here</p>"
    ),
    css: beautify_css(
      "body {text-align: center;}h1{color: crimson;}p{color: gray;}"
    ),
    js: beautify_js("window.onload=function(){console.log('js loaded')}"),
  };

  const [html, setHtml] = useState(values["html"]);
  const [css, setCss] = useState(values["css"]);
  const [js, setJs] = useState(values["js"]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="header">
        <span className="code">CO</span>
        <u className="ide">
          i<span className="code">DE</span>
        </u>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        className="editor-container"
      >
        <Editor
          type="html"
          value={html}
          onChangeHandler={setHtml}
          beautify={beautify_html}
        ></Editor>
        <Editor
          type="css"
          value={css}
          onChangeHandler={setCss}
          beautify={beautify_css}
        ></Editor>
        <Editor
          type="javascript"
          value={js}
          onChangeHandler={setJs}
          beautify={beautify_js}
        ></Editor>
      </div>
      <div style={{ height: "40vh" }}>
        <Output html={html} css={css} js={js}></Output>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default React.memo(Main);
