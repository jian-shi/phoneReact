import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const img_url = {
  img1:"iphone10_svr_180x350_01.png",
  img2:"iphone10_svr_180x350_02.png",
  img3:"iphone10_svr_180x350_03.png"
}

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgCurrent: 1
    }
    this.handleClickPre=this.handleClickPre.bind(this);
    this.handleClickNext=this.handleClickNext.bind(this);
  }
  handleClickPre(){
    this.setState(preState=>{
      return preState.imgCurrent === 1?preState.imgCurrent:--preState.imgCurrent;
    })
  }

  handleClickNext(){
    let lastIndex = Object.keys(img_url).length;
    this.setState(preState=>{
      return preState.imgCurrent === lastIndex? lastIndex:++preState.imgCurrent;
    })
  }

  render() {
    return (
      <div className="gallery">
        <button className={this.state.imgCurrent === 1?'pre inactive':'pre'} id='button-pre' onClick={this.handleClickPre}><FontAwesomeIcon icon="angle-left" /></button>
        <div className="device-img">
          <img src={require ('./img/'+ img_url['img'+this.state.imgCurrent])} alt=""/>
        </div>
        <button className={this.state.imgCurrent === Object.keys(img_url).length?'next inactive':'next'} id='button-next' onClick= {this.handleClickNext}><FontAwesomeIcon icon="angle-right" /></button>
      </div>
    );
  }
}

export default Gallery;
