import logo from './logo.svg';
import './App.css';
import BirthdayCard from './components/BirthdayCard';

function App() {
  return (
    <div className="App">
      <BirthdayCard firstName = {"Amir"} lastName = {"Khayat"} age = {22} hairColor = {"Black"}/>
      <BirthdayCard firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"}/>
      <BirthdayCard firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"}/>

    </div>
  );
}

export default App;
