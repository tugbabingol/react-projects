import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view'
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';

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

      {/*Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView/> */}

      {/* QR Code Generaator */}
      {/* <QRCodeGenerator/> */}

      {/* light and dark theme switch */}
      {/* <LightDarkMode/> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* Custom tabs component */}
      {/* <TabTest/> */}

      {/* Custom Modal Component */}
      <ModalTest/>

    </div>
  );
}

export default App;
