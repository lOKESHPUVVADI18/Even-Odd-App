// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {countNumber: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  randomNumberGenerate = () => {
    const randomNum = this.randomNumber()
    this.setState(prevState => ({
      countNumber: prevState.countNumber + randomNum,
    }))
  }

  render() {
    const {countNumber} = this.state
    const evenOdd = countNumber % 2 === 0 ? 'Even' : 'Odd'
    console.log(countNumber)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {countNumber}</h1>
          <p className="count-para">Count is {evenOdd}</p>
          <button
            type="button"
            onClick={this.randomNumberGenerate}
            className="button"
          >
            Increment
          </button>
          <p className="hint-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
