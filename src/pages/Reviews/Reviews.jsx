import React, { useState } from 'react';
import './Reviews.css';

const reviews = [
  {
    id: 1,
    name: 'Irina P.',
    date: '2024-08-01',
    text: 'Excellent service! The food was hot and delicious, and delivery was fast. I am very satisfied with the Gusto restaurant!',
  },
  {
    id: 2,
    name: 'Alexey M.',
    date: '2024-07-28',
    text: 'Everything was great, though I appreciate that the packaging is eco-friendly. Other than that – no complaints.',
  },
  {
    id: 3,
    name: 'Marina S.',
    date: '2024-07-20',
    text: 'Very tasty dishes and quick delivery. I have ordered multiple times and always remain satisfied.',
  },
  {
    id: 4,
    name: 'Dmitry K.',
    date: '2024-07-15',
    text: 'I liked the speed of delivery and the quality of the food. The only thing to improve is the accuracy of the orders, sometimes there are mistakes.',
  },
  {
    id: 5,
    name: 'Elena V.',
    date: '2024-07-10',
    text: 'Gusto is my favorite restaurant! All dishes are always fresh and tasty. Highly recommended!',
  },
];

const ReviewCard = ({ name, date, text }) => (
  <div className="review-card">
    <h3 className="review-name">{name}</h3>
    <p className="review-date">{date}</p>
    <p className="review-text">{text}</p>
  </div>
);

const ReviewsPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: '',
    review: '',
    date: ''  
  });
  const [message, setMessage] = useState('');

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => {
    setIsModalVisible(false);
    setMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value
    });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault(); 
    try {
      // Send review data to server
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      });

      if (response.ok) {
        setMessage('Your review has been submitted successfully!');
        setReviewData({
          name: '',
          review: '',
          date: ''  
        });
        closeModal(); 
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="reviews-page">
      <h1>Customer Reviews for Gusto Restaurant Delivery</h1>
      <div className="add-review">
        <button className="btn leave-review-btn" onClick={openModal}>Leave a Review</button>
      </div>

      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.name}
          date={review.date}
          text={review.text}
        />
      ))}

      {isModalVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="review-form">
              <h2>Submit Your Review</h2>
              <form onSubmit={handleReviewSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={reviewData.name}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={reviewData.date}
                  onChange={handleInputChange}
                  required
                />

                <label htmlFor="review">Review:</label>
                <textarea
                  id="review"
                  name="review"
                  rows="4"
                  value={reviewData.review}
                  onChange={handleInputChange}
                  required
                ></textarea>

                <button className="btn submit-btn" type="submit">Submit Review</button>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
