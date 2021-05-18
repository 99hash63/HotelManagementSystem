import { AuthContextProvider } from './context/AuthContext';
import CusBody from './components/customer/CusBody';


const loadCus = () => {
    return (  

    <div>
        <AuthContextProvider >
            <CusBody></CusBody>
        </AuthContextProvider>
    </div>);
}
 
export default loadCus;


