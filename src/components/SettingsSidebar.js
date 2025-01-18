import React from "react";

const SettingsSidebar = ({ selectedComponent, setSelectedComponent }) => {
  if (!selectedComponent) {
    return (
      <div style={{ width: "20%", padding: "10px", background: "#f4f4f4" }}>
        <h3>Settings</h3>
        <p>Select a component to edit.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value, "from set change");
    setSelectedComponent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ width: "20%", padding: "10px", background: "#f4f4f4" }}>
      <h3>Settings</h3>
      <label>
        Content:
        <input
          type="text"
          name="defaultContent"
          value={selectedComponent.defaultContent}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SettingsSidebar;
