import './App.css';
import Body from './components/body';
import Footer from './components/Footer';
import Header from './components/Header';
import CusHeader from './components/CusHeader'


function App() {
  return (
    <div>
      <CusHeader></CusHeader> 
      {/* <Header /> */}
      <Body />
      <Footer />
    </div>



  );
}

export default App;
