// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {buttonOn: false, buttonOff: false}

  firstButton = () => {
    const {buttonOn} = this.state

    if (buttonOn === false) {
      this.setState(prevState => ({buttonOn: !prevState.buttonOn}))
    } else {
      this.setState(prevState => ({buttonOn: !prevState.buttonOn}))
    }
  }

  lastButton = () => {
    const {buttonOff} = this.state

    if (buttonOff === false) {
      this.setState(prevState => ({buttonOff: !prevState.buttonOff}))
    } else {
      this.setState(prevState => ({buttonOff: !prevState.buttonOff}))
    }
  }

  render() {
    const {buttonOn, buttonOff} = this.state
    let borStyle1 = 'button-border-style1'
    let borStyle2 = 'button-border-style1'
    let firstContainer
    let lastContainer
    if (buttonOn === true) {
      borStyle1 = 'button-border-style2'
      firstContainer = (
        <div className="container-style">
          <p className="name-style">Joe</p>
        </div>
      )
    } else {
      firstContainer = ''
    }

    if (buttonOff === true) {
      borStyle2 = 'button-border-style2'
      lastContainer = (
        <div className="container-style">
          <p className="name-style">Jonas</p>
        </div>
      )
    } else {
      lastContainer = ''
    }

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading-style">Show/Hide</h1>
          <div className="button-container">
            <div className="button-container1">
              <button
                className={`button-style ${borStyle1}`}
                type="button"
                onClick={this.firstButton}
              >
                Show/Hide Firstname
              </button>
              {firstContainer}
            </div>
            <div className="button-container1">
              <button
                className={`button-style ${borStyle2}`}
                type="button"
                onClick={this.lastButton}
              >
                Show/Hide Lastname
              </button>
              {lastContainer}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
