import './App.css';
import 'primereact/resources/themes/arya-green/theme.css'
import 'primeflex/primeflex.css';
import './fonts/VarsityTeam/VarsityTeam.woff'
import Main from "./containers/main/Main";
import {BrowserRouter} from "react-router-dom";
import {CloudinaryContext} from "cloudinary-react";
import {UserProvider} from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
        <UserProvider>
            <CloudinaryContext cloudName={"remote-german"} secure={true}>
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
            </CloudinaryContext>
        </UserProvider>
    </div>
  );
}

export default App;
