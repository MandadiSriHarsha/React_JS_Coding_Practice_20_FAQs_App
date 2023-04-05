import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isButtonClicked: false}

  changeState = () => {
    const {isButtonClicked} = this.state
    this.setState({isButtonClicked: !isButtonClicked})
  }

  render() {
    const {isButtonClicked} = this.state
    const altText = isButtonClicked ? 'minus' : 'plus'
    const {data} = this.props
    const answerComponent = (
      <div className="faq-answer-card">
        <hr />
        <p className="faq-item-answer">{data.answerText}</p>
      </div>
    )
    return (
      <li className="faq-item">
        <div className="faq-question-card">
          <h1 className="faq-item-heading">{data.questionText}</h1>
          <button type="button" onClick={this.changeState}>
            <img
              src={
                isButtonClicked
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={altText}
            />
          </button>
        </div>
        {isButtonClicked && answerComponent}
      </li>
    )
  }
}

export default FaqItem
