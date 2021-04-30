import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

const Editor = (props) => {
  const [options, setOptions] = useState({
    mode: props.type,
    theme: "material",
    lineNumbers: true,
  });

  return (
    <div
      style={{
        width: "98%",
        height: "50vh",
        // margin: "0.1rem",
        border: "1px solid gray",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "0.5rem",
          background: "black",
        }}
      >
        <select
          value={options.theme}
          onChange={(v) => {
            setOptions({ ...options, theme: v.target.value });
          }}
        >
          <option value="light">Light</option>
          <option value="material">Dark</option>
        </select>
        <select
          value={options.mode}
          onChange={(v) => {
            setOptions({ ...options, mode: v.target.value });
          }}
        >
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="javascript">js</option>
        </select>
      </div>
      <CodeMirror
        value={props.value}
        options={options}
        onChange={(editor, data, value) => {
          props.onChangeHandler(props.beautify(value));
        }}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default React.memo(Editor);
