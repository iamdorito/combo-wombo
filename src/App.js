import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
      </header>
      <MainPage />
    </div>
  );
}

export default App;