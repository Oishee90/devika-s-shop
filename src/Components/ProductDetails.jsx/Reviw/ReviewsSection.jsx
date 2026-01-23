import { GoStarFill } from "react-icons/go";
import { reviewsData } from "../../data/products";

const ReviewsSection = () => {
  const { summary, reviews } = reviewsData;

  return (
    <section id="reviews" className="px-6 py-20 cream-bg lg:px-32">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <h3 className="mb-3 text-2xl font-semibold tracking-widest text-left lg:text-4xl red-color">
            REVIEWS
          </h3>

          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <GoStarFill key={i} className="red-color" />
            ))}
            <span className="text-base red-color inter">
              {summary.rating} ({summary.totalReviews})
            </span>
          </div>

          <p className="text-base red-color canela">
            {summary.recommendPercent}% of customers recommend this product
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="mb-6 text-lg font-semibold tracking-widest red-color lora ">
            MOST RECENT REVIEWS
          </h3>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <GoStarFill
                        key={i}
                        className="text-[#6B0F0F] text-base"
                      />
                    ))}
                  </div>
                  <span className="text-base text-[#6B0F0F]">
                    {review.time}
                  </span>
                </div>

                <p className="text-base  text-[#6B0F0F] leading-snug">
                  {review.title}
                </p>
                <p className="text-sm text-[#6B0F0F] mt-1">
                  {review.description}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-12 border border-[#5B0D0D] red-color px-8 py-3 text-base hover:bg-[#6B0F0F] hover:text-white transition w-full inter ">
            View all Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
