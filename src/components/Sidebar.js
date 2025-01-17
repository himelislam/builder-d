import React from "react";
import { useDrag } from "react-dnd";

const components = [
  { id: "title", label: "Title", type: "text", defaultContent: "New Title" },
  { id: "button", label: "Button", type: "button", defaultContent: "Click Me" },
  { id: "form", label: "Form", type: "form", defaultContent: "<input />" },
  { id: "image", label: "Image", type: "img", defaultContent: "Image URL" },
];

const Sidebar = () => {
  return (
    <div style={{ width: "20%", padding: "10px", background: "#f4f4f4" }}>
      <h3>Components</h3>
      {components.map((component) => (
        <DraggableComponent key={component.id} component={component} />
      ))}
    </div>
  );
};

const DraggableComponent = ({ component }) => {
  const [, dragRef] = useDrag(() => ({
    type: "component",
    item: component,
  }));

  return (
    <div ref={dragRef} style={{ padding: "8px", marginBottom: "8px", border: "1px solid #ccc", cursor: "grab" }}>
      {component.label}
    </div>
  );
};

export default Sidebar;
