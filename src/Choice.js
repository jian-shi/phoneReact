import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Choice extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleUpdate(e){
    let option = {
      name: e.target.name,
      value: e.target.value
    }
    this.props.update(option)
  }
  render() {
    return (
      <div className="choice">
        <ul>
          <li>
            <h4>1. Choose a colour</h4>
            <div className='option'>
              <label className="option-container">Silver
                <input type="radio" id="color-1" name="color" value='Silver' onChange={this.handleUpdate}/>
                <span className="checkmark"></span>
              </label>
              <label className="option-container">Space Grey
                <input type="radio" id="color-2" name="color" value='Space Grey' onChange={this.handleUpdate}/>
                <span className="checkmark"></span>
              </label>
            </div>
          </li>

          <li>
            <h4>2. Choose storage</h4>
            <div className='option'>
            <label className="option-container">64GB
              <input type="radio" id="storage-64" name="storage" value='64GB' onChange={this.handleUpdate}/>
              <span className="checkmark"></span>
            </label>
            </div>
          </li>

          <li>
            <h4>3. Are you an existing customer?</h4>
            <div className='option'>
            <label className="option-container">Yes
              <input type="radio" id="existing-yes" name="existingCustomer" value='existing' onChange={this.handleUpdate}/>
              <span className="checkmark"></span>
            </label>
            <label className="option-container">No
              <input type="radio" id="existing-no" name="existingCustomer" value='not-existing'onChange={this.handleUpdate}/>
              <span className="checkmark"></span>
            </label>
            </div>
          </li>

          <li>
            <h4>4. Choose a plan</h4>
            <div className='option'>
            <label className="option-container">$39.99
              <input type="radio" id="plan-1" name="plan" value='39.99' onChange={this.handleUpdate}/>
              <span className="checkmark"></span>
            </label>
            <label className="option-container">$59.99
              <input type="radio" id="plan2" name="plan" value='59.99' onChange={this.handleUpdate}/>
              <span className="checkmark"></span>
            </label>
            </div>
          </li>

          <li>
            <h4>5. Choose a device payment option</h4>
            <div className='option'>
            <label className="option-container">Pay upfront
              <input type="radio" id="payment-1" name="payment" value='upfront' onChange={this.handleUpdate}/>
              <span className="checkmark"></span>
            </label>

            <label className="option-container">Pay over 12 months intrest free
              <input type="radio" id="payment-2" name="payment" value='12 months' onChange={this.handleUpdate}/>
              <span className="checkmark"></span>
            </label>

            <label className="option-container">Pay over 24 months intrest free
              <input type="radio" id="payment-3" name="payment" value='24 months' onChange={this.handleUpdate}/>
              <span className="checkmark"></span>
            </label>
            </div>
          </li>
          <button>Continue <FontAwesomeIcon icon="angle-right" /></button>
        </ul>
        
      </div>
    );
  }
}

export default Choice;
