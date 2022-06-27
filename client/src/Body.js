import React from "react";
import {Component} from "react";
import OpenFilebutton from "./component/openfile";
import UrlvalidComponent from "./component/url-validator";
import Client from './component/client';



class Bod extends Component {
  state = {
    jsonValue: '',
  };

  onJsonChange = (e) => {
    const value = e.target.value;

    this.setState({ 
      jsonValue: value
      
    }
      );
  }

  process = () =>  {
  let dataObj = {data:this.state.jsonValue};
  

  Client.processJson(dataObj,(res)=>{console.log(res.msg);});
}
    render() { 
        return (
           
          <div className="content-b">

          <p className="upload">Upload your file:</p>
          <OpenFilebutton/> 

          <p>JSON URL:</p>
          <UrlvalidComponent/> 

          <p className="textarea-l">Paste your JSON object:</p>
          <textarea className="textarea" 
           value={this.state.jsonValue}
           onChange={this.onJsonChange}>
            </textarea>
          <button  type="submit" className="butt" onClick={this.process}><b>Process</b></button>
          
          </div>
          
    );
    
}
}
        
 
export default Bod;





        
         
       