import React, { Component } from "react";
import { hot } from "react-hot-loader";
import InputFields from './input-fields'

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         cats: [{
           monday: 1,
           tuesday: 2,
           wednesday: 3,
           thursday: 4,
           friday: 5
           },{
             monday: 20,
             tuesday: 12,
             wednesday: 23,
             thursday: 54,
             friday: 25
        }],
        summary: ""
       };
       this.handleSubmit = this.handleSubmit.bind(this);
    }
 
 
     handleSubmit(event) {
       alert('A name was submitted: ' + JSON.stringify(this.state));
       event.preventDefault();
     }
 
     handleChange(e) {
       if ((e.target.className).includes('text-field') ) {
            let cats = [...this.state.cats]
            cats[e.target.dataset.id][e.target.dataset.field] = e.target.value
            this.setState({ cats }, () => console.log(this.state.cats))
       } else {
         this.setState({ [e.target.name]: e.target.value })
       }
     }
 
     addCat(e) {
       this.setState((prevState) => ({
         cats: [...prevState.cats, {
           monday: "",
           tuesday: "",
           wednesday: "",
           thursday: 4,
           friday: 5
           }],
       }));
     }
  
    render() {
     let {cats} = this.state
      return (
       <div>
         <div className="text-right">
           <button onClick={this.addCat.bind(this)} type="button" className="btn btn-primary">Add new wizard</button>
         </div>
         <div className="form-container">
           <form onSubmit={this.handleSubmit} onChange={this.handleChange.bind(this)}>
             <InputFields cats={cats}/>
             <div className="col-md-12 pad-0 summary-block">
               <div className="label">
                 <label>Comment:</label>
               </div>
               <textarea name="summary" value={this.state.summary} />
             </div>
             <input type="submit" className="btn btn-success" value="Submit Changes" />
           </form>
         </div>
       </div>
      );
    }
  }

  export default hot(module)(Reservation);
