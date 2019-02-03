import React, { Component } from "react";
import { hot } from "react-hot-loader";

class Header extends React.Component {
    constructor(props) {
      super(props)
      this.observer = props.observer;
      this.state = {
        user: {
            userName: '',
            phone: '',
            emails: '' 
          }
      }
      
    }

    componentDidMount(){
        this.observer.subscribe("user-data",(data)=>{
            this.user = data;
            this.setState({
                user: data
            })
        });
    }

    render(){
        let {userName, phone, emails} = this.state.user;
        return(
            <div className="container-fluid shadow-sm">
                <div className="container verticle-shadow">
                    <div className="row">
                        <div className="col-md-4">
                            <a className="navbar-brand" href="#"><span>Module</span> Name </a>
                        </div>
                        <div className="col-md-8 text-right">
                            <div className="header-info-cart">
                                <p><small className="font-weight-bold">{userName}</small></p>
                                <p><small className="font-weight-normal">{emails}</small></p>
                                <p><small className="font-weight-normal">{phone}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action-icon">
                <img width="30px" src="data:image/png;base64,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"></img>
                </div>
            </div>
        )
    }
}

export default hot(module)(Header);
