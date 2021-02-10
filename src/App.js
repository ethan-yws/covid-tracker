import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header Bar */}
      <Header />

      <div className="app-page">
        {/* Side Bar */}
        <Sidebar />
        {/* Map */}
        <Map />
      </div>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default App;
