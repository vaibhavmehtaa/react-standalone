import React, { Component } from "react";
import { hot } from "react-hot-loader";
import DaysBlock from "./days-block";

class WeekBlock extends React.Component {
    constructor(props) {
      super(props);
      }
        render() {
          
            return (
              <div className="main-block row">
              {
                this.props.fields.map((val, idx) => {
                  let key = `key-${idx}`;
                    return <div key={key} className="col-md-12">
                              <span className>Week {val.week}</span>
                              <DaysBlock weekIndex={idx} activeWeek={val.week} days={val} />
                            </div>
                            
                  })
              }
                
              </div>
            )
     }
  }

export default hot(module)(WeekBlock);
