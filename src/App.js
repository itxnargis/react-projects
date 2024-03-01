import './App.css';
import Accordian from './components/accordian/index';
import RandomColorGenerator from './components/random-color/index';
import StarRating from './components/star-rating/index';
import ImageSlider from './components/image-slider/index';
import LoadMoreData from './components/load-more-data/index';
import QRCodeGenerator from './components/QR-code-generator/index';
import DarkLightTheme from './components/dark-light-theme/index';
import ScrollIndicator from './components/scroll-indicator/index';
import ModalTest from './components/custom-modal/modal-test';
import GithubProfileFinder from './components/github-profile-finder/github';

function App() {
  return (
    <div>
      {/* Accordian components  */}
      {/* <Accordian /> */}

      {/* RandomColorGenerator components  */}
      {/* <RandomColorGenerator /> */}

      {/* StarRating components  */}
      {/* <StarRating noOfStars={5} /> */}

      {/* image slider components  */}
      {/* <ImageSlider
        url={'https://picsum.photos/v2/list'}
        limit={'10'}
        page={"1"} /> */}

      {/* LoadMoreData components  */}
      {/* <LoadMoreData /> */}

       {/* QRCodeGenerator components */}
      {/* <QRCodeGenerator /> */}

       {/* DarkLightTheme components */}
       {/* <DarkLightTheme /> */}

         {/* ScrollIndicator components */}
       {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

         {/* ModalTest components */}
       {/* <ModalTest /> */}

         {/* GithubProfileFinder components */}
       <GithubProfileFinder />

         {/* DarkLightTheme components */}
       {/* <DarkLightTheme /> */}

         {/* DarkLightTheme components */}
       {/* <DarkLightTheme /> */}

    </div>
  );
}

export default App;
