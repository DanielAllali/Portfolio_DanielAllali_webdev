import "./App.css";
import CustomCursor from "./components/customCursor/CustomCursor";
import ForthSection from "./components/HomePage/forthSection/ForthSection";
import { useSelector } from "react-redux";

import Home from "./components/HomePage/Home";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function App() {
    const theme = useSelector((state) => state.webSlice.theme);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);
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
