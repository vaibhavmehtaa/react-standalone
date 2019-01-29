import React, { Component } from "react";
import { hot } from "react-hot-loader";


class DaysFields extends React.Component {
    constructor(props) {
      super(props);
      }
      render(){
        let days = this.props.days;
        let activeDay = this.props.activeDay;
        let activeWeek = this.props.activeWeek;
        let weekIndex = this.props.weekIndex;
        return (
            <div className="input-control">
            {
              days.map((val, idx) => {
                let key = `key-${idx}`, mId = `m-${activeDay + idx }`;
                  return <div key={key}>
                      <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={mId}>{val.itemName}</label>
                         <input type="number" 
                                min={val.validRange.from} 
                                max={val.validRange.to} 
                                name={mId} 
                                data-item={val.itemId} 
                                data-day={activeDay}
                                data-week={activeWeek}
                                data-weekindex={weekIndex}
                                data-dayindex={idx}
                                value={val.value} 
                                className="text-field col-md-4 col-sm-4 col-xs-12" 
                         />

                  </div>
                          
                })
            }
              
            </div>
          )
      }

}

export default hot(module)(DaysFields);
