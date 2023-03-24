import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import LoginPage from './Components/LoginPage/LoginPage';


function App() {
  return (
    <div className='Container'>
      <div className="navbar">
       <Navbar/>
      </div>
      <div className='LoginPageLay'>
        <LoginPage/>      
      </div>
    </div>
  );
}

export default App;
