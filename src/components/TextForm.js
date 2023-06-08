
import React,{useState} from 'react';


const TextForm = (props)=>{


const [text, setText]=useState('Enter text here');
const [btnText,setbtnText]=useState("Change to Dark Mode")
    //functions

    const clicker=()=>{
        setText(text.toUpperCase())
        props.showAlert("Changed to Uppercase","success");
    }
    //we need to change this
    const [styleText,setStyles]= useState({
        color:'white',
        backgroundColor:'black',
    });
    const copyText=()=>{
        let text=document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied","success");
    }
   
    const handleOnChange=(event)=>{
        //this onchange was required otherwise we cant change inner textarea text 
        setText(event.target.value);

    }

    const clickerdown=()=>{
        setText(text.toLowerCase());
        props.showAlert("Changed to Lowercase","success");
    }

    const clearText=()=>{
        setText(" ");
        props.showAlert("Cleared","success");
    }

   const concatText=()=>{
    let newText=text.split(" ")
    setText(newText.join(""));
    props.showAlert("Concated text","success");
   }

   const toggleMode=()=>{
    if(styleText.color === 'black'){
        setStyles({
            color:'white',
            backgroundColor:'black',
        });
          
        
         setbtnText('Change to White Mode')
    }
    else if(styleText.color === 'white'){
        setStyles({
            color:'black',
            backgroundColor:'white',
        })
          
        
         setbtnText('Change to Dark Mode')
    }
   }

return(
    <div style={styleText}>
    
<h1  >{props.heading}</h1>

<div className="container" style={styleText}>
<textarea  value={text}  rows="12" cols="50" className='my-4' onChange={handleOnChange} style={styleText} id='mybox' ></textarea>
</div>
<div style={styleText} >
<button className="btn btn-primary mx-3 "  style={styleText} onClick={clicker } >Change to UpperCase</button>
<button className="btn btn-primary mx-3 "  style={styleText} onClick={clickerdown}>Change to LowerCase</button>
<button className="btn btn-primary mx-3"  style={styleText} onClick={clearText}>Clear Written  text</button>
<button className="btn btn-primary mx-3"  style={styleText} onClick={concatText}>Concat Written Text</button>
<button className="btn btn-primary  mx-3"  style={styleText}  onClick={toggleMode}>{btnText}</button>
<button className="btn btn-primary mx-3"  style={styleText}  onClick={copyText}>Copy Written Text</button>
</div>


<div className="container" style={styleText}>
    <h1 className=" my-4">Your Text Summary</h1>
    <p>{text.split(' ').length} words and {text.length}characters</p>
    <p>{0.008*text.split(' ').length} average time read</p>
    <div className="container">
    <h2 >Preview</h2>
    <p >{text}</p>
    </div>
    
</div>
    </div>
);

}

export default TextForm;