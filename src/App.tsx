import Lottie from "lottie-react";
import './App.css'
//import animationData from "./Prueba_engranajes.json";
import animationData from "./assets/Prueba_engranajes_capavectorial.json";

function App() {
  return (
    <>
      <Lottie animationData={animationData} loop={true} />
    </>
  )
}

export default App
