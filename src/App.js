import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import QuantityPicker from "./components/quantityPicker";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Hello from React!!!</h1>
      <QuantityPicker></QuantityPicker>
      <Footer></Footer>
    </div>
  );
}

export default App;
