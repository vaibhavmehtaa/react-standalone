import React, { Component } from "react";
import { hot } from "react-hot-loader";
import WeekBlock from './week-block'
import _ from "underscore";
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
        formData: undefined,
        summary: "",
       };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.observer = props.observer;

    }

    componentDidMount() {
      let dataSource =  {
          "user" : {
            "userId": 5445,
            "userName": "John Doe",
            "emails": "john.doe@domain.com; johndoe@domain2.org",
            "phone": "765-9736, 26888-99872"
        },
        "reservations": [
          {
            "week": 5,
              "days":{
                "2019-01-29": [
                  {
                    "itemId": 3,
                    "itemName": "Times Of India",
                    "value": 5,
                    "validRange": {
                      "from": 3,
                      "to": 7
                      }
                  },
                  {
                    "itemId": 4,
                    "itemName": "Times Of India 4",
                    "value": 3,
                    "validRange": {
                      "from": 2,
                      "to": 5
                      }
                  }
                ],
                "2019-01-30": [
                  {
                    "itemId": 3,
                    "itemName": "Times Of India",
                    "value": 5,
                    "validRange": {
                      "from": 3,
                      "to": 7
                      }
                  },
                  {
                    "itemId": 4,
                    "itemName": "Times Of India 4",
                    "value": 3,
                    "validRange": {
                      "from": 2,
                      "to": 5
                      }
                  }
                ]
              }
          },
          {
            "week": 6,
              "days":{
                "2019-02-05": [
                  {
                    "itemId": 3,
                    "itemName": "Times Of India",
                    "value": 5,
                    "validRange": {
                      "from": 3,
                      "to": 7
                      }
                  },
                  {
                    "itemId": 4,
                    "itemName": "Times Of India 4",
                    "value": 3,
                    "validRange": {
                      "from": 2,
                      "to": 5
                      }
                  }
                ],
                "2019-02-06": [
                  {
                    "itemId": 3,
                    "itemName": "Times Of India",
                    "value": 5,
                    "validRange": {
                      "from": 3,
                      "to": 7
                      }
                  },
                  {
                    "itemId": 4,
                    "itemName": "Times Of India 4",
                    "value": 3,
                    "validRange": {
                      "from": 2,
                      "to": 5
                      }
                  }
                ]
              }
          }
        ]
      };
      _.each(dataSource.reservations, (w) => {
        _.each(w.days, (v) => {
          _.each(v, (item) => {
            item['isValid'] = true;
            item['error_msg'] = "";
          })
        })
        
      })
      this.setState({
              formData: dataSource
      });
      this.observer.publish("hello", dataSource.user);
    }
 
 
     handleSubmit(event) {
       alert('A name was submitted: ' + JSON.stringify(this.state.formData));
       event.preventDefault();
     }
 
     handleChange(e) {
       if ((e.target.className).includes('text-field') ) {
            let formData = this.state.formData
            let {week, day, item, weekIndex, dayIndex} = e.target.dataset;
            let {min, max} = e.target;
            let value = e.target.value;
            let currentInput = formData.reservations[weekIndex]['days'][day][dayIndex];
            currentInput['isValid'] = (parseInt(value) >= parseInt(min) && parseInt(max) >= parseInt(value));
            currentInput['error_msg'] = (parseInt(value) >= parseInt(min) && parseInt(max) >= parseInt(value)) ? '': `Number in between ${min} and ${max}.`;
            currentInput['value'] = value;
            this.setState({ formData }, () => this.state.formData)
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
     let {cats, formData} = this.state;
     if(formData){
      return (
        <div>
          <div className="form-container">
            <form onSubmit={this.handleSubmit} onChange={this.handleChange.bind(this)}>
              <WeekBlock fields={formData.reservations}/>
              <div className="col-md-12 pad-0 summary-block">
                <div className="label">
                  <label>Comment:</label>
                </div>
                <textarea name="summary" value={this.state.summary} onChange={()=>{}}/>
              </div>
              <input type="submit" className="btn btn-success" value="Submit Changes" />
            </form>
          </div>
        </div>
       );
     }else{
       return (
        <div className="container fill-height">
          <div className="screen-center">
            No data found :(
          </div>
        </div>
       );
     }
      
    }
  }

  export default hot(module)(Reservation);
