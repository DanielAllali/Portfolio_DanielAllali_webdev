import "./App.css";
import CustomCursor from "./components/customCursor/CustomCursor";
import ForthSection from "./components/HomePage/forthSection/ForthSection";
import { useSelector } from "react-redux";

import Home from "./components/HomePage/Home";
import { Toaster } from "react-hot-toast";

function App() {
    const theme = useSelector((state) => state.webSlice.theme);
    return (
        <div
            className="App"
            style={{
                "--bgc": theme.bgc,
                "--weak": theme.weak,
                "--strong": theme.strong,
                "--highlight": theme.highlight_weak,
                "--highlight_strong": theme.highlight_strong,
            }}
        >
            <Toaster />
            <CustomCursor />
            <Home />
        </div>
    );
}

export default App;
