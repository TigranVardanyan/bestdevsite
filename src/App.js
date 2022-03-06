import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import ColorChanger from "./components/ColorChanger/ColorChanger";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <ColorChanger/>
    </div>
  );
}

export default App;
