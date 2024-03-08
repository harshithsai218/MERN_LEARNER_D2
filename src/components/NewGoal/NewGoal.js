import React from "react";
import "./NewGoal.css";
const NewGoal = props =>{
    const addgoalhandler =event=>{
        event.preventDefault();

    const newGoal = {
        id: Math.random().toString(),
        text : 'my new goal',
    };
    props.onAddGoal(newGoal);
    };
    return(<form className="New-Goal-cls" onSubmit={addgoalhandler}>
        <input type = "text"/>
        <button type="submit">ADD GOAL</button>
    </form>);
};

export default NewGoal;