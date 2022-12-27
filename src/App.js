// import "./App.css";
import ClassComponent from "./pages/Components/ClassComponent";
import FunctionalComponent from "./pages/Components/FunctionalComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const company = "Google";
  const [name, setName] = useState("devansh");
  return (
    // <div className="App">
    //   <h1>Class Component</h1>
    //   <ClassComponent />
    //   <h1>Functional Components</h1>
    //   <FunctionalComponent name={name} height={5.5} company={company} setName={setName} />
    //   {/* <FunctionalComponent />
    //   <FunctionalComponent />
    //   <FunctionalComponent />
    //   <FunctionalComponent />
    //   <FunctionalComponent /> */}
    // </div>
    <Routes>
      <Route path="/" element={<ClassComponent />} />
      <Route path="/functional-component" element={<FunctionalComponent name={name} height={5.5} company={company} setName={setName} />} />
    </Routes>
  );
}

export default App;
