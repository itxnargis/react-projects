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
      <Accordian />
      <RandomColorGenerator />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        limit={'10'}
        page={"1"} />
      <LoadMoreData />
      <QRCodeGenerator />
      <DarkLightTheme />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <ModalTest />
      <GithubProfileFinder />

      {/* <DarkLightTheme /> */}

      {/* DarkLightTheme components */}
      {/* <DarkLightTheme /> */}

    </div>
  );
}

export default App;
