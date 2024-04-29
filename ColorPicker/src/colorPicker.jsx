import React, {useState} from "react";

function colorPicker(){
    const [color,setColor] = useState('#000000');
    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <div className="container">
            <h1>Color Picker App</h1>
            <div className="colorDiv" style={{backgroundColor : color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>
            
        </div>
    );
}

export default colorPicker