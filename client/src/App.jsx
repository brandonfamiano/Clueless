import { useState } from "react";
import "./index.scss";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='body'>
      <Header />
    </div>
  );
}

export default App;
