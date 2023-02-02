import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value); // useEffect : 코드가 한번만 실행될 수 있도록 보호해줌
  useEffect(() => {
    console.log("I run only once");
  }, []);
  // keyword가 변화하고, if문 조건 충족할 경우 실행
  useEffect(() => {
    //if (keyword !== "" && keyword.length > 5)
    //  console.log("SEARCH FOR", keyword);
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword'&'counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
