
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, NavbarBrand, 
          CardGroup, Card, CardImg, CardBody, 
          CardTitle, CardSubtitle, CardText } from 'reactstrap';
import socialImg from '../assets/images/Social.jpg';
import flipCardImg from '../assets/images/FlipCard.jpg';
import animatedTextImg from '../assets/images/AnimatedText.jpg';
import rotationIconsImg from '../assets/images/RotationIcons.jpg';
import smokeImg from '../assets/images/smoke.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask }  from '@fortawesome/free-solid-svg-icons';           

export default function Home(){

  return (
    <>
    <Navbar
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      MicroLab <FontAwesomeIcon className='ms-2' icon={faFlask} spin />
    </NavbarBrand>
  </Navbar>

    <Container className='my-4'>
      <div className='my-4 text-center'>
        <h1>Micro frontend projects created with HMTL, CSS and Javascript.</h1>
      </div>
      <CardGroup>
          <Card>
            <CardImg
              alt="Card image cap"
              src={socialImg}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Social Network Menu
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Animated menu
              </CardSubtitle>
              <CardText>
              A stylish round button that, when clicked, expands to reveal social media icons around it. Perfect for enhancing user engagement and providing quick access to social platforms with a smooth and elegant animation.
              </CardText>
              <Link to={'/socialmenu'} target="_blank">
                <Button color='warning'>
                  Live Demo
                </Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src={flipCardImg}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                3D Flip Card
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Hover card
              </CardSubtitle>
              <CardText>
              A sleek and interactive card featuring an image on the front. When hovered over, it smoothly flips to reveal the back side, displaying profile details. Perfect for showcasing personal or professional information with a dynamic and engaging animation.
              </CardText>
              <Link to={'/flipcard'} target="_blank">
                <Button color='warning'>
                  Live Demo
                </Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src={animatedTextImg}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Animated Text
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Landing hero
              </CardSubtitle>
              <CardText>
              A captivating hero section for a landing page featuring an eye-catching animated text effect. This dynamic animation adds a modern and engaging touch to the page. The section also includes a sleek navigation bar for easy access to different parts of the site.
              </CardText>
              <Link to={'/animatedtext'} target="_blank">
                <Button color='warning'>
                  Live Demo
                </Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src={rotationIconsImg}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Rotation Menu Icons
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
              Animated icons                
              </CardSubtitle>
              <CardText>
                  A dynamic component featuring two interactive menu icon buttons with seamless toggling between open and closed states. This engaging effect enhances user experience by providing a visually intuitive way to interact with the menu.
              </CardText>
              <Link to={'/rotationicons'} target="_blank">
                <Button color='warning'>
                  Live Demo
                </Button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src={smokeImg}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Smoke Cursor Effect
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
              Cursor effect                
              </CardSubtitle>
              <CardText>
                  A dynamic component featuring two interactive menu icon buttons with seamless toggling between open and closed states. This engaging effect enhances user experience by providing a visually intuitive way to interact with the menu.
              </CardText>
              <Link to={'/smokeeffect'} target="_blank">
                <Button color='warning'>
                  Live Demo
                </Button>
              </Link>
            </CardBody>
          </Card>
      </CardGroup>
    </Container>
      
    </>

  )
}