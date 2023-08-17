import React from 'react';
import ReactDOM from 'react-dom/client';
import pgcomponents from './App';
//import App from './App';
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

//function component

/*function Car() {
return <h2>Hi, I am a Car--Function Component!</h2>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);*/


//class component
/*class Car extends React.Component {
  render() {
  return <h2>Hi, I am a Car--Class Component!</h2>;
  }
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car />);*/
// function props
  /*function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford--Property of car" />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);

  */

  //Create an object named carInfo and send it to the Car component:
  function Car(props) {
    return <h2>I am a { props.brand.model && props.brand.mul }!</h2>
          
      ;
  }
  
  function Garage() {
    const carInfo = { name: "Ford", model: "Mustang", mul: "Multiple values being passed" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);
  
  
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals