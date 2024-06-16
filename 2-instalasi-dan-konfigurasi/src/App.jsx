import { useState } from "react";
import "./App.css";
import TombolReset from "./components/tombolReset";
import Tombol from "./components/tombol";

function App() {
  const [hasil, setHasil] = useState(0);

  return (
    <>
      <h4>- Chalange React dari pa shandika 🤡</h4>
      <Tombol type="-" set={setHasil} result={hasil} />
      <span>{hasil}</span>
      <Tombol type="+" set={setHasil} result={hasil} />
      <TombolReset set={setHasil} result={hasil} />
    </>
  );
}

export default App;
