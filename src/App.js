
// Resource is: Full React Tutorial #8 - Using State (useStateHook) https://www.youtube.com/watch?v=4pO-HcG2igk 
// by The Net Ninja youtube channel

// in this tutorial we defined:
//^ useState, Hooks, handleClick, onClick, Array Destructuring, and set

// we also learned what the following means: 
//^ ========= import { useState } from 'react' 
//^ ========= const Home = () => {}
//^ ========= { variable name }

//! =========================================== step 1

// this declares an empty variable - const Home =
// the empty () represents that it doesnt accept any props yet (props are a way to pass data into components)
// => is the arrow function syntax, indicating that you are defining a FUNCTION
// {} after the arrow function represents the body of the function where you define the behavior and return the JSX that describes the components UI
// in the below example: the Home component returns a JSX element containing an <h2> header and a <button> with an onClick event
// onClick is an event which executes certain functionality when a button is clicked. This could be when a user submits a form, when change certain content on the page, etc.
// you place the JavaScript function you want to execute inside the opening tag of the button

// const Home = () => {
  
//   const handleClick = () => {

//   }

//   return (
//       <div className="home">
//         <h2>Homepage</h2>
//         <button onClick={handleClick}>Click Me</button>
  
//       </div>
//     );
// }

// // this needs to be defined by a const or a let up top
// export default Home;

//! =========================================== step 2

// now we want to enter a variable that we will be able to use so we do let name = 'mario';
// then we use the <p>{ name }</p> to output the name we just declared
// however our { name } will not be changed by the <button onClick> just yet
// we need to add another variable to the handleClick function which will provide the { name } a new variable for it to be changed to
// so we add, name = 'luigi'; in the handleClick function, here we dont need to use let, 
// this does not update the output of { name } just yet, because the 'mario' variable is not yet reactive
// in order to do this we need to use a hook. and in this we need to to use 'USE' or more specifically useState
//^ a HOOK is a special type of function that does a specific job... ALL hooks start with 'USE'
// the useState hook allows us to give a reactive value, but also allows us to change that value whenever we want //^ useState

// const Home = () => {
//   let name = 'mario';

//   const handleClick = () => {
//     name = 'luigi';
//   }

//   return (
//       <div className="home">
//         <h2>Homepage</h2>
//         <p>{ name }</p> 
        
//         <button onClick={handleClick}>Click Me</button>
  
//       </div>
//     );
// }

// export default Home;


//! =========================================== step 3

// first we need to import the useState hook at the top, becuase we are going to destructure the useState hook
// doing this grabs it from the react library and allows us to use it in our component
// we can then comment out our 'mario' variable and then delete the 'luigi' variable
// we then write useState in our Home function and since useState is a function we have to invoke it with the ()
// we need to also give it value, in this case, 'mario' ie useState('mario); this alone doesnt store it into a value though
// in order to store it we need to add const [] = to the beginning of it, this is known as //^ARRAY DESTRUCTING this will grab 2 values that his hook will return to us
// the first value in this array is 'mario'. we need to give that value a name, so we can name it name lol ie const [name]
// the 2nd part of that array will be a value we will use to change the 1st value. 
// most times it will be called set and then whatever we called the value name... ie setName ie const[name, setName]
// now.. if we use the value of this function [name] then the it will give us the value of whatever that variable is in this case 'mario'
// if we want to change that value we can use the setName function to do it.
// so we add setName('luigi') to give the handleClick a new value to change the name to
// when we use setName in the handleClick, that triggers react to rerender the component (everything inside of the most outer <divs>)
// when it rerenders its going to change name since we have the new value of it since its been updated
// now if we click on the button it will be changed to the next value


// import { useState } from 'react';

// const Home = () => {
//   // let name = 'mario';

//   const [name, setName] = useState('mario');

//   const handleClick = () => {
//     setName('luigi')
//   }

//   return (
//       <div className="home">
//         <h2>Homepage</h2>
//         <p>{ name }</p> 
        
//         <button onClick={handleClick}>Click Me</button>
  
//       </div>
//     );
// }

// export default Home;


//! =========================================== step 4

// lets do another example which will be a number
// we added a new destructured array with name for our given variable of 25 the name of it will be age in this instance
// we use useState again and the action we will give it is to setAge
// then we give age a new variable using '30'
// now when we click the button it will go from 'mario is 25 years old.' to 'luigi is 30 years old'


import { useState } from 'react';

const Home = () => {

  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('luigi');
    setAge('30');
  }

  return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{ name } is { age } years old.</p> 
        
        <button onClick={handleClick}>Click Me</button>
  
      </div>
    );
}

export default Home;


