import React, { Component } from "react";
import { hot } from "react-hot-loader";
import DaysFields from "./days-fields"
import _ from "underscore"
class DaysBlock extends React.Component {
    constructor(props) {
      super(props);
      }
  render() {
        let days = this.props.days.days;
        let activeWeek = this.props.activeWeek;
        let weekIndex = this.props.weekIndex;
        if(days){
            return (
                <div className="row">
                  {
                    Object.keys(days).map(function(key) {
                        let inValid = _.where(days[key], {isValid: false});
                        let errors = [];
                          _.each(inValid, (err, idx) => {
                            let e = `e-${idx}`;
                            errors.push(<li key={e} className="list-group-item list-group-item-info"> {err.error_msg} </li>)
                          })
                        return <div className={`inner-block col-md-4 ${(inValid.length) ? 'error':''}`} key={key}>
                                  <div className="col-md-12">
                                    <div className="box-header">
                                      <span>{key}</span>
                                    </div>
                                    <ul className="list-group">
                                      {errors}
                                    </ul>
                                    <DaysFields weekIndex={weekIndex} activeWeek={activeWeek} activeDay={key} days={days[key]} />
                                  </div> 
                                </div>;
                    })
                  }
                  </div>
                )
        }else{
            return "";
        }
        
 }

}

export default hot(module)(DaysBlock);
