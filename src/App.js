import './App.css';
import Router from './routes/index.js';
import {AuthProvider} from "./hooks/useAuth";
import {BrowserRouter} from "react-router-dom";
import ResponsiveAppBar from "./layouts/header/Header";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ResponsiveAppBar/>
                <Router/>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
