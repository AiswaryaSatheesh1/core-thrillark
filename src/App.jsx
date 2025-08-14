import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Navbar/>
      <Body/>
      
      <Routes>
        {/* <Route path="/" element={<Header/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
