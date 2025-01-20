

import { useState } from "react";
import "./RotationIcons.css";

export default function RotationIcons() {
  const [isOpenMenu1, setIsOpenMenu1] = useState(false);
  const [isOpenMenu2, setIsOpenMenu2] = useState(false);

  return (
    <div className="ri-main-container">

    <div className="ri-container">
      {/* Primer menú */}
      <div 
        className={`ri-menu ${isOpenMenu1 ? "openmenu" : ""}`} 
        onClick={() => setIsOpenMenu1(!isOpenMenu1)}
      >
        <div className="ri-div">
          <span className="line-1 ri-span"></span>
          <span className="line-2 ri-span"></span>
          <span className="line-3 ri-span"></span>
        </div>
      </div>

      {/* Segundo menú */}
      <div 
        className={`ri-menu2 ${isOpenMenu2 ? "openmenu2" : ""}`} 
        onClick={() => setIsOpenMenu2(!isOpenMenu2)}
      >
        <div className="ri-div">
          <span className="line-1 ri-span"></span>
          <span className="line-2 ri-span"></span>
          <span className="line-3 ri-span"></span>
        </div>
      </div>
    </div>
    </div>

  );
}
