import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/coin";
import ComparePage from "./pages/compare";
import WatchlistPage from "./pages/watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
// import Footer from "./components/Common/Footer/footer";

function App() {
  const cursor = useRef(null);
  const cursorPointer = useRef(null);

  // useEffect(() => {
  //   cursor = document.getElementById("cursor");
  //   cursorPointer = document.getElementById("cursor-pointer");

  //   document.body.addEventListener("mousemove", function (e) {
  //     return (
  //       (cursor.style.left = e.clientX + "px"),
  //       (cursor.style.top = e.clientY + "px"),
  //       (cursorPointer.style.left = e.clientX + "px"),
  //       (cursorPointer.style.top = e.clientY + "px")
  //     );
  //   });

  //   document.body.addEventListener("mousedown", function (e) {
  //     return (
  //       (cursor.style.height = "0.5rem"),
  //       (cursor.style.width = "0.5rem"),
  //       (cursorPointer.style.height = "3rem"),
  //       (cursorPointer.style.width = "3rem")
  //     );
  //   });

  //   document.body.addEventListener("mouseup", function (e) {
  //     return (
  //       (cursor.style.height = "0.3rem"),
  //       (cursor.style.width = "0.3rem"),
  //       (cursorPointer.style.height = "2rem"),
  //       (cursorPointer.style.width = "2rem")
  //     );
  //   });
  // }, []);
  // Use useRef for cursor and cursorPointer
  

  useEffect(() => {
    // Assign the current property of refs
    cursor.current = document.getElementById("cursor");
    cursorPointer.current = document.getElementById("cursor-pointer");

    document.body.addEventListener("mousemove", function (e) {
      return (
        cursor.current.style.left = e.clientX + "px",
        cursor.current.style.top = e.clientY + "px",
        cursorPointer.current.style.left = e.clientX + "px",
        cursorPointer.current.style.top = e.clientY + "px"
      );
     
    });

    document.body.addEventListener("mousedown", function (e) {
      return(
        cursor.current.style.height = "0.5rem",
        cursor.current.style.width = "0.5rem",
        cursorPointer.current.style.height = "3rem",
        cursorPointer.current.style.width = "3rem"
      )
    });

    document.body.addEventListener("mouseup", function (e) {
      return (
        cursor.current.style.height = "0.3rem",
        cursor.current.style.width = "0.3rem",
        cursorPointer.current.style.height = "2rem",
        cursorPointer.current.style.width = "2rem"
      );
      
    });

    // Cleanup event listeners on component unmount

  }, []); // Empty dependency array to run the effect only once on mount


  return (
    <div className="App">
      <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

// 1. Is it working and functional? Is it responsive? Is it quick? Does it have a good User Experience?
// 2. What are the features? And how do you explain it to the interviewer.
// 3. Questions the interviewer can ask.

// How to explain it in interviews -
// 1. Explain the tech stack - React JS, Coin gecko, framer-motion, MUI components, custom styled ,axios
// the overall concept.
