
import "./App.css";
import WelcomePage from "./components/welcome-page.component";


function App() {
  return (
      <div>
        <nav className="App-header">
          <div className="navbar-brand">
            Sapphire's Site!
          </div>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
                Home
            </li>
          </div>
        </nav>
        <div>
        <WelcomePage/>
        </div>
      </div>
  );
}

export default App;
