import logo from "./logo.svg";
import "./App.css";
//ES module system
import { useState, useEffect } from "react";

// VS Code JS, python,
// 포맷팅 => prettier

//React Classs Component Vs. Function Component
//Props
function Button(props) {
  console.log(props);
  // 구조 분해 할당
  const { children, color, onClick } = props;
  //JSX
  // inline 스타일
  // css key camel 표기법으로 작성
  if (color === "blue") {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: "blue",
        }}
      >
        {children}
      </button>
    );
  } else {
    return <button onClick={onClick}>{children}</button>;
  }
}

// App component
function App() {
  // state  만드는 방법은 useState
  const [count, setCount] = useState(0);
  
  //불변성 
  
  const handleButtonClick = () => {
    setCount(count => count+1)
    // setCount('test')
  }
  
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Button color="yellow">전달2</Button>
      <Button onClick={handleButtonClick} color="blue">
        파란색버튼
      </Button>
      <h1>카운트: {count}</h1>
    </div>
  );
}

export default App;
