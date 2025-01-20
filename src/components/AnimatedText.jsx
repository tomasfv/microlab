
import "./AnimatedText.css";
import logo from "../assets/images/logo.png";
import argentinaImg from "../assets/images/Argentina.jpg";

export default function AnimatedText() {
  return (
    <div className="arg-container">

    <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${argentinaImg})` }}>
      {/* Navbar */}
      <nav className="arg-nav">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="arg-ul">
          <li className="arg-li"><a href="#" className="arg-a">Home</a></li>
          <li className="arg-li"><a href="#" className="arg-a">Explore</a></li>
          <li className="arg-li"><a href="#" className="arg-a">Places</a></li>
          <li className="arg-li"><a href="#" className="arg-a">About</a></li>
          <li className="arg-li"><a href="#" className="arg-a">Contact</a></li>
        </ul>
      </nav>

      {/* Título animado */}
      <h1 className="title">Argentina</h1>
    </div>
    </div>

  );
}
