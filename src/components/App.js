import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Reservation from './reservation-form/form'
import "../css/global.css";
import Header from "./layout/header";
import Footer from "./layout/footer"
import ReactObserver from 'react-event-observer';

class App extends Component {
  constructor(props){
    super(props);
    this.observer = ReactObserver();
  }

  render() {
    return (
      <section>
        <Header observer={this.observer} />
        <div className="clearfix"></div>
        <div className="container body-container">
            <div className="row">
              <div className="col-md-12">
                <div id="root">
                    <Reservation observer={this.observer} />
                </div>
                </div>
            </div>
        </div>
        <Footer observer={this.observer}/>
      </section>
    );
  }
}

export default hot(module)(App);
