import './App.css';
import { useState } from "react";
import { CV } from "./CV/Cv";
import { Hero, About, Education, Experience, More } from "./components";

function App() {
  
  const { hero, education, experience, languages, habilities, volunteer } = CV;

  return (
    <div className="App">
      <Hero hero={hero}/>
      <About hero={hero}/>
      <Education education={education}/>
      <Experience experience={experience}/>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
        />
    </div>
  );
}

export default App;
