import React, { Component } from "react";
import { hot } from "react-hot-loader";


class InputFields extends React.Component {
    constructor(props) {
      super(props);
      }
        render() {
  
            return (
              <div className="main-block row">
              {
                this.props.cats.map((val, idx) => {
                  let key = `key-${idx}`, mId = `m-${idx}`, tId = `t-${idx}`, wId = `w-${idx}`, thId = `th-${idx}`, fId = `f-${idx}`
                  return <div className="inner-block col-md-4" key={key}>
                          <div className="col-md-12">
                            <div className="box-header">
                              <span>Week {idx + 1}</span>
                            </div>
                            <div className="input-control">
                            <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={mId}>Monday</label>
                            <input type="text" name={mId} data-id={idx} id={mId}
                            value={this.props.cats[idx].monday} 
                            className="text-field col-md-4 col-sm-4 col-xs-12" data-field="monday" />
                            <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={tId}>Tuesday</label>
                            <input type="text" name={tId} data-id={idx} id={tId} 
                            value={this.props.cats[idx].tuesday} 
                              className="text-field col-md-4 col-sm-4 col-xs-12" data-field="tuesday"/>
                            <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={wId}>Wednesday</label>
                            <input type="text" name={wId} data-id={idx} id={wId} 
                            value={this.props.cats[idx].wednesday} 
                              className="text-field col-md-4 col-sm-4 col-xs-12" data-field="wednesday"/>
                            <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={thId}>Thursday</label>
                            <input type="text" name={thId} data-id={idx} id={thId} 
                            value={this.props.cats[idx].thursday} 
                              className="text-field col-md-4 col-sm-4 col-xs-12" data-field="thursday"/> 
                            <label className="inline-block col-md-8 col-sm-8 col-xs-12" htmlFor={fId}>Friday</label>
                            <input type="text" name={fId} data-id={idx} id={fId} 
                            value={this.props.cats[idx].friday} 
                              className="text-field col-md-4 col-sm-4 col-xs-12" data-field="friday"/>
                            </div> 
                          </div> 
                  </div>
                })
              }
                
              </div>
            )
     }
  }

export default hot(module)(InputFields);
