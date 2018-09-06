import React, { Component } from 'react';
import Info from './Info.js';
import Choice from './Choice.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,  faAngleLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight, faAngleLeft)

const phonePrice = {
  'iphoneX':{
    '64GB':{
      'Space Grey':1799,
      'Silver': 1799
    }
  }
}

const paymentOption = {
  'upfront': 1799,
  '12 months': 149.92,
  '24 months' : 66.58
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        color:'Space Grey',
        storage:'64GB',
        existingCustomer:'',
        plan:'59.99',
        payment:'upfront',
        price: 1799
    }
  
  this.handleUpdate=this.handleUpdate.bind(this);
  }

  handleUpdate(option){
    let optionName = option.name;
    let optionValue = option.value;
    this.setState ({
      [optionName]: optionValue
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <Info selectedPhone={this.state} paymentValue={paymentOption[this.state.payment]}/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <h3>iPhoneX</h3>
              <Choice update={this.handleUpdate}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
