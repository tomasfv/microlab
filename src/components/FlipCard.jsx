
import "./FlipCard.css";
import mickImg from '../assets/images/Mick1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function FlipCard() {
  return (
    <div className="flip-main-container">

    <div className="flip-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Lado Frontal */}
          <div className="front-face">
            <img className="flip-img" src={mickImg} alt="Mick Jagger" />
          </div>

          {/* Lado Trasero */}
          <div className="back-face">
            <h2 className="flip-h2">Mick Jagger</h2>
            <p className="flip-p">I am a Songwriter</p>
            <div className="social-media">
              <a href="#" className="flip-a">
                <FontAwesomeIcon icon={faFacebookF} className="flip-i"/>
              </a>
              <a href="#" className="flip-a">
                <FontAwesomeIcon icon={faTwitter} className="flip-i"/>
              </a>
              <a href="#" className="flip-a">
                <FontAwesomeIcon icon={faInstagram} className="flip-i" />
              </a>
            </div>
            <a href="#" className="flip-btn">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
