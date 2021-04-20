import './App.css';
import Body from './components/body';
import Footer from './components/Footer';
import Header from './components/Header';
import CusHeader from './components/customer/CusHeader'
import axios from 'axios'
import {AuthContextProvider} from "./context/AuthContext"
import LoginButtonHeader from './components/customer/LoginButtonHeader'


axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <AuthContextProvider>
        <CusHeader></CusHeader>
        {/* <LoginButtonHeader></LoginButtonHeader>  */}
          
        {/* <Header /> */}
        <Body />
        <Footer />
      </AuthContextProvider>
    </div>



  );
}

export default App;
