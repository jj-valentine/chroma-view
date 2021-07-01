import React from "react";
// Component(s)
import Header from "./Header/Header.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import ColorPicker from "./Page/ColorPicker/ColorPicker.jsx";
import ColorView from "./Page/ColorView/ColorView.jsx";

function App() {

  

  return (
    <>
      <Header />
      <Sidebar />
      <ColorPicker />
      <ColorView />
    </>
  );
}

export default App;