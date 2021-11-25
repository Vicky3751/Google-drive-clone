import Navbar from "./components/Navbar";
import Body from "./MainPage/Body";
function App() {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ width: "98%", margin: "auto" }}>
        <Navbar />
      </div>
      <Body />
    </div>
  );
}

export default App;
