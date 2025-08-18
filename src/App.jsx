import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/body/body";
import CreateExp from "./components/header/createexp";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";

export default function App() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      <Header onCreateClick={() => setIsCreateOpen(true)} />
      <CreateExp open={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
      <Body />
    </BrowserRouter>
  );
}
