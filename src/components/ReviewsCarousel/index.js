// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickRight = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  onClickLeft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  renderReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img className="profile-img" src={imgUrl} alt={username} />
        <p className="profile-heading">{username}</p>
        <p className="para">{companyName}</p>
        <p className="para">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const currentReview = reviewsList[index]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="arrow-container">
          <button
            type="button"
            className="btn"
            onClick={this.onClickLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderReview(currentReview)}
          <button
            type="button"
            className="btn"
            onClick={this.onClickRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
