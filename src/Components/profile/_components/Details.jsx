import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// Reusable Input Component
const Input = ({
  label,
  type = "text",
  name,
  register,
  placeholder,
  containerClass = "",
  inputClass = "",
  labelClass = "",
  ...props
}) => {
  return (
    <div className={`space-y-2 ${containerClass}`}>
      {label && (
        <label className={`text-[16px] text-[#6b0f12] ${labelClass}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full bg-[#6b0f12] text-white placeholder:text-[#F9EFD5] px-4 py-3 text-sm outline-none ${inputClass}`}
        {...props}
      />
    </div>
  );
};

// Reusable Button Component
const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses = "w-full inter text-[16px] py-3 text-sm transition";
  const variants = {
    primary: "border border-[#6b0f12] text-[#6b0f12] hover:bg-[#6b0f12] hover:text-white",
    filled: "bg-[#6b0f12] text-white hover:bg-[#5a0d10]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Main Component
const Details = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleSaveSuccess = () => {
  Swal.fire({
    title: "Saved Successfully!",
    text: "Your changes have been saved successfully.",
    icon: "success",
    confirmButtonColor: "#5B0D0D",
    confirmButtonText: "OK",
    background: "#f7eed8",
    color: "#5B0D0D",
  });
};


  const onSubmit = (data) => {
    console.log("User details:", data);
    // Handle save logic here
    handleSaveSuccess()
  };

  const handleCancel = () => {
    reset();
  };

  // Define form fields configuration
  const formFields = [
    // First row - Grid layout
    [
      {
        id: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "First Name",
        gridClass: "md:col-span-1",
      },
      {
        id: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Last Name",
        gridClass: "md:col-span-1",
      },
    ],
    // Second row - Single field
    [
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Phone number",
        gridClass: "md:col-span-2",
      },
    ],
    // Third row - Single field
    [
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Email",
        gridClass: "md:col-span-2",
      },
    ],
  ];

  return (
    <div className="w-full h-full bg-[#f7eed8] p-4 sm:p-8 md:p-12">
      <div className="w-full  mx-auto">
        <h2 className="text-3xl canela md:text-3xl canela font-serif text-[#6b0f12] mb-6 md:mb-10">
          My details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Render form fields in grid layout */}
          {formFields.map((row, rowIndex) => (
            <div 
              key={`row-${rowIndex}`} 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {row.map((field) => (
                <div key={field.id} className={field.gridClass}>
                  <Input
                    label={field.label}
                    type={field.type}
                    name={field.id}
                    register={register}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Actions */}
          <div className="pt-6">
            <Button type="submit" variant="primary">
              SAVE CHANGES
            </Button>
          </div>

          {/* Optional Cancel Button */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="filled"
              onClick={() => reset()}
              className="hidden" // Hide if not needed
            >
              Reset Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;