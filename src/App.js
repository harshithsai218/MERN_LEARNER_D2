import React from 'react';
import "./App.css";
import Goallist from './components/GoalList/Goallist';
import NewGoal from './components/NewGoal/NewGoal';
const App = () => {
  const courseGoal = [
    {id: 'cg1',text : 'Finish this Course'},
    {id: 'cg2',text : 'learn all about the Course Main Topic'},
    {id: 'cg3',text : 'Help other students in the Course Q&A'}
  ];
  const addNewGoalHandler=(newGoal)=>{
      courseGoal.push(newGoal);
      console.log(courseGoal); 
  };
  return (
    <div className='div-cls'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <Goallist goals={courseGoal}/>

     
    </div>
  );
};

export default App;
