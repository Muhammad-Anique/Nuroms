import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import Page from './Components/FeaturePage/Page';

function App() {
  return (
    <div className='Container'>
      <div className="navbar">
       <Navbar/>
      </div>
      <div className='PageLay'>
        <Page/>
      </div>
    </div>
  );
}

export default App;
