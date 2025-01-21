import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, NavbarBrand, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import socialImg from '../assets/images/Social.jpg';
import flipCardImg from '../assets/images/FlipCard.jpg';
import animatedTextImg from '../assets/images/AnimatedText.jpg';
import rotationIconsImg from '../assets/images/RotationIcons.jpg';
import smokeImg from '../assets/images/smoke.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

export default function Home() {
  const projects = [
    {
      img: socialImg,
      title: "Social Network Menu",
      subtitle: "Animated menu",
      description: "A stylish round button that, when clicked, expands to reveal social media icons around it.",
      link: "/socialmenu"
    },
    {
      img: flipCardImg,
      title: "3D Flip Card",
      subtitle: "Hover card",
      description: "A sleek and interactive card featuring an image on the front that flips on hover to reveal details.",
      link: "/flipcard"
    },
    {
      img: animatedTextImg,
      title: "Animated Text",
      subtitle: "Landing hero",
      description: "A captivating hero section for a landing page featuring an eye-catching animated text effect.",
      link: "/animatedtext"
    },
    {
      img: rotationIconsImg,
      title: "Rotation Menu Icons",
      subtitle: "Animated icons",
      description: "Two interactive menu icon buttons that seamlessly toggle between open and closed states.",
      link: "/rotationicons"
    },
    {
      img: smokeImg,
      title: "Smoke Cursor Effect",
      subtitle: "Cursor effect",
      description: "A cool effect that generates a smoke trail following the cursor for an immersive experience.",
      link: "/smokeeffect"
    },
  ];

  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className='brand-text'>
          MicroLab <FontAwesomeIcon className='ms-2' icon={faFlask} spin />
        </NavbarBrand>
      </Navbar>

      <Container className='my-4'>
        <div className='my-4 text-center home-title'>
          <h2>A collection of tiny but mighty frontend projects!</h2> 
          <h2>Built with HTML, CSS, and JavaScript, then converted into React components to bring them together in this interactive and playful showcase.</h2>
        </div>

        <Row>
          {projects.map((project, index) => (
            <Col key={index} sm="12" md="6" lg="4" className="mb-4">
              <Card>
                <CardImg alt={project.title} src={project.img} top width="100%" />
                <CardBody className='home-card-body'>
                  <CardTitle tag="h5">{project.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">{project.subtitle}</CardSubtitle>
                  <CardText>{project.description}</CardText>
                  <Link to={project.link} target="_blank">
                    <Button color='warning'>Live Demo</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
