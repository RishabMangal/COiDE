import "./App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";

import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
