import React, {useState} from 'react'

const TextForm = () => {
    const [text, setText] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ")

    const [alignText, setAlignText] = useState("left")
    const [justifyText, setJustifyText] = useState("")
    const [textSize, setTextSize] = useState(20)
    const [textSizePer, settextSizePer] = useState()
    const [font, setFont] = useState("Open Sans")
    const [fonWeight, setFonWeight] = useState("bold")

    const handleChange= (event) =>{
        setText(event.target.value)
    }
    
    const handleTextSize = (event) =>{
        setTextSize(event.target.value)
    }

    const handleTextRight = () =>{
        setAlignText("end")
    }
    const handleTextLeft = () =>{
        setAlignText("left")
    }
    const handleTextCenter = () =>{
        setAlignText("center")
    }
    const handleTextJustify = () =>{
        setJustifyText("center")
    }

    const handleTextSizePer = (event) =>{
        settextSizePer(event.target.value)
    }

    const handleFUpClick= () =>{
        let spliting = text.split(" ");
        for(let i=0; i<spliting.length; i++){
        spliting[i] = spliting[i].charAt(0).toUpperCase() + spliting[i].slice(1);
        //console.log(spliting[i])
        }
        setText(spliting.join(" "));
    }

    const [punctuate, setPunctuate] = useState(0)
    const handlePuncCount = () => {
        const punct = "!,\;\.-?";
        let count = 0;
        for(let i = 0; i < text.length; i++){
           if(punct.includes(text[i])){
             count++;     
           };
        };
        setPunctuate(count)
     };

     const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/); //yeh regex extra space ko htaata hai
        //console.log(newText)
        setText(newText.join(" "))
    }
    

    return (
        <div className="row">
            <div className="mb-3 col-md-7">
                <textarea className="form-control text-left" 
                style={{
                    textAlign:alignText, 
                    justifyContent:justifyText, 
                    fontFamily:font,
                    
                    fontSize:`${textSize}px`,
                    // fontSize:`${textSizePer}%`,
                    fontWeight:fonWeight}} value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
            </div>

            <div className="col-md-4">
                <div className="row">
                    <div className="col-12 mb-2">
                    <label for="size" class="form-label">Font Style:</label>
                        <select className="input-group custom-select mb-2" onChange={(e)=>{
                            const selectedFont = e.target.value;
                            setFont(selectedFont)
                        }} placeholder="Select Font">
                            <option value="Open Sans" >Open Sans</option>
                            <option value="Poppins" >Poppins</option>
                            <option value="Zen Antique" >Zen Antique</option>
                            <option value="Zen Antique" >Noto Sans</option>
                            <option value="Oswald" >Oswald</option>
                        </select>
                        
                    </div>
                    <div className="d-flex mb-3">
                        <div className="col">
                        <label for="size" class="form-label">Font Weight:</label>
                        <select className=" input-group custom-select mb-2" onChange={(e)=>{
                            const selectedWeight = e.target.value;
                            setFonWeight(selectedWeight)
                        }} placeholder="Font Weight">
                            <option value="bold" >Bold</option>
                            <option value="normal" >Normal</option>  
                        </select>
                        
                        </div>
                          
                    </div>

                    <div className=" d-flex mb-3">

                        <div className="col">
                            {/* Text Size */}
                            <label for="size" class="form-label">Font Size: </label>
                            <a  onClick={() => setTextSize(textSize-1)} className="btn btn-primary" title="Decrement">-</a>
                            <input type="text" className="text-center" name="size" value={textSize} onChange={handleTextSize} placeholder="Change Text Size In px"/>
                            <a  onClick={() => setTextSize(textSize+1)} title="Increment" className="btn btn-primary">+</a>
                        </div>  
                        {/* <div className="col-md-6">
                        <label for="size" class="form-label">Per: 
                        <a  onClick={() => setTextSize(textSize-1)} className="btn btn-primary" title="Decrement">-</a> 
                            
                        <input type="text"  name="size" value={textSizePer} onChange={handleTextSizePer} placeholder="Change Text Size In %"/>
                        <a  onClick={() => setTextSize(textSize+1)} title="Increment" className="btn btn-primary">+</a>
                        </label>
                        </div> */}
                    </div>

                </div>
            

                
                <div className="d-flex mb-3">
                        <div className="col-md-3">
                        <button className="btn btn-sm btn-info px-4" onClick={handleTextLeft} >
                        <i class="fas fa-align-left"></i>
                        </button>
                        </div>
                        <div className="col-md-3">
                        <button className="btn btn-sm btn-warning px-4" onClick={handleTextCenter}>
                        <i class="fas fa-align-center"></i>
                        </button>
                        </div>
                        <div className="col-md-3">
                        <button className="btn btn-sm btn-secondary px-4" onClick={handleTextRight}>
                        <i class="fas fa-align-right"></i>
                        </button>
                        </div>
                        <div className="col-md-3">
                        <button className="btn btn-sm btn-info px-4" onClick={handleTextJustify}>
                        <i class="fas fa-align-justify"></i>
                        </button>
                        </div>
                </div>

                <div className="d-flex">
                        <div className="col-md-4">
                        <button disabled={text.length=== 0} className="btn btn-sm btn-primary mx-1 my-1" onClick={handlePuncCount}>Punctuation: {punctuate}</button>
                        </div>
                        <div className="col-md-4">
                        <button className="btn btn-sm btn-primary my-1" onClick={handleFUpClick}>First Letter Uppercase</button>
                        </div>
                        <div className="col-md-4"> 
                        <button className="btn btn-sm btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                        </div>
                </div>
                
            </div>
            <p> 
            Paragraph: {text.split(" ").filter((element)=> {return element.length !==0}).length ===0?0:text.split("\n").length}
            </p>
            <p>Words: {text.split(/\s+/).filter((element)=> {return element.length !==0}).length}</p>
            <p>Space: {text.split(" ").length -1}
            </p> 
        </div>
    )
}

export default TextForm
