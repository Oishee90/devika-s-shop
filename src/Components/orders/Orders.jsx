import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import OrderModal from "../ShortCutModal/Sijan/SijanModal";
import { FiUpload, FiX } from "react-icons/fi";
import Swal from "sweetalert2";


/* ---------------- Status Badge ---------------- */
const TrackOrderContent = ({handleSaveSuccess}) => {
  const steps = [
    { title: "Order Placed", status: "completed" },
    { title: "Order Processed", status: "completed" },
    { title: "Order Dispatched", status: "completed" },
    { title: "Delivered", status: "current" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="border-b pb-6">
        <h2 className="text-[21px] canela font-semibold">Track Order</h2>
        <p className="text-[14px] inter pt-2 text-[#4A5565]">ORD-2025-001234</p>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 bg-gray-50 p-4 rounded-lg text-sm">
        <div>
          <p className="text-gray-500">Order Date</p>
          <p className="font-medium inter">January 8, 2026</p>
        </div>
        <div>
          <p className="text-gray-500">Delivery Date</p>
          <p className="font-medium inter">January 11, 2026</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const isCompleted = step.status === "completed";

          return (
            <div key={index} className="flex gap-4 relative mb-2 last:mb-0">
              {/* Left (Dot + Line) */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    h-8 w-8 rounded-full flex items-center justify-center z-10
                    ${
                      isCompleted
                        ? "bg-[#6E0B0B] text-white"
                        : "border-2 border-[#6E0B0B] text-[#6E0B0B]"
                    }
                  `}
                >
                  ✓
                </div>

                {!isLast && (
                  <div className="w-[2px] h-10 bg-[#6E0B0B] mt-1" />
                )}
              </div>

              {/* Right (Content) */}
              <div className="pt-1">
                <p className="font-bold inter text-gray-900">
                  {step.title}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    isCompleted
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {isCompleted ? "Completed" : "Current Status"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};






const AddReviewContent = ({handleSaveSuccess}) => (
  <div className="p-6 space-y-6">
    <h2 className="text-[21px] canela font-bold">Add Review</h2>

<div>
  <p className="inter pb-2">Order items</p>
    <div className="flex gap-4 items-center">
      <img
        src="https://images.unsplash.com/photo-1534217466718-ef4950786e24"
        className="w-16 h-20 object-cover"
        alt=""
      />
      <div>
        <p className="font-medium inter text-[16px]">Shewnanies</p>
        <p className="text-sm text-gray-500 inter text-[14px]">Quantity: 1</p>
      </div>
    </div>
</div>

    <div>
      <p className="text-sm inter text-[16px] mb-2">Rate your experience</p>
      <div className="flex gap-2 text-gray-300 text-4xl">★★★★★</div>
    </div>

    <textarea
      className="w-full border rounded-lg p-3 text-sm"
      rows={4}
      placeholder="Tell us about your experience..."
    />

    <div className="flex justify-between  w-full gap-3">
      <button className="border px-4 w-full py-3 rounded">Cancel</button>
      <button onClick={()=>handleSaveSuccess()} className="bg-[#6E0B0B] w-full text-white px-4 py-3 rounded">
        Submit Review
      </button>
    </div>
  </div>
);




const RefundContent = ({handleSaveSuccess}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) // Convert to MB
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    URL.revokeObjectURL(uploadedFiles[index].preview);
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileUpload({ target: { files: e.dataTransfer.files } });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-[80vh] overflow-y-auto p-6 space-y-6">
      {/* Header */}
      <div className="border-b pb-6">
        <h2 className="text-[21px] canela font-bold text-gray-900">
          Apply for Refund
        </h2>
        <p className="text-sm mt-2 inter text-gray-500">
          ORD-2025-001234
        </p>
      </div>

      {/* Select item */}
      <div className="space-y-3">
        <p className="text-[16px] font-medium lora text-gray-900">
          Select items to refund
        </p>

        <div className="flex justify-between items-center border rounded-lg p-4">
          <div className="flex gap-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1534217466718-ef4950786e24"
              alt=""
              className="w-14 h-18 object-cover rounded"
            />
            <div>
              <p className="font-medium lora text-[16px] text-gray-900">
                Shewnanies
              </p>
              <p className="text-sm lora text-gray-500">
                Quantity: 1
              </p>
            </div>
          </div>

          <p className="lora text-[16px] font-bold text-gray-900">
            $129.99
          </p>
        </div>
      </div>

      {/* Reason */}
      <div className="space-y-2">
        <p className="text-[16px] font-medium lora text-gray-900">
          Reason for refund
        </p>

        <textarea
          rows={4}
          className="
            w-full border rounded-lg p-3 text-sm
            focus:outline-none focus:ring-1 focus:ring-gray-300
          "
          placeholder="Please describe the reason for your refund request..."
        />
      </div>

      {/* Attach proof */}
      <div className="space-y-2">
        <p className="text-[16px] font-medium lora text-gray-900">
          Attach proof
        </p>

        {/* Upload Area */}
        <label
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="
            border-2 border-dashed border-gray-300 rounded-lg p-8
            flex flex-col items-center justify-center
            text-sm text-gray-500
            cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition
          "
        >
          <input
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <FiUpload className="mb-3 text-2xl" />
          <span className="font-medium mb-1">Upload Document</span>
          <span className="text-xs">or drag and drop files here</span>
          <span className="text-xs mt-1">JPG, PNG, PDF, DOC up to 5MB each</span>
        </label>

        {/* Preview Section */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-700">
              Uploaded files ({uploadedFiles.length})
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="relative border rounded-lg overflow-hidden group"
                >
                  {/* Image Preview */}
                  {file.file.type.startsWith('image/') ? (
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-lg font-bold text-gray-600 mb-1">
                          {file.file.name.split('.').pop().toUpperCase()}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {file.name}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="
                      absolute top-2 right-2
                      bg-red-500 text-white rounded-full p-1
                      opacity-0 group-hover:opacity-100 transition-opacity
                      hover:bg-red-600
                    "
                  >
                    <FiX size={16} />
                  </button>

                  {/* File Info */}
                  <div className="p-2 bg-white">
                    <p className="text-xs font-medium truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {file.size} MB
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}


      </div>

      {/* Actions */}
      <div className="flex lora gap-3 pt-2">
        <button
        onClick={()=> handleSaveSuccess()}
          disabled={uploadedFiles.length === 0}
          className={`
            flex-1 py-3 rounded-lg text-sm transition
            ${uploadedFiles.length > 0
              ? 'bg-[#6E0B0B] text-white hover:bg-[#5A0909] cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          Submit Refund Request
        </button>

        <button
          onClick={() => setUploadedFiles([])}
          className="
            flex-1 border border-gray-300
            py-3 rounded-lg text-sm
            hover:bg-gray-50
          "
        >
          Cancel
        </button>
      </div>

      {/* Footer note */}
      <p className="text-xs lora text-gray-500 text-center">
        We're reviewing your refund request and will email you as soon as it's
        processed. The email will include everything you need to know about the
        next steps.
      </p>
    </div>
  );
};




const StatusBadge = ({ type }) => {
  const map = {
    delivered: "bg-[#6E0B0B] text-white",
    progressBlue: "bg-blue-100 text-blue-700",
    progressYellow: "bg-yellow-100 text-yellow-700",
  };

  const label = {
    delivered: "Order Delivered on January 11, 2025",
    progressBlue: "Order in progress",
    progressYellow: "Order in progress",
  };

  return (
    <span className={`text-sm inter px-4 py-3 rounded-full ${map[type]}`}>
      {label[type]}
    </span>
  );
};

/* ---------------- Product Item ---------------- */

const ProductItem = ({ product }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b last:border-b-0">
      <div className="flex gap-4 items-center">
        <img
          src={product.image}
          alt="product"
          className="w-16 h-20 object-cover"
        />
        <div>
          <p className="text-[16px] inter font-medium text-[#3A3A3A]">
            {product.name}
          </p>
          <p className="text-xs inter text-gray-500">
            Quantity: {product.quantity}
          </p>
        </div>
      </div>

      <p className="text-[16px] inter font-bold text-[#101828]">
        ${product.price}
      </p>
    </div>
  );
};

/* ---------------- Order Card ---------------- */

const OrderCard = ({ order,setIsOpen,setModalType }) => {
  // Calculate total of all products
  const calculateOrderTotal = () => {
    return order.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0).toFixed(2);
  };

  return (
    <div
      className={`border rounded-md overflow-hidden ${
        order.status === 'delivered' ? "bg-[#F9EFD5]" : "bg-white"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center bg-[#F9EFD5] px-6 py-5 border-b">
        <div className="flex gap-12 text-sm inter text-[#6B6B6B]">
          <div>
            <p className="font-medium text-sm text-[#5B0D0D]">Order Number</p>
            <p className="font-bold text-[#101828] mt-1">{order.number}</p>
          </div>
          <div>
            <p className="font-medium text-[#5B0D0D]">Order Date</p>
            <p className="font-bold text-[#101828] mt-1">{order.date}</p>
          </div>
          <div>
            <p className="font-medium text-[#5B0D0D]">Total</p>
            <p className="font-bold text-[#101828] mt-1">${calculateOrderTotal()}</p>
          </div>
        </div>

        <StatusBadge type={order.status} />
      </div>

      {/* Products List */}
      <div className="divide-y">
        {order.products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 inter font-medium px-6 pb-4 pt-4">
        <button onClick={()=> {
            setIsOpen(true),
            setModalType('track')
        }} className="bg-[#6E0B0B] border-2 flex items-center gap-2 text-white text-sm px-4 py-3 rounded">
          Track Order <FaChevronRight size={12} />
        </button>

        <button
        onClick={()=> {
            setIsOpen(true),
            setModalType('review')
        }}
          className={`text-sm px-4 py-3 rounded border-2 ${
            order.canReview
              ? "border-[#6E0B0B] text-[#6E0B0B]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!order.canReview}
        >
          Add Review
        </button>

        <button
        onClick={()=> {
            setIsOpen(true),
            setModalType('refund')
        }}
          className={`text-sm px-4 py-3 rounded border-2 ${
            order.canRefund
              ? "border-red-500 text-red-500"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!order.canRefund}
        >
          Apply for Refund
        </button>
      </div>
    </div>
  );
};

/* ---------------- Main Page ---------------- */

const Orders = () => {
    const [isOpen,setIsOpen] = useState(false) 
    const [modalType, setModalType] = useState(null);

  const orders = [
    {
      number: "ORD-2025-00234",
      date: "January 8, 2025",
      status: "delivered",
      highlight: true,
      canReview: true,
      canRefund: true,
      products: [
        {
          name: "Shewnanies",
          price: 129.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1534217466718-ef4950786e24?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Leather Handbag",
          price: 89.99,
          quantity: 2,
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      number: "ORD-2025-00235",
      date: "January 10, 2025",
      status: "progressBlue",
      canReview: false,
      canRefund: false,
      products: [
        {
          name: "Winter Jacket",
          price: 299.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1729347917808-e3e35a462fec?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Wool Sweater",
          price: 79.99,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Casual T-Shirt",
          price: 29.99,
          quantity: 3,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      number: "ORD-2025-00236",
      date: "January 12, 2025",
      status: "progressYellow",
      highlight: true,
      canReview: false,
      canRefund: false,
      products: [
        {
          name: "Running Shoes",
          price: 49.99,
          quantity: 1,
          image: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  ];


  const handleSaveSuccess = () => {
  Swal.fire({
    title: "Submitted Successfully!",
    text: "Your changes have been saved successfully.",
    icon: "success",
    confirmButtonColor: "#5B0D0D",
    confirmButtonText: "OK",
    background: "#f7eed8",
    color: "#5B0D0D",
  });
  setIsOpen(false)
};




  return (
    <div className="min-h-screen bg-[#6E0B0B] pt-32 py-10">
      <div className="max-w-8xl md:px-32 ">

        {/* Page Title */}
        <h1 className="text-[#F9EFD5]  text-3xl canela f mb-1">
          My Account
        </h1>
        <p className="text-[#F9EFD5] text-[24px] inter my-6 mb-9">My Orders</p>

        {/* Orders */}
        <div className="space-y-6">
          {orders.map((order, idx) => (
            <OrderCard setIsOpen={setIsOpen} key={idx} order={order} setModalType={setModalType}/>
          ))}
        </div>
      </div>
      <OrderModal setModalType={setModalType} onClose={()=> setIsOpen(false)} isOpen={isOpen}>
        
  {modalType === "track" && <TrackOrderContent handleSaveSuccess={handleSaveSuccess} />}
  {modalType === "review" && <AddReviewContent handleSaveSuccess={handleSaveSuccess} />}
  {modalType === "refund" && <RefundContent handleSaveSuccess={handleSaveSuccess} />}
      </OrderModal>
    </div>
  );
};

export default Orders;