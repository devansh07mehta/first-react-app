// import "./App.css";
import ClassComponent from "./Components/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent";
function App() {
  const company = "Google";
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <h1>Functional Components</h1>
      <FunctionalComponent name="devansh" height={5.5} company={company} />
      {/* <FunctionalComponent />
      <FunctionalComponent />
      <FunctionalComponent />
      <FunctionalComponent />
      <FunctionalComponent /> */}
    </div>
  );
}

export default App;
