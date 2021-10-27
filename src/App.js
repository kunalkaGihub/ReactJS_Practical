import React,{ useState} from 'react';
import './App.css';
import TextForm from './components/TextForm';

function App() {

  const [alignText, setAlignText] = useState("left")

  const handleTextRight = () =>{
        setAlignText("end")
    }
    const handleTextLeft = () =>{
        setAlignText("left")
    }
    const handleTextCenter = () =>{
        setAlignText("center")
    }
 
  return (
    <>
     <div className="container my-3">
      <TextForm alignText={alignText} handleTextRight={handleTextRight} handleTextLeft={handleTextLeft} handleTextCenter={handleTextCenter}/>
      </div>
    </>
  );
}

export default App;
