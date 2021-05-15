import { Link } from 'react-router-dom';
import './404.css'
import { useHistory } from "react-router-dom";
const Page404 = () => {
    const history = useHistory();
    
    return (


        <body>

            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>4<span></span>4</h1>
                    </div>
                    <h2>Oops! Page Not Be Found</h2>
                    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                    <Link onClick={history.goBack} >Back</Link>
                </div>
            </div>

        </body>


        );
}

export default Page404;