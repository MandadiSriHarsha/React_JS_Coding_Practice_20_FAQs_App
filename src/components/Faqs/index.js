import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faqs-bg-container">
        <div className="faqs-card">
          <h1 className="faqs-card-heading">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachitem => (
              <FaqItem data={eachitem} key={eachitem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
