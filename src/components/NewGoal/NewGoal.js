import React,{useState} from "react";
import "./NewGoal.css";
const NewGoal = props =>{
    //let enteredText = '';
    const [enteredText,setenteredText]=useState('');
    const addgoalhandler =event=>{
        event.preventDefault();

    const newGoal = {
        id: Math.random().toString(),
        text : enteredText,
    };
    setenteredText('');
    props.onAddGoal(newGoal);
    };

    const textChangedHandler = events =>{
        setenteredText(events.target.value);
    };
    return(<form className="New-Goal-cls" onSubmit={addgoalhandler}>
        <input type = "text" value={enteredText } onChange={textChangedHandler}/>
        <button type="submit">ADD GOAL</button>
    </form>);
};

export default NewGoal;