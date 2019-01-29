import React, { Component } from "react";
import { hot } from "react-hot-loader";
import DaysFields from "./days-fields"

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
                        return <div className="inner-block col-md-4" key={key}>
                                    <div className="col-md-12">
                                        <div className="box-header">
                                            <span>{key}</span>
                                        </div>
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
