import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Topbar />
    </div>
  );
}

export default App;
