import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Middle_part from './Components/Middle_part';
import Footer_part from './Components/Footer_part';

function App() {
  return (
    <div className="App">
     <div className='main-screen'>
        <Header />
        <Middle_part />
        <Footer_part />
     </div>
    </div>
  );
}
export default App;
