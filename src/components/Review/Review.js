import { FetchReviews } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function  Review() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetch = async () => {
      const reviewsData = await FetchReviews(params.id);
      setReviews(reviewsData);
    };
    fetch();
  }, [params.id]);
  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author:{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no reviews yet</p>
      )}
    </>
  );
};
