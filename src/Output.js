import React from "react";

const Output = (props) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        width={"100%"}
        height="100%"
        title="Output"
        srcDoc={props.code}
      ></iframe>
    </div>
  );
};

export default Output;
