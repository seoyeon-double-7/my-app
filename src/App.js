import { useState, useEffect } from "react";
function Hello() {
  function byFn() {
    console.log("bye  :(");
  }
  // 컴포넌트가 파괴 될때 return한 function을 호출하게 됨
  function hiFn() {
    console.log("hi :)");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
