import "./ScrambledText.css";

const ScrambledText = () => {
  const items = [
    "Home",
    "About",
    "Hover To Scramble Me",
    "Services",
    "Our Team",
    "Contact Us",
  ];

  const handleMouseOver = (event, originalText) => {
    const element = event.target;
    const randomChars = "!@#$%^&*()_+-<>?";
    let iterations = 0;

    const interval = setInterval(() => {
      element.textContent = originalText
        .split("")
        .map((char, index) => {
          if (index < iterations) return char;
          return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        })
        .join("");

      if (iterations >= originalText.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 50);
  };

  return (
    <div className="st-container">
      <div className="st-body">
    <ul className="st-ul">
      {items.map((item, index) => (
        <li className="st-li" key={index}>
          <a
            className="st-a"
            href="#"
            data-text={item}
            onMouseOver={(e) => handleMouseOver(e, item)}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
};

export default ScrambledText;
