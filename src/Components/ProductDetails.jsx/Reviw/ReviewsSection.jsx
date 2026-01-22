import { FaStar } from "react-icons/fa";
import { reviewsData } from "../../data/products";

const ReviewsSection = () => {
  const { summary, reviews } = reviewsData;

  return (
    <section className="bg-[#F6EED7] py-20 px-6 lg:px-32">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-sm tracking-widest text-[#6B0F0F] mb-3">
            REVIEWS
          </h3>

          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#6B0F0F]" />
            ))}
            <span className="text-sm text-[#6B0F0F]">
              {summary.rating} ({summary.totalReviews})
            </span>
          </div>

          <p className="text-sm text-[#6B0F0F]">
            {summary.recommendPercent}% of customers recommend this product
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="text-sm tracking-widest text-[#6B0F0F] mb-6">
            MOST RECENT REVIEWS
          </h3>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#6B0F0F] text-sm" />
                    ))}
                  </div>
                  <span className="text-xs text-[#6B0F0F]">{review.time}</span>
                </div>

                <p className="text-sm font-medium text-[#6B0F0F] leading-snug">
                  {review.title}
                </p>
                <p className="text-xs text-[#6B0F0F] mt-1">
                  {review.description}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-10 border border-[#6B0F0F] text-[#6B0F0F] px-8 py-3 text-sm hover:bg-[#6B0F0F] hover:text-white transition">
            View all Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
