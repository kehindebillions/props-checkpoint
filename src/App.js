import Profile from './profile/Profile'
import './App.css';

function App() {

  const handleName = () => {
    alert('kehinde billions')
  }
  return (
    <div className="App" style={{maxWidth:'500px', margin:'30px auto'}}>
      <Profile fullName ='kehindebillions' bio ='i am the richest man in Africa, i started my company with 1 naira ten years ago.' profession='software developer'>
        <img src='./mypicture.jpg' width="400px" heigth='400px' alt='mypicture'/> 
      </Profile>

      <handleName><button onClick={handleName}>name</button></handleName>
    </div>
  );
}

export default App;
