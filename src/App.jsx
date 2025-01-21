
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import Home from './components/Home.jsx'
import SocialMenu from './components/SocialMenu.jsx';
import FlipCard from './components/FlipCard.jsx';
import AnimatedText from './components/AnimatedText.jsx';
import RotationIcons from './components/RotationIcons.jsx';
import SmokeEffect from './components/SmokeEffect.jsx';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/socialmenu' element={<SocialMenu/>}/>
          <Route path='/flipcard' element={<FlipCard/>}/>
          <Route path='/animatedtext' element={<AnimatedText/>}/>
          <Route path='/rotationicons' element={<RotationIcons/>}/>
          <Route path='/smokeeffect' element={<SmokeEffect/>}/>
        
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
