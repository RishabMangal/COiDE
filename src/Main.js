import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Output from "./Output";
var beautify_js = require("js-beautify"); // also available under "js" export
var beautify_css = require("js-beautify").css;
var beautify_html = require("js-beautify").html;
const Main = () => {
  const values = {
    html: beautify_html("<h1>I ♥  COiDE</h1>"),
    css: beautify_css("body{background:pink}"),
    js: beautify_js("window.onload=function(){console.log('js loaded')}"),
  };

  const [html, setHtml] = useState(values["html"]);
  const [css, setCss] = useState(values["css"]);
  const [js, setJs] = useState(values["js"]);
  const templateGen = (html, css, js) =>
    `<!DOCTYPE html>
     <html lang="en">
     <head>
     <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="Web site created using COiDE"
        />
     <title>React App</title>
     <style>${css}</style>
     </head>
     <body>
     ${html}
     <script>${js}</script>
     </body>
    </html>`;

  const [code, setCode] = useState(templateGen(html, css, js));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCode(templateGen(html, css, js));
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

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
      <div style={{ height: "45vh" }}>
        <Output code={code}></Output>
      </div>
    </div>
  );
};

export default Main;
