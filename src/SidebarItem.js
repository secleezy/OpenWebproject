import React from "react";
import "./pages/UserInterface.css"; //내가만든 css 가져오기

function SidebarItem({ menu }) {
  return (
    <div className="sidebar-item">
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem;