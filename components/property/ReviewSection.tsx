type Review = { id?: string | number; comment?: string };

export default function ReviewSection({ reviews = [] as Review[] }) {
  if (!reviews.length) return <p className="text-sm text-gray-500">No reviews yet.</p>;
  return (
    <div className="space-y-3">
      {reviews.map((review, idx) => (
        <div key={review.id ?? idx} className="p-3 bg-gray-50 rounded-xl">
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
