import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import Rank from './components/rank/rank';
// import ParticlesBg from 'particles-bg'
import { Particle } from './components/particles/particles';
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* <ParticlesBg type="square" bg={true} />*/}
      <Particle />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*
  <FaceRecognition />*/}
    </div>
    
  );
}

export default App;
