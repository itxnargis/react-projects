import './App.css';
import Accordian from './components/accordian/index';
import RandomColorGenerator from './components/random-color/index';
import StarRating from './components/star-rating/index';

function App() {
  return (
    <div>
      {/* Accordian components  */}
      {/* <Accordian /> */}

      {/* RandomColorGenerator components  */}
      {/* <RandomColorGenerator /> */}

      {/* StarRating components  */}
      <StarRating noOfStars={5} />
    </div>
  );
}

export default App;
