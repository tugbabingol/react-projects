import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className="App">
      {/*Accordian Component*/}
      {/* <Accordian/>*/}

      {/*Random color Component*/}
      {/*<RandomColor/>*/}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={"1"}
        limit={"10"} /> */}

      {/* Load More Data Component */}
      {/* <LoadMoreData/> */}

      {/* QR Code Generaator */}
      <QRCodeGenerator/>

    </div>
  );
}

export default App;
