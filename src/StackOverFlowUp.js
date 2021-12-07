
import { ContentPage } from "./ContentPage";
import { Button } from 'react-bootstrap';

export function StackOverFlowUp() {
  return (
      <div className="landingpage-container">
         <div className="sheading">
          <img className="logo-img" src="./logo.png" alt="stack overflow">
          </img>
          <h1>Stack OverFlow Up</h1>
         
          <Button className="push-button" >About</Button>
          <Button className="push-button">Products</Button>
          <Button className="push-button">For Teams</Button>
          <button onClick= {ContentPage} className="push-button">Login </button>
          <Button className="push-button">Signup </Button>
                  </div>
          <hr />
          <div className="stack-header">
          <h2>Drive to Develope</h2>
        
          <h4>Every</h4>
          <h3>data scientist / developer / mobile developer / game developer / system admin </h3>
          <h4>has a tab open to Stack Overflow </h4>
       
      </div>
      </div>
  );
}

