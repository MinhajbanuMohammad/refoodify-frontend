import React from "react";
import "./Review.css";

const reviews = [
  {
    name: "Alice Johnson",
    text: "Absolutely amazing experience! The food was delicious and service top-notch.",
    rating: 5,
    
  },
  {
    name: "Michael Lee",
    text: "Great quality, fast delivery, and friendly staff. Will order again!",
    rating: 4,
   
  },
  {
    name: "Sara Khan",
    text: "Good overall, but delivery took longer than expected.",
    rating: 3,
    
  },
];

const Review = () => {
  return (
    <div className="review-section">
      <h2 className="review-title">What Our Customers Say</h2>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
           
            <h3 className="review-text">"{review.name}"</h3>
            <p className="review-text">"{review.text}"</p>
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < review.rating ? "filled" : ""}>
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
