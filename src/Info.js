import React, { Component } from 'react';
import Gallery from './Gallery.js'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Info extends Component {
  render() {
    return (
      <div className="info">
        <Gallery />
        <div className="summary">
          <div className="config">
            <h6>iPhone X {this.props.selectedPhone.storage + ' - ' + this.props.selectedPhone.color}</h6>
            <h6 style={{color:'black'}}>$ {this.props.selectedPhone.price}</h6>
          </div>
          <div className="price">
            <h4>SUMMARY</h4>
            <div className="cost-device">
              <span className='title'>Cost of device {this.props.selectedPhone.payment !== 'upfront'? <span>over <br />{this.props.selectedPhone.payment}</span>:''}</span>
              <span className='cost'>$ {this.props.paymentValue}</span>
            </div>
            <div className="cost-plan">
              <span className='title'>Cost of plan</span>
              <span className='cost'>$ {this.props.selectedPhone.plan}/mth</span>
            </div>
          </div>
          <button id='summaryButton'>Continue <FontAwesomeIcon icon="angle-right" /> </button>
        </div>
      </div>
    );
  }
}

export default Info;
