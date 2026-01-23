import React, { useState } from "react";
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
        <label className={`text-[16px] inter text-[#6b0f12] ${labelClass}`}>
          {label}
        </label>
      )}
      <input
        type="text"

        {...register(name)}
        placeholder={placeholder}
        className={`w-full bg-[#ddd2bf] text-inter placeholder:text-[#5B0D0D] text-[#5B0D0D] px-4 py-3 text-[16px] outline-none ${inputClass}`}
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
  disabled = false,
  ...props
}) => {
  const baseClasses = "w-full py-4 text-[16px] inter transition";
  const variants = {
    primary: "bg-[#6b0f12] text-white hover:bg-[#5a0d10]",
    outline: "border border-[#6b0f12] text-[#6b0f12] hover:bg-[#6b0f12] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Main Component
const ChangePass = () => {
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
    console.log("Password change data:", data);
    handleSaveSuccess()
    // Handle password change logic here
    reset();
  };

  const handleCancel = () => {
    reset();
  };

  // Define form fields configuration
  const formFields = [
    {
      id: "currentPassword",
      label: "Current Password:",
      type: "password",
      placeholder: "Enter Current Password",
    },
    {
      id: "newPassword",
      label: "New Password:",
      type: "password",
      placeholder: "Enter New Password",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password:",
      type: "password",
      placeholder: "Enter Confirm Password",
    },
  ];

  return (
    <div className="w-full h-full bg-[#f7eed8] p-4 sm:p-4 md:p-12">
      <div className="w-full  mx-auto">
        <h2 className="text-3xl canela font-serif text-[#6b0f12] mb-6 md:mb-10">
          Change Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Dynamically render form fields */}
          {formFields.map((field) => (
            <Input
              key={field.id}
              label={field.label}
              type={field.type}
              name={field.id}
              register={register}
              placeholder={field.placeholder}
            />
          ))}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <div className="flex-1">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
            <div className="flex-1">
              <Button type="submit" variant="primary">
                Update
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;