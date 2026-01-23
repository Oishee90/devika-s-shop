import { FiX, FiClock } from "react-icons/fi";

const ComingSoonModal = ({ open, onClose,tittle }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm inter"
      onClick={onClose}
    >
      <div
        className="
          bg-[#F9EFD5]
          rounded-xl
          shadow-2xl
          max-w-md w-[90%]
          p-8
          text-center
          relative
          border border-[#5B0D0D]/30
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-[#5B0D0D] hover:text-black transition-colors"
        >
          <FiX />
        </button>

        {/* Icon + Content */}
        <div className="flex flex-col items-center justify-center">
          {/* Icon */}
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#5B0D0D]/10 text-[#5B0D0D]">
            <FiClock size={32} />
          </div>

          {/* Title */}
          <h2 className="mb-3 text-4xl font-semibold red-color inter">
            Coming Soon
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed red-color/80 inter">
            Our {tittle} feature is currently under development. We’re
            crafting a smarter, personalized styling experience for you.
          </p>

          {/* Badge */}
          <span className="mt-6 inline-block rounded-full bg-[#5B0D0D] px-6 py-2 text-sm text-white">
            Stay Tuned ✨
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
