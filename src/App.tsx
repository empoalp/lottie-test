import Lottie from "lottie-react";
import './App.css'
import animationData from "./Prueba_engranajes.json";

function App() {
  return (
    <>
      <Lottie animationData={animationData} loop={true} />
    </>
  )
}

export default App
