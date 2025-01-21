import { useState, useEffect } from "react";
import "./SmokeEffect.css";

const SmokeEffect = () => {
  const [smokeParticles, setSmokeParticles] = useState([]);

  useEffect(() => {
    const createSmoke = (e) => {
      const newParticle = {
        id: Date.now(), // ID único para cada partícula
        x: e.clientX,
        y: e.clientY,
      };

      setSmokeParticles((prevParticles) => [...prevParticles, newParticle]);

      // Eliminar la partícula después de la animación
      setTimeout(() => {
        setSmokeParticles((prevParticles) =>
          prevParticles.filter((particle) => particle.id !== newParticle.id)
        );
      }, 1000); // Duración de la animación (1s)
    };

    document.addEventListener("mousemove", createSmoke);

    return () => {
      document.removeEventListener("mousemove", createSmoke);
    };
  }, []);

  return (
    <div className="smoke-container">
    <div className="smoke-body">
    <div id="smoke">
      {smokeParticles.map((particle) => (
        <div
          key={particle.id}
          className="elem"
          style={{ left: `${particle.x}px`, top: `${particle.y}px` }}
        ></div>
      ))}
    </div>
    <h1 className="smoke-title">Smoke Cursor Effect</h1>
    </div>
    </div>

  );
};

export default SmokeEffect;
