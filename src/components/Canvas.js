import React from "react";
import { useDrop } from "react-dnd";
import useCanvas from "../hooks/useCanvas";

const Canvas = ({ setSelectedComponent }) => {
  const { components, addComponent, updateComponentPosition } = useCanvas();

  const [, dropRef] = useDrop(() => ({
    accept: "component",
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (offset) {
        addComponent({ ...item, x: offset.x, y: offset.y });
      }
    },
  }));

  return (
    <div
      ref={dropRef}
      style={{
        flex: 1,
        border: "1px solid #ccc",
        position: "relative",
      }}
    >
      {components.map((component, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: component.y,
            left: component.x,
            padding: "4px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedComponent(component)}
        >
          {component.type === "text" ? component.defaultContent : null}
          {component.type === "button" ? <button>{component.defaultContent}</button> : null}
          {component.type === "img" ? <img src={component.defaultContent} alt="dropped" width="50" /> : null}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
