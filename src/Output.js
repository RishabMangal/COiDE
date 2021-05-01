import React, { useState, useEffect } from "react";

const Output = ({ html, css, js }) => {
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
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        width={"100%"}
        height="100%"
        title="Output"
        srcDoc={code}
      ></iframe>
    </div>
  );
};

export default React.memo(Output);
