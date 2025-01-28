import { useState } from "react";
import "./CSS/App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const changeAlert = (obj) => {
    setAlert({
      type: obj.type,
      message: obj.message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleBMode = () => {
    if (mode === "light") {
      setMode("blue");
      document.body.style.transition = "0.3s";
      document.body.style.backgroundColor = "rgb(0, 166, 255)";
    } else {
      setMode("light");
      document.body.style.transition = "0.3s";
      document.body.style.backgroundColor = "white";
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.transition = "0.3s";
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.transition = "0.3s";
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggler={toggleMode}
          toggleBMode={toggleBMode}
          changeAlert={changeAlert}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                heading="Enter your text below"
                mode={mode}
                changeAlert={changeAlert}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
