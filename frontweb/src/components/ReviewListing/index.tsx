import { Review } from "types/review";
import { ReactComponent as StarImage } from 'assets/images/star.svg';

import './styles.css';


type ListingReviews = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: ListingReviews) => {
  return (
    <div className="base-card reviews-container">
      {reviews?.map((review) => (
        <div className="content-reviews" key={review.id}>
          <div className="listing-review">
            <div className="starImage">
            <StarImage />
            </div>
            <h6>{review.user.name}</h6>
          </div>
          <div className="review">
            <p>{review.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewListing;