import "./App.css";
import MainContainer from "./component/MainContainer";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

function App() {

  return (
    <>
      <Navbar />
      <div className="mix-container">
        <Sidebar />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
