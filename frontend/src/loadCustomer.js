import { AuthContextProvider } from './context/AuthContext';
import CusBody from './components/customer/CusBody';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

const loadCus = () => {
    return (  

    <div>
        <Router>
        <AuthContextProvider >
        <Route component={CusBody} />
        </AuthContextProvider>
        </Router>
    </div>);
}
 
export default loadCus;


