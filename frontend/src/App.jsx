import { useState } from "react";
import Intro from "./components/Intro/Intro";
import Home from "./pages/Home";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <Home />

      {!introDone && (
        <Intro onFinish={() => setIntroDone(true)} />
      )}
    </>
  );
}