import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/*Accordian Component*/}
     {/* <Accordian/>*/}

      {/*Random color Component*/}
      {/*<RandomColor/>*/}

      {/* Star rating component */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
