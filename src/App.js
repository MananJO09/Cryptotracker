import './App.css';
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import MainComponent from './Components/LandingPage/MainComponent';

function App() {
  return (
    <div className="App">
    <Header/>
    <MainComponent/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
