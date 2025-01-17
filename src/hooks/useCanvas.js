import { useState } from "react";

const useCanvas = () => {
  const [components, setComponents] = useState([]);

  const addComponent = (component) => {
    setComponents((prev) => [...prev, component]);
  };

  const updateComponentPosition = (id, x, y) => {
    setComponents((prev) =>
      prev.map((comp, index) =>
        index === id ? { ...comp, x, y } : comp
      )
    );
  };

  return { components, addComponent, updateComponentPosition };
};

export default useCanvas;
