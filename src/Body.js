import React from "react";
import {Component} from "react";
import OpenFilebutton from "./component/openfile";
import UrlvalidComponent from "./component/url-validator";
import postData from "./component/btn-process";



class Bod extends Component {
 // state = {  } 


    clickHandler=()=>  <postData/>
    

    render() { 
        return (
          <form >
          <div className="content-b">

          <p className="upload">Upload your file:</p>
          <OpenFilebutton/>

          <p>JSON URL:</p>
          <UrlvalidComponent/>

          <p className="textarea-l">Paste your JSON object:</p>
          <textarea className="textarea" ></textarea>

          <button  type="onclick" className="butt" onClick={this.clickHandler}><b>Process</b></button>
          </div>
          </form>
    );
    
}
}
        
 
export default Bod;





        
         
       