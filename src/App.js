import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import SettingsSidebar from "./components/SettingsSidebar";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Canvas setSelectedComponent={setSelectedComponent} />
        <SettingsSidebar
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
      </div>
    </DndProvider>
  );
}

export default App;
