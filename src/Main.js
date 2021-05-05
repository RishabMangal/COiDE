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
      "<h1>I ♥  COiDE</h1><p>Edit the code above and see output here</p><div><button onclick='sayHello()'> Say Hello!</button></div>"
    ),
    css: beautify_css(
      "body {text-align: center;}h1{color: crimson;}p {color: gray;}button{background-color: #007bff; color: white;padding: 8px;border: none;border-radius: 5px;font-size: 15px;cursor: pointer;}"
    ),
    js: beautify_js(
      "window.onload=function(){console.log('js loaded')}function sayHello(){  alert('Hello');}"
    ),
  };

  const [html, setHtml] = useState(values["html"]);
  const [css, setCss] = useState(values["css"]);
  const [js, setJs] = useState(values["js"]);
  // const [showModal, setShowModal] = useState({ isVisible: false, type: null });

  // const getEditor = (type) => {
  //   switch (type) {
  //     case "html":
  //       return (
  //         <Editor
  //           type="html"
  //           value={html}
  //           onChangeHandler={setHtml}
  //           beautify={beautify_html}
  //           setShowModal={setShowModal}
  //         ></Editor>
  //       );
  //     case "css":
  //       return (
  //         <Editor
  //           type="css"
  //           value={css}
  //           onChangeHandler={setCss}
  //           setShowModal={setShowModal}
  //           beautify={beautify_css}
  //         ></Editor>
  //       );
  //     case "javascript":
  //       return (
  //         <Editor
  //           type="javascript"
  //           value={js}
  //           setShowModal={setShowModal}
  //           onChangeHandler={setJs}
  //           beautify={beautify_js}
  //         ></Editor>
  //       );
  //     default:
  //       break;
  //   }
  // };

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
          // setShowModal={setShowModal}
        ></Editor>
        <Editor
          type="css"
          value={css}
          onChangeHandler={setCss}
          // setShowModal={setShowModal}
          beautify={beautify_css}
        ></Editor>
        <Editor
          type="javascript"
          value={js}
          // setShowModal={setShowModal}
          onChangeHandler={setJs}
          beautify={beautify_js}
        ></Editor>
      </div>
      <div style={{ height: "40vh" }}>
        <Output html={html} css={css} js={js}></Output>
      </div>
      {/* {showModal.isVisible ? (
        <div className="modal">{getEditor(showModal.type)}</div>
      ) : // <div className="modal">{showModal.ref}</div>
      null} */}
      <Footer></Footer>
    </div>
  );
};

export default React.memo(Main);
