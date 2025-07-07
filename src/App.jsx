import "./App.css"
import { Header } from "./components/header/header";
import { Content } from "./components/content/content";
function App(){
  return (
    <div id="App">
      <div id="header"><Header></Header></div>
      <div id="content"><Content></Content></div>
    </div>
  )
}

export default App;