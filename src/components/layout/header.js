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
        this.observer.subscribe("hello",(data)=>{
            console.log(data);
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
                <div class="container verticle-shadow">
                    <div className="row">
                        <div className="col-md-4">
                            <a class="navbar-brand" href="#"><span>Module</span> Name </a>
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
