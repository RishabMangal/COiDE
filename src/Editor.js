import React, { useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

const Editor = (props) => {
  // let thisRef = null;
  const [options, setOptions] = useState({
    mode: props.type,
    theme: "material",
    lineNumbers: true,
  });

  const [val, setVal] = useState(props.value);

  useEffect(() => {
    props.onChangeHandler(val);
  }, [props, val]);

  return (
    <div
      // ref={(ref) => {
      //   thisRef = ref;
      // }}
      style={{
        width: "100%",
        border: "1px solid gray",
        margin: "0px 0px 10px 0px",
        overflowWrap: "break-word",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5rem 1rem",
          background: "black",
        }}
      >
        <select
          className="select theme"
          value={options.theme}
          onChange={(v) => {
            setOptions({ ...options, theme: v.target.value });
          }}
        >
          <option value="light">Light</option>
          <option value="material">Dark</option>
        </select>
        {/* <select
          className="select mode"
          value={options.mode}
          onChange={(v) => {
            setOptions({ ...options, mode: v.target.value });
          }}
        >
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="javascript">js</option>
        </select> */}
        <span className="type">{props.type}</span>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
          }}
        > */}
        <button
          className="select btn"
          onClick={() => setVal(props.beautify(val))}
        >
          Beautify
        </button>
        {/* <button
            className="select btn"
            onClick={() => {
              props.setShowModal({
                isVisible: true,
                type: props.type,
                ref: thisRef,
              });
              console.log("ref: ", thisRef);
            }}
          >
            L
          </button> */}
        {/* </div> */}
      </div>
      <CodeMirror
        value={val}
        options={options}
        onBeforeChange={(editor, data, value) => {
          setVal(value);
        }}
      />
    </div>
  );
};

export default React.memo(Editor);
