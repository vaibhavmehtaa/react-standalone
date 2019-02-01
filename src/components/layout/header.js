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
            </div>
        )
    }
}

export default hot(module)(Header);
