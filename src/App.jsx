import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";

function App() {
  const [selectedTool, setSelectedTool] = useState("");
  return (
    <div className="relative flex h-screen w-screen">
      <Sidebar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      <Canvas selectedTool={selectedTool} />
    </div>
  );
}

export default App;
