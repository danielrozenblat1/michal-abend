import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import FirstScreen from './screens/FirstScreen';
import KidsAndPregnent from './screens/carousels/KidsAndPregnent';
import FamilyAndBarMitzva from './screens/carousels/FamilyAndBarMitzva';
import SecondScreen from './screens/SecondScreen';
import ForthScreen from './screens/ForthScreen';
import BarMitzva from './screens/carousels/BarMitzva';
import Pregnent from './screens/carousels/Pregnent';
import PregnentMehiron from './screens/mehiron/PregnentMehiron';
import { useEffect, useState } from 'react';
import Recommends from './screens/carousels/Recommend';

function App() {
  const [scrolled, setScrolled] = useState(false);
  
 
    const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };



  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);


  return <>
  <div class="background">
  <NavBar/>
  <FirstScreen scrolled={scrolled}/>
  <KidsAndPregnent title="צילומי ילדים (גיל שנה)"/>
  <Pregnent  title2="צילומי הריון"/>
  <FamilyAndBarMitzva title="צילומי משפחה" />
  <BarMitzva title2="צילומי בר/בת מצווה"/>
  <SecondScreen/>
  <ForthScreen/>
  <Recommends title="תשמעו קצת מהלקוחות שלי"/>
  <PregnentMehiron/>
  </div>
  </>
}

export default App;
