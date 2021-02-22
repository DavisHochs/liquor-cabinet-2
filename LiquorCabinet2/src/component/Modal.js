import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import axios from 'axios';

class Modal extends Component {
  
    constructor(props) {
        super(props);
      
        this.state = {
            ingredients: []
        }

        
      }
  
    componentDidMount() {
        
    

    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div style={{position: 'fixed', top: 0, left:0, zIndex:100}}>
        <a className="waves-effect waves-light btn modal-trigger" data-target="modal1">Project Details</a>

        <div ref={Modal => { this.Modal = Modal;}} id="modal1" className="modal">
          <div className="modal-content">
            <h4>Program Explanation</h4>
            <p>This program was made by Davis Hochstatter. It is a recreation of an earlier project made by a group from the UT Coding Bootcamp class of 2019-2020 which you <a href="https://github.com/tpvinyard/TheLiquorCabinet">can find here.</a></p>
            <p>This project was originally made using JS and HTML/CSS. This recreation is exclusively made in React. The API utilized is <a href="https://www.thecocktaildb.com/api">The Cocktail DB.</a> The motivation for this project was to attempt to make an earlier project in a more accesible framework, in this case, being React.</p>
            <p>The technologies used include: React, Axios, and Materialize for some minor styling.</p>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">Close</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
