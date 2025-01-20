

import { useState } from "react";
import './SocialMenu.css'; // Importa los estilos aquí

const socialLinks = [
  { name: "logo-facebook", color: "#1877f2", url: "#" },
  { name: "logo-whatsapp", color: "#25d366", url: "#" },
  { name: "logo-twitter", color: "#1da1f2", url: "#" },
  { name: "logo-dribbble", color: "#ea4c89", url: "#" },
  { name: "logo-linkedin", color: "#0a66c2", url: "#" },
  { name: "logo-instagram", color: "#c32aa3", url: "#" },
  { name: "logo-pinterest", color: "#bd081c", url: "#" },
  { name: "logo-youtube", color: "#ff0000", url: "#" },
];

export default function SocialMenu() {
  const [active, setActive] = useState(false);

  return (
    <div className="container-social">

    <div className="body-social">

    <div className={`menu ${active ? "active" : ""}`}>
      <div className="toggle" onClick={() => setActive(!active)}>
        <ion-icon name="share-social"></ion-icon>
      </div>
      {socialLinks.map((link, index) => (
        <li className="li-social" key={index} style={{ "--i": index, "--clr": link.color }}>
          <a className="a-social" href={link.url}>
            <ion-icon name={link.name}></ion-icon>
          </a>
        </li>
      ))}
    </div>

    </div>
    </div>


  );
}
