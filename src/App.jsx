import "./App.css";
import { Header } from "./components/Header.jsx";
import { Characters } from "./components/Characters.jsx";
import data from "./characters.json";

function App() {
  
  return (
    <>
      <Header />

      <Characters charactersData={data.characters}/>
    </>
  );
}

export default App;
