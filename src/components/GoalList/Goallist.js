import React from "react";
import "./Goallist.css";
const Goallist = props =>{
    
    //console.log(props.goals);
    return (
        <ul className='goal-cls'>
        {props.goals.map(goall =>   {
                return <li key={goall.id}><b>{goall.text}</b></li>;
            })}
        </ul>
    );
};

export default Goallist;