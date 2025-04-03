import './App.css';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Specials from 'components/Specials';
import Rating from 'components/Rating';
import Footer from 'components/Footer';

function App() {

  return (
    <>
      <div>
        <Header/>
        <Banner/>
        <Specials/>
        <Rating/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
