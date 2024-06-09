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

function App() {
  return <>
  <NavBar/>
  <FirstScreen/>
  <KidsAndPregnent title="צילומי תינוקות"/>
  <Pregnent  title2="צילומי הריון"/>
  <FamilyAndBarMitzva title="צילומי משפחה" />
  <BarMitzva title2="צילומי בר/בת מצווה"/>
  <SecondScreen/>
  <ForthScreen/>
  </>
}

export default App;
