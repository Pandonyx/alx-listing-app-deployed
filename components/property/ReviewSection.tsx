

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="pb-4 mb-4 border-b">
          <div className="flex items-center">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 mr-4 rounded-full" />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">{review.rating} stars</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;