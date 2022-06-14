import React from "react"
import ReviewsContainer from "../css/ReviewsStyles"
import reviews from "../data/reviews"

const Reviews = () => {
  return (
    <ReviewsContainer>
      <div className="reviews-heading">
        <h2>Why choose Carr Electrical Systems?</h2>
        <h4>
          See what several of our satisfied clients that had the same question
          have to say!
        </h4>
      </div>
      <ul>
        {reviews.map(review => {
          if (review.author.name) {
            return (
              <li key={review.message}>
                <p>"{review.message}"</p>
                <hr />
                <div>
                  <p style={{ fontSize: "16pt" }}>{review.author.name}</p>
                  <p>
                    <em>{review.author.authority}</em>
                  </p>
                </div>
              </li>
            )
          } else {
            return (
              <li key={review.message}>
                <p className="review-message">"{review.message}"</p>
                <hr />
                <p style={{ fontSize: "16pt" }}>{review.author}</p>
              </li>
            )
          }
        })}
      </ul>
    </ReviewsContainer>
  )
}

export default Reviews
