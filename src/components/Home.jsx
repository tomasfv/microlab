
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, NavbarBrand, 
          CardGroup, Card, CardImg, CardBody, 
          CardTitle, CardSubtitle, CardText } from 'reactstrap';
import socialImg from '../assets/images/Social.jpg';
import flipCardImg from '../assets/images/FlipCard.jpg';
import animatedTextImg from '../assets/images/AnimatedText.jpg';
import rotationIconsImg from '../assets/images/RotationIcons.jpg';          

export default function Home(){

  return (
    <>
    <Navbar
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      MicroLab
    </NavbarBrand>
  </Navbar>
  
    <Container className='my-4'>
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
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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
                Card subtitle
              </CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to additional content.
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
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
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
                Rotation Menu Icon
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </CardText>
              <Link to={'/rotationicons'} target="_blank">
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