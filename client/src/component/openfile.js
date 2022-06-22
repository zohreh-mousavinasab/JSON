import React,{Component} from "react";
import { FaFolderOpen } from "react-icons/fa";



class OpenFilebutton extends Component {
    
    onBtnClick = (evt) => {
      this.refs.fileDialog.click();
      evt.preventDefault();
    }
    handleChange = (event) => {this.refs.selectedFile.value =  this.refs.fileDialog.value};
    render() { 
        return (
          <div>
               <input type='file' style={{display: 'none'}} ref='fileDialog' onChange={this.handleChange} />
     
               <button onClick={this.onBtnClick} className="icon"><FaFolderOpen/></button>
               <input ref='selectedFile' className="browes"/>
          </div>

        );
    }
}
 
export default OpenFilebutton;



