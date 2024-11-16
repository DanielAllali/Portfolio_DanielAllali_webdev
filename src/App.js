import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomCursor from "./components/customCursor/CustomCursor";
import { useSelector } from "react-redux";
import Home from "./components/HomePage/Home";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AccessibilityStatement from "./accessibilityStatement/AccessibilityStatement";

function App() {
    const theme = useSelector((state) => state.webSlice.theme);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    return (
        <Router>
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/accessibility-statement"
                        element={<AccessibilityStatement />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
