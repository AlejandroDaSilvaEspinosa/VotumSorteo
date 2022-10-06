import "./App.css";
import RandomPicker from "./containters/RandomPicker";
import Logo from "./Logo";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo Height={"10vh"}></Logo>
      </header>
      <RandomPicker />
    </div>
  );
}

export default App;
