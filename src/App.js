import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
 
  return (
    <div className="App">
      DEMO REDUX
      
      <div style={{ border: "1px solid black" }}>
        <Profile />
      </div>
      <div style={{ border: "1px solid black" }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
